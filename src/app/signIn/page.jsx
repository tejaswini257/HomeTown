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

    setLoading(true);

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
    <div className="min-h-screen flex flex-col bg-[#fbfaf8]">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-[#F6E6CB] shadow-lg rounded-2xl w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-center text-[#A0937D] mb-6">
            Sign In
          </h1>
          <form onSubmit={onSign} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#A0937D]">
                Email
              </label>
              <input
                type="text"
                name="Email"
                placeholder="Enter email"
                value={data.Email}
                onChange={onValueChange}
                className="w-full mt-1 px-4 py-2 bg-white border border-[#E3CDC1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0937D]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-[#A0937D]">
                Password
              </label>
              <input
                type="password"
                name="Password"
                placeholder="Enter password"
                value={data.Password}
                onChange={onValueChange}
                className="w-full mt-1 px-4 py-2 bg-white border border-[#E3CDC1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0937D]"
              />
            </div>

            {/* Forgot Password */}
            <p className="text-sm text-right">
              <Link
                href="/reset"
                className="text-[#A0937D] hover:text-[#E3CDC1] font-medium"
              >
                Forgot your password?
              </Link>
            </p>

            {/* Sign In Button */}
            <button
              className={`w-full py-2 rounded-lg text-white font-semibold transition-all duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#A0937D] hover:bg-[#E3CDC1]"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {/* Create Account Button */}
            <Link href="/register">
              <button
                type="button"
                className="w-full py-2 mt-3 rounded-lg text-[#A0937D] font-semibold border border-[#A0937D] hover:bg-[#A0937D] hover:text-white transition-all duration-200"
              >
                Create Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}