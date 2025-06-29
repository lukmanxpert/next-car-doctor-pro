"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import SocialLogIn from '../../components/SocialLogIn';


export default function LogInForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = formData.email
        const password = formData.password
        try {
            const result = await signIn("credentials", { redirect: false, email, password, callbackUrl: "/" })
            if (result.ok) {
                toast.success("login Success!")
                setFormData({
                    email: "",
                    password: ""
                })
                router.push("/")
            } else {
                toast.error("Wrong Credentials")
            }
        } catch (error) {
            toast.error("Authentication failed!")
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    return (
        <div className="w-full border border-gray-200 rounded-lg p-8 shadow-sm bg-white">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        required
                        value={formData.email}
                        onChange={handleChange}
                        name='email'
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                        required
                        value={formData.password}
                        onChange={handleChange}
                        name='password'
                        type="password"
                        placeholder="Your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary-100 hover:bg-[#e63600] text-white font-semibold py-2 rounded-md transition-all cursor-pointer"
                >
                    Sign In
                </button>
            </form>

            <div className="my-6 text-center text-gray-500 text-sm">Or Sign In with</div>

            <SocialLogIn />

            <div className="text-center text-sm text-gray-600">
                Don't have an account? <Link href={"/register"} className="text-primary-100 font-medium">Create Account</Link>
            </div>
        </div>
    )
}
