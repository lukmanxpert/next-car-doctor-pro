"use server"
import dbConnect from "@/app/lib/dbConnect";
import { collectionNameObj } from "@/app/lib/dbConnect";

export const registerUser = async (payload) => {
  const { name, email, password } = payload;
  if (!name || !email || !password) {
    return {
      message: "Provide password",
      success: false,
      error: true,
    };
  }
  const userCollection = await dbConnect(collectionNameObj.userCollection);
  const existingUser = await userCollection.findOne({ email: email });
  if (existingUser) {
    return {
      message: "User already existing",
      success: false,
      error: true,
    };
  }
  const result = await userCollection.insertOne(payload);
  if (result.acknowledged) {
    return {
      message: "User register successfully",
      success: true,
      error: false,
      data: result,
    };
  }
};
