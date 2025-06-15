import SharedBanner from '@/app/shared/SharedBanner'
import React from 'react'
import CheckOutForm from '../components/CheckOutForm';

export default async function CheckOutPage({ params }) {
    const { id } = await params;
    return (
        <div>
            <SharedBanner title={"Check Out"} route={"Home/Checkout"} />
            <CheckOutForm id={id} />
        </div>
    )
}