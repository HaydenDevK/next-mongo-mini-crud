"use client";

import { addUser } from "@/libs/action";
import Input from "./Input";
import { useRef } from "react";
import { useFormState } from "react-dom";

export default function FormAdd() {
  const ref = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(addUser, {
    success: false,
    message: "",
  });

  const handleFormAction = (formData: FormData) => {
    formAction(formData);
    ref.current?.reset();
  };

  return (
    <>
      <form className="w-[300px]" action={handleFormAction} ref={ref}>
        <Input type="text" name="name" placeholder="Enter User Name" />
        <Input type="email" name="email" placeholder="Enter User Email" />
        <button className="bg-blue-500 text-white p-2 rounded-md mt-2 block w-full">
          Save
        </button>
      </form>
      {state.message && (
        <h1
          className={`${state.success && "text-blue-500"} ${
            !state.success && "text-red-500"
          }`}
        >
          {state.message}
        </h1>
      )}
    </>
  );
}
