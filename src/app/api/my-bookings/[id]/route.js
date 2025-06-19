import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  const bookingsCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const booking = await bookingsCollection.findOne(query);
  return NextResponse.json(booking);
};
