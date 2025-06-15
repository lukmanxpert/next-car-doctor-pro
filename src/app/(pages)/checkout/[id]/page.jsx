import SharedBanner from '@/app/shared/SharedBanner'
import React from 'react'
import CheckOutForm from '../components/CheckOutForm';

export default async function CheckOutPage({ params }) {
    const { id } = await params;
    const response = await fetch(`http://localhost:3000/api/service/${id}`)
    const service = await response.json();
    return (
        <div>
            <SharedBanner title={"Check Out"} route={"Home/Checkout"} />
            <CheckOutForm data={service} />
        </div>
    )
}