"use server";

import { connectDB } from "./db";
import { User } from "./schema";
import { TFetchUserAll } from "@/type/user";

export const fetchUsersAll: TFetchUserAll = async () => {
  connectDB();
  return await User.find({});
};
