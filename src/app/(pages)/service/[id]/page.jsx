import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function ServiceDetailsPage({ params }) {
    const { id } = await params;
    const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
    const service = await serviceCollection.findOne({ _id: new ObjectId(id) })
    console.log("service details", service);
    return (
        <div>
            {id}
        </div>
    )
}
