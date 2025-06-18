"use client"
import React from 'react'

export default function DeleteBtn() {
    const handleDelete = async (id) => {
        const result = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: "DELETE"
        });
        const data = await result.json()
        console.log(data);
    }
    return (
        <button
            className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded"
            onClick={() => handleDelete(booking._id)}
        >
            Delete
        </button>
    )
}
