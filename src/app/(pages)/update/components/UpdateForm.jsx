"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function UpdateBookingForm({ data }) {
    const router = useRouter()
    const { data: session } = useSession()
    const user = session?.user
    console.log('users from update', user);
    const [formData, setFormData] = useState({
        name: user?.name,
        email: user?.email,
        phone: data?.phone,
        date: data?.date,
        dueAmount: data?.dueAmount,
        address: data?.address,
        serviceId: data?._id,
    })
    const handleChange = event => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async event => {
        event.preventDefault()
        if (!user) {
            return router.push("/login")
        }
        const response = await fetch("http://localhost:3000/api/service", {
            method: "POST",
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        if (data.acknowledged) {
            toast.success("Order Success!")
            router.push("/services")
        }
        console.log("response data", data);
    }
    console.log("data", data);
    console.log("form data", formData);
    return (
        <div>
            <div className="mx-auto p-6 bg-[#F3F3F3] rounded-lg shadow-md my-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            required
                            type="text"
                            name='name'
                            value={formData.name}
                            readOnly
                            placeholder="Your Name"
                            className="p-3 rounded-md bg-white border-none w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            required
                            type="email"
                            name='email'
                            value={formData.email}
                            readOnly={formData.email}
                            placeholder="Your Email"
                            className="p-3 rounded-md bg-white border-none w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            required
                            value={formData.date}
                            type="date"
                            name='date'
                            onChange={handleChange}
                            className="p-3 rounded-md bg-white border-none w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            required
                            type="number"
                            name='dueAmount'
                            value={formData.dueAmount}
                            readOnly
                            placeholder="Due Amount"
                            className="p-3 rounded-md bg-white border-none w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            required
                            value={formData.phone}
                            type="tel"
                            name='phone'
                            onChange={handleChange}
                            placeholder="Phone"
                            className="p-3 rounded-md bg-white border-none w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            required
                            value={formData.address}
                            type="text"
                            name='address'
                            onChange={handleChange}
                            placeholder="Present Address"
                            className="p-3 rounded-md bg-white border-none w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary-100 hover:bg-orange-700 cursor-pointer text-white font-semibold py-3 px-6 rounded-md transition duration-200"
                    >
                        Update Booking
                    </button>
                </form>
            </div>
        </div>
    )
}