export default function Input({ ...restProps }: React.ComponentProps<"input">) {
  return (
    <input
      className="border border-gray-300 rounded-md p-2 block mb-4 w-full"
      {...restProps}
    />
  );
}
