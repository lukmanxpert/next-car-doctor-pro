"use client";
import Image from "next/image";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../../public/assets/logo.svg"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center mb-4">
                            <Image src={logo} height={70} width={70} alt="logo" />
                        </div>
                        <p className="text-sm">
                            Car Doctor is a software and web technology company. A team who also a serial entrepreneur.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            <a href="#" className="hover:text-white"><span className="transition"><FaGoogle /></span></a>
                            <a href="#" className="hover:text-white"><span className="transition"><FaTwitter /></span></a>
                            <a href="#" className="hover:text-white"><span className="transition"><FaInstagram /></span></a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm font-semibold text-white mb-2">About</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Service</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm font-semibold text-white mb-2">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Support Center</a></li>
                            <li><a href="#" className="hover:text-white">Feedback</a></li>
                            <li><a href="#" className="hover:text-white">Accessibility</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}