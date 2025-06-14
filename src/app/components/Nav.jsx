"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/assets/logo.svg'
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react'

export default function Nav() {
    const { data: session, status: sessionStatus } = useSession()
    console.log("session", session);
    const user = false
    const pathname = usePathname();
    const links = <>
        <li>
            <Link href={"/"} className={`${pathname === "/" && "active"} navLink`}>Home</Link>
        </li>
        <li>
            <Link href={"/about"} className={`${pathname.includes("/about") && "active"} navLink`}>About</Link>
        </li>
        <li>
            <Link href={"/services"} className={`${pathname.includes("/services") && "active"} navLink`}>Services</Link>
        </li>
        <li>
            <Link href={"/blog"} className={`${pathname.includes("/blog") && "active"} navLink`}>Blog</Link>
        </li>
        <li>
            <Link href={"/contact"} className={`${pathname.includes("/contact") && "active"} navLink`}>Contact</Link>
        </li>
    </>
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm gap-1 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href={"/"}><Image src={logo} height={50} width={50} alt='logo'></Image></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-2 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex justify-center items-center gap-4 mr-8'>
                    <button className='cursor-pointer transition hover:scale-125 hover:text-primary-100'><BsHandbag size={20} /></button>
                    <button className='cursor-pointer transition hover:scale-125 hover:text-primary-100'><CiSearch size={20} /></button>
                </div>
                <button className="btn bg-transparent text-primary-100 border-primary-100 hover:bg-primary-100 hover:text-white">Appointment</button>
                {/* user info */}
                <div className="dropdown mx-2 dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user ? user.img : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            sessionStatus === "authenticated"
                                ? <>
                                    <li><Link href={"profile"} className="justify-between navLink">Profile<span className="badge">New</span></Link></li>
                                    <li><button onClick={() => signOut()} className='navLink'>Logout</button></li>
                                </>
                                : <li><Link href={"/login"} className={`${(pathname.includes("/login") || pathname.includes("/register")) && "active"} navLink`}>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
