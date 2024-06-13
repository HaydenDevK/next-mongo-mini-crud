"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "./db";
import { User } from "./schema";
import { TAddUserFormState, TFetchUserAll } from "@/type/user";

export const fetchUsersAll: TFetchUserAll = async () => {
  connectDB();
  return await User.find({});
};

export const addUser = async (
  prevState: TAddUserFormState,
  formData: FormData
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const newUser = new User({ name, email });

  if (name === "" || email === "")
    return {
      success: false,
      message: "이름과 이메일을 입력해주세요.",
    };
  else {
    connectDB();
    newUser.save();

    revalidatePath("/");

    return {
      success: true,
      message: "유저 추가 성공했습니다.",
    };
  }
};
