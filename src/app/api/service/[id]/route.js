import { ObjectId } from "mongodb";
import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import { revalidatePath } from "next/cache";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
  const service = await serviceCollection.findOne({ _id: new ObjectId(id) });
  return NextResponse.json(service);
};

export const DELETE = async (req, { params }) => {
  const { user } = await getServerSession(authOptions);
  const p = await params;
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };
  const booking = await bookingCollection.findOne({ _id: new ObjectId(p.id) });
  const bookingUserEmail = booking.email;
  const isUserOk = user?.email === bookingUserEmail;
  if (isUserOk) {
    const deleteResponse = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings")
    return NextResponse.json(deleteResponse);
  } else {
    return NextResponse.json(
      { message: "Forbidden access", success: false },
      { status: 500 }
    );
  }
};
