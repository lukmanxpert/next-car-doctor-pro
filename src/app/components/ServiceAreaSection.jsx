import Image from "next/image";
import services from "../../../public/services.json";
import HeaderTitle from "../shared/HeaderTitle";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceAreaSection() {
    const data = services;
    return (
        <div className="my-4">
            <HeaderTitle name={"Service"} title={"Our Service Area"} desc1={"the majority have suffered alteration in some form, by injected humour, or randomised"} desc2={"words which don't look even slightly believable."} />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:place-items-center gap-4 mt-4">
                {
                    data.map((service) => {
                        return <div key={service._id} className="border border-[#E8E8E8] md:w[370px] md:h-[355px] rounded p-4">
                            <div className="w-full md:h-[220px] ">
                                <Image src={service.img} width={350} height={220} alt={service.title} className="w-full h-full rounded"></Image>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-text-2 my-1">{service.title}</h1>
                                <div className="flex justify-between items-center gap-4">
                                    <p className="text-xl font-semibold text-primary-100">Price: ${service.price}</p>
                                    <button className="text-primary-100 cursor-pointer hover:scale-125 transition" ><FaArrowRight size={20} /></button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}