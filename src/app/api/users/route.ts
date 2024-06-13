import { connectDB } from "@/libs/db";
import { User } from "@/libs/schema";

export async function GET() {
  connectDB();
  const usersAll = await User.find({});
  return Response.json(usersAll);
}
