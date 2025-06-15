"use server";
import bcrypt from "bcrypt";

import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect";

export const logInUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) {
    return null;
  }
  const userCollection = await dbConnect(collectionNameObj.userCollection);
  const user = await userCollection.findOne({ email: email });
  if (!user) {
    return null;
  }
  const isOkPassWord = await bcrypt.compare(password, user.password);
  if (!isOkPassWord) {
    return null;
  }
  return user;
};
