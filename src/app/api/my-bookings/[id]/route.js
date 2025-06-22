import { authOptions } from "@/app/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  const bookingsCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const booking = await bookingsCollection.findOne(query);
  const isOwnerOk = email === booking?.email;
  if (isOwnerOk) {
    return NextResponse.json(booking);
  } else {
    return NextResponse.json({ message: "Forbidden access!" }, { status: 403 });
  }
};

export const PATCH = async (req, { params }) => {
  const p = await params;
  const bookingsCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const currentBookings = await bookingsCollection.findOne(query);
  const isOwnerOk = email === currentBookings?.email;
  if (isOwnerOk) {
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
  } else {
    return NextResponse.json({ message: "Forbidden access!" }, { status: 403 });
  }
};
