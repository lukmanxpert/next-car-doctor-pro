import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  const bookingsCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const booking = await bookingsCollection.findOne(query);
  return NextResponse.json(booking);
};

export const PATCH = async (req, { params }) => {
  const p = await params;
  const bookingsCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const body = await req.json();
  const updateDoc = {
    $set: body,
  };
  const options = {
    upsert: true,
  };
  const updateResponse = await bookingsCollection.updateOne(
    query,
    updateDoc,
    options
  );
  revalidatePath("/my-bookings");
  return NextResponse.json(updateResponse);
};
