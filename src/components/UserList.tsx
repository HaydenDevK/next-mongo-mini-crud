import { deleteUser } from "@/libs/action";
import { TUser } from "@/type/user";

const fetchUsersAll = async () =>
  (await fetch(`${process.env.NEXT_PUBLIC_LOCAL_HOST_URL}/api/users`)).json();

export default async function UserList() {
  const userList = await fetchUsersAll();

  return (
    <ul className="flex flex-col gap-4">
      {userList &&
        userList.map((user: TUser) => <UserItem key={user._id} user={user} />)}
    </ul>
  );
}

function UserItem({ user }: { user: TUser }) {
  return (
    <li className="bg-white w-[300px] p-3 rounded-lg">
      <div>
        <h1 className="text-xl font-semibold">{user.name}</h1>
        <p>{user.email}</p>
        <div className="flex gap-4 justify-end">
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user._id} />
            <button className="underline text-rose-500">삭제</button>
          </form>
        </div>
      </div>
    </li>
  );
}
