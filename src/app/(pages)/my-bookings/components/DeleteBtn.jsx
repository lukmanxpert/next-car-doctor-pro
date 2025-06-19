"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

export default function DeleteBtn({ id }) {
    const router = useRouter()
    const handleDelete = async (id) => {
        toast((t) => (
            <div className='flex justify-center items-center gap-2'>
                Confirm Delete?
                <div className='flex justify-center items-center gap-2'>
                    <button className='py-1 px-2 rounded bg-green-600 text-white cursor-pointer' onClick={() => toast.dismiss(t.id)}>
                        Cancel
                    </button>
                    <button className='py-1 px-2 rounded bg-red-600 text-white cursor-pointer' onClick={async () => {
                        const result = await fetch(`http://localhost:3000/api/service/${id}`, {
                            method: "DELETE"
                        });
                        const data = await result.json()
                        console.log(data);
                        router.refresh();
                        toast.dismiss(t.id)
                    }}>
                        Confirm
                    </button>
                </div>
            </div>
        ));

    }
    return (
        <button
            className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded"
            onClick={() => handleDelete(id)}
        >
            Delete
        </button>
    )
}
