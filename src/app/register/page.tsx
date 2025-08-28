"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const defaultData = {
  Firstname: "",
  Lastname: "",
  Email: "",
  PhoneNumber: "",
  Password: "",
};
export default function Register() {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !data.Firstname ||
      !data.Lastname || // <-- I also fixed this condition
      !data.Email ||
      !data.PhoneNumber ||
      !data.Password
    ) {
      alert("Please fill all mandotory fields");
      return;
    }

    //api call
    setLoading(true); // start loading

    try {
      const response = await axios.post("/api/users/register", data);
      setData(defaultData);

      if (response.status >= 200 && response.status < 300) {
        router.replace("/signIn");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white px-16 pt-8 pb-12 mt-4 mb-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4 flex justify-center font-semibold">
        Create account
      </h1>
      <form onSubmit={onRegister} className="flex flex-col  ">
        <h4>First name</h4>
        <input
          type="text"
          name="Firstname"
          placeholder="First name"
          value={data.Firstname}
          onChange={(e) => onValueChange(e)}
          className="bg-gray-100 rounded-md pl-4 pr-30 py-2 mb-5 mt-2"
        />
        <h4>Last name</h4>
        <input
          type="text"
          name="Lastname"
          placeholder="Last name"
          value={data.Lastname}
          onChange={(e) => onValueChange(e)}
          className="bg-gray-100 rounded-md pl-4 pr-20 py-2 mb-5 mt-2 "
        />
        <h4>Email</h4>
        <input
          type="text"
          name="Email"
          placeholder="Email"
          value={data.Email}
          onChange={(e) => onValueChange(e)}
          className="bg-gray-100 rounded-md pl-4 pr-20 py-2 mb-5 mt-2 "
        />
        <h4>Phone Number</h4>
        <input
          type="text"
          name="PhoneNumber"
          placeholder="Phone Number"
          value={data.PhoneNumber}
          onChange={(e) => onValueChange(e)}
          className="bg-gray-100 rounded-md pl-4 pr-20 py-2 mb-5 mt-2 "
        />
        <h4>Password</h4>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={data.Password}
          onChange={(e) => onValueChange(e)}
          className="bg-gray-100 rounded-md pl-4 pr-60 py-2 mb-5 mt-2 "
        />
        <button
          className={`text-center py-2 rounded-md text-white font-semibold ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"
          }`}
          type="submit"
          disabled={loading} // prevent multiple clicks
        >
          {loading ? "Creating..." : "Create"}
        </button>
        <p className="mt-3 text-center font-semibold">
          <Link href="/signIn">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
