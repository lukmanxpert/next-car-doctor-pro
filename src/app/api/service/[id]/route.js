import { ObjectId } from "mongodb";
import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
  const service = await serviceCollection.findOne({ _id: new ObjectId(id) });
  return NextResponse.json(service);
};