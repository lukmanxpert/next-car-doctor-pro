"use client"
import { signIn } from 'next-auth/react';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function SocialLogIn() {
    const handleSocialLogIn = async (providerName) => {
        const result = await signIn(providerName, { redirect: false, callbackUrl: "/" })
    }
    return (
        <div className="flex justify-center space-x-4 mb-4">
            <button onClick={() => handleSocialLogIn("google")} className="w-10 h-10 cursor-pointer hover:scale-125 transition-all rounded-full bg-gray-100 flex items-center justify-center hover:shadow">
                <FaGoogle />
            </button>
            <button onClick={() => handleSocialLogIn("github")} className="w-10 h-10 cursor-pointer hover:scale-125 transition-all rounded-full bg-gray-100 flex items-center justify-center hover:shadow">
                <FaGithub />
            </button>
        </div>
    )
}
