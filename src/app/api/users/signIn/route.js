// app/api/users/register/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../../../../lib/prisma"; // <-- adjust if needed

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const raw = await req.json();

    const Email = raw.Email ?? raw.email;
    const password = raw.Password ?? raw.password;

    if (!Email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email: Email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare password with hashed one
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // If everything is correct
    return NextResponse.json(
      {
        message: "Login successful",
        user: { email: user.email, name: user.firstName },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("SignIn error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
