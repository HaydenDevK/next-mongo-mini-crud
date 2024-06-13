export default function UserList() {
  return (
    <ul className="flex flex-col gap-4">
      <UserItem />
    </ul>
  );
}

function UserItem() {
  return (
    <li className="bg-white w-[300px] p-3 rounded-lg">
      <div>
        <h1 className="text-xl font-semibold">NAME</h1>
        <p>EMAIL</p>
        <div className="flex gap-4 justify-end">
          <form action="">
            <input type="hidden" name="id" value={""} />
            <button className="underline text-rose-500">삭제</button>
          </form>
        </div>
      </div>
    </li>
  );
}
