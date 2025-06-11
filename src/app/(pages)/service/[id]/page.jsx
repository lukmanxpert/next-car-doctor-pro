import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import SharedBanner from "@/app/shared/SharedBanner";
import { ObjectId } from "mongodb";

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
            <div className="grid grid-cols-3 w-full h-52 mt-4">
                <div className="col-span-2 bg-red-200"></div>
                <div className="col-span-1 bg-red-400"></div>
            </div>
        </div>
    )
}
