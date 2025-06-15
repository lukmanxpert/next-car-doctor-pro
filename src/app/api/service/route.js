import { NextResponse } from "next/server";

export const POST = async (req) => {
  const payload = await req.json;
  console.log("post payload", payload);
  NextResponse.json({});
};
