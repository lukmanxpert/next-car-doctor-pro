import SharedBanner from "@/app/shared/SharedBanner";
import Image from "next/image";

export default async function ServiceDetailsPage({ params }) {
    const { id } = await params;
    const response = await fetch(`http://localhost:3000/api/service/${id}`)
    const service = await response.json();
    console.log('service', service);
    return (
        <div className="">
            <div>
                <SharedBanner title={"Service Details"} route={"Home/Service Details"} />
            </div>
            <div className="grid grid-cols-3 gap-4 w-full mt-4">
                <div className="col-span-2">
                    <div>
                        <Image src={service?.img} width={752} height={400} alt="details image"
                            className="w-full rounded max-h-[400px] object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-4xl text-black my-4">{service?.title}</h1>
                        <p className="text-base text-text-1 mb-6">{service.description}</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                        <h1 className="text-4xl font-bold text-black">Price ${service?.price}</h1>
                        <button className="bg-primary-100 my-4 rounded py-2 px-3 text-white font-semibold hover:bg-transparent hover:text-black transition hover:outline-2 hover:outline-primary-100 cursor-pointer">Proceed Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
