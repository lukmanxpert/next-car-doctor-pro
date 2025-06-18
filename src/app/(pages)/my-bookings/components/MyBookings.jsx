import DeleteBtn from "./DeleteBtn";

export default function MyBookings({ bookings }) {
    return (
        <div className="overflow-x-auto w-full py-6">
            <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Image</th>
                        <th className="px-4 py-2 text-left">Service Name</th>
                        <th className="px-4 py-2 text-left">Date</th>
                        <th className="px-4 py-2 text-left">Price</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="text-center py-6 text-gray-500">
                                No bookings found.
                            </td>
                        </tr>
                    ) : (
                        bookings.map((booking, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="px-4 py-2">
                                    <img
                                        src={booking.serviceImg}
                                        alt={booking.serviceName}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2">{booking.serviceName}</td>
                                <td className="px-4 py-2">{booking.date}</td>
                                <td className="px-4 py-2 font-semibold">${booking.servicePrice}</td>
                                <td className="px-4 py-2">
                                    <DeleteBtn id={booking._id} />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}