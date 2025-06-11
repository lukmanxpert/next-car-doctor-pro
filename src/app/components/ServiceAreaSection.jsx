import Image from "next/image";
import HeaderTitle from "../shared/HeaderTitle";
import { FaArrowRight } from "react-icons/fa";
import dbConnect from "../lib/dbConnect";

export default async function ServiceAreaSection() {
    const servicesCollection = dbConnect("services")
    const data = await servicesCollection.find({}).toArray()
    console.log(data);
    return (
        <div className="my-4">
            <HeaderTitle name={"Service"} title={"Our Service Area"} desc1={"the majority have suffered alteration in some form, by injected humour, or randomised"} desc2={"words which don't look even slightly believable."} />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:place-items-center gap-4 mt-4">
                {
                    data.map((service) => {
                        return (
                            <div
                                key={service.service_id}
                                className="border border-[#E8E8E8] rounded p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm flex flex-col mx-auto"
                            >
                                <div className="w-full h-40 sm:h-48 md:h-40 lg:h-56 relative mb-2">
                                    <Image
                                        src={service.img}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        alt={service.title}
                                        className="rounded"
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-text-2 my-1">{service.title}</h1>
                                    <div className="flex justify-between items-center gap-4 mt-auto">
                                        <p className="text-base md:text-lg font-semibold text-primary-100">Price: ${service.price}</p>
                                        <button className="text-primary-100 cursor-pointer hover:scale-125 transition">
                                            <FaArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


