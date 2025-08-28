"use client";
import { useState } from "react";
import Link from "next/link";

export default function Reset() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    // api call for reset password
    console.log("Reset request for:", email);
    alert("If this email exists, you will receive a reset link");
  };

  return (
    <div className="flex flex-col my-8 justify-center items-center">
      <h1 className="text-center text-3xl font-semibold">
        Reset your password
      </h1>
      <p className="text-center text-s text-gray-800">
        We will send you an email to reset your password
      </p>
      <form onSubmit={onSubmit} className="flex flex-col">
        <h4 className="mt-4">Email</h4>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 rounded-md pl-4 pr-30 py-2 mb-5 mt-2"
        />
        <button
          className="text-center bg-red-500 py-2 rounded-md text-white font-semibold"
          type="submit"
        >
          Submit
        </button>
        <p className="mt-3 text-center font-semibold">
          <Link href="/signIn">Cancel</Link>
        </p>
      </form>
    </div>
  );
}
