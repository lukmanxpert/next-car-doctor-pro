import { headers } from "next/headers";
import MyBookings from "./components/MyBookings";

const fetchBookings = async () => {
    const result = await fetch("http://localhost:3000/api/service", {
        headers: headers()
    });
    if (!result.ok) {
        // Optionally, handle specific status codes
        return [];
    }
    // Check if response has content
    const text = await result.text();
    if (!text) return [];
    return JSON.parse(text);
}

export default async function MyBookingsPage() {
    const bookings = await fetchBookings();
    return (
        <div>
            <MyBookings bookings={bookings} />
        </div>
    )
}