import Input from "./Input";

export default function FormAdd() {
  return (
    <form className="w-[300px]" action="">
      <Input type="text" name="name" placeholder="Enter User Name" />
      <Input type="email" name="email" placeholder="Enter User Email" />
      <button className="bg-blue-500 text-white p-2 rounded-md mt-2 block w-full">
        Save
      </button>
    </form>
  );
}
