import { authOptions } from "@/app/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  if (!session || !session?.user?.email) {
    return NextResponse.json([], { status: 401 });
  }
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const bookings = await bookingCollection
    .find({ email: session.user.email })
    .toArray();
  return NextResponse.json(bookings);
};

export const POST = async (req) => {
  const payload = await req.json();
  if (!payload) {
    return NextResponse.json({
      message: "Provide payload",
      success: false,
      error: true,
    });
  }
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const result = await bookingCollection.insertOne(payload);
  console.log("post payload", result);
  return NextResponse.json(result);
};
