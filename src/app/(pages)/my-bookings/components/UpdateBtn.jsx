"use client"

export default function UpdateBtn({ id }) {
    const handleDelete = async (id) => {
        console.log(id);
    }
    return (
        <button
            className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-3 py-1 rounded"
            onClick={() => handleDelete(id)}
        >
            Update
        </button>
    )
}
