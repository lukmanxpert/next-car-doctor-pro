import React from 'react'

export default async function CheckOutForm({ id }) {
    const bookingPayload = {
        id: id
    }
    const response = await fetch(`http://localhost:3000/api/service`, {
        method: "POST",
        body: JSON.stringify(bookingPayload)
    })
    const data = await response.json()
    console.log("response data", data);
    return (
        <div>
            <p>{id}</p>
        </div>
    )
}
