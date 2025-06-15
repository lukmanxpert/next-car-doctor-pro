"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { registerUser } from "../../../../actions/auth/registerController"
import toast from 'react-hot-toast'
import SocialLogIn from '../../components/SocialLogIn'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = await registerUser(formData)
        if (result.error) {
            toast.error(result.message)
        }
        if (result.success) {
            toast.success(result.message)
            setFormData({
                email: "",
                name: "",
                password: ""
            })
            router.push("/login")
        } else {
            toast(result.message)
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    return (
        <div className="w-full border border-gray-200 rounded-lg p-8 shadow-sm bg-white">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        required
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        name='name'
                        placeholder="Your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        required
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name='email'
                        placeholder="Your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                        required
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        name='password'
                        placeholder="Your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary-100 hover:bg-[#e63600] text-white font-semibold py-2 rounded-md transition-all cursor-pointer"
                >
                    Create Account
                </button>
            </form>

            <div className="my-6 text-center text-gray-500 text-sm">Or Sign In with</div>

            <SocialLogIn />

            <div className="text-center text-sm text-gray-600">
                Already have an account? <Link href={"/login"} className="text-primary-100 font-medium">Login</Link>
            </div>
        </div>
    )
}
