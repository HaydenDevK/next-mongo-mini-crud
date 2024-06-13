import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  // 필드 정의
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema); // models.User가 없으면 userSchema 가지고 새로운 User 만드셈
// models.User가 없으면 userSchema 가지고 User 생성
