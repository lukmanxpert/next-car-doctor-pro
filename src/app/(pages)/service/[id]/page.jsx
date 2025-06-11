import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import SharedBanner from "@/app/shared/SharedBanner";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ServiceDetailsPage({ params }) {
    const { id } = await params;
    const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
    const service = await serviceCollection.findOne({ _id: new ObjectId(id) })
    console.log("service details", service);
    return (
        <div>
            <div>
                <SharedBanner title={"Service Details"} route={"Home/Service Details"} />
            </div>
            <div className="grid grid-cols-3 gap-4 w-full h-52 mt-4">
                <div className="col-span-2">
                    <div>
                        <Image src={service.img} width={752} height={400} alt="details image"
                            className="w-full rounded max-h-[400px] object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-4xl text-black my-4">{service.title}</h1>
                        <p className="text-base text-text-1">{service.description}</p>
                    </div>
                </div>
                <div className="col-span-1 bg-red-400"></div>
            </div>
        </div>
    )
}
