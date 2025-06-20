import React from 'react'
import UpdateBookingForm from '../components/UpdateForm';

export default async function UpdateBooking({ params }) {
  const p = await params;
  const result = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`)
  const data = await result.json()
  return (
    <div>
      <UpdateBookingForm data={data} />
    </div>
  )
}
