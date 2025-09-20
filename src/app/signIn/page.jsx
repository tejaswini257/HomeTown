"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const defaultData = {
  Email: "",
  Password: "",
};

export default function SignIn() {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSign = async (e) => {
    e.preventDefault();
    if (!data.Email || !data.Password) {
      alert("Please fill all mandatory fields");
      return;
    }

    // api call
    setLoading(true); // start loading

    try {
      const response = await axios.post("/api/users/signIn", data);
      setData(defaultData);

      if (response.status >= 200 && response.status < 300) {
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid credentials or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="text-center font-semibold text-2xl">Login</h1>
      <p className="text-s mb-5">
        If you have an account with us, please log in.
      </p>
      <form onSubmit={onSign} className="flex flex-col">
        <h4 className="my-2">Email</h4>
        <input
          type="text"
          name="Email"
          placeholder="Email"
          value={data.Email}
          onChange={onValueChange}
          className="py-2 pl-3 pr-40 my-2 bg-gray-100"
        />
        <h4 className="my-2">Password</h4>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={data.Password}
          onChange={onValueChange}
          className="py-2 pl-3 pr-40 my-2 bg-gray-100"
        />
        <p className="text-gray-800">
          <Link href="/reset">Forgot Your Password?</Link>
        </p>
        <button
          className={`text-center py-2 my-2 rounded-md text-white font-semibold ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <p className="text-center font-semibold">
          <Link href="/register">Create Account</Link>
        </p>
      </form>
    </div>
  );
}