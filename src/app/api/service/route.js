import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";

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
