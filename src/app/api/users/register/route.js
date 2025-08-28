// app/api/users/register/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '../../../../lib/prisma'; // <-- adjust if needed

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const raw = await req.json();

    const Firstname   = raw.Firstname   ?? raw.firstName   ?? raw.firstname;
    const Lastname    = raw.Lastname    ?? raw.lastName    ?? raw.lastname;
    const Email       = raw.Email       ?? raw.email;
    const PhoneNumber = raw.PhoneNumber ?? raw.phoneNumber ?? raw.phonenumber;
    const password    = raw.password ?? raw.Password;

    const f = v => (typeof v === 'string' ? v.trim() : v);
    const data = {
      Firstname:   f(Firstname),
      Lastname:    f(Lastname),
      Email:       f(Email),
      PhoneNumber: f(PhoneNumber),
      password,
    };

    if (!data.Firstname || !data.Lastname || !data.Email || !data.PhoneNumber || !data.password) {
      return NextResponse.json({ error: 'All the details are required' }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.Email);
    if (!emailOk) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });

    const existing = await prisma.user.findUnique({ where: { email: data.Email } });
    if (existing) return NextResponse.json({ error: 'User already exists' }, { status: 409 });

    const hashed = await bcrypt.hash(data.password, 12);

    await prisma.user.create({
      data: {
        firstName:   data.Firstname,
        lastName:    data.Lastname,
        email:       data.Email,
        phoneNumber: data.PhoneNumber,
        password:    hashed,
      },
    });

    return NextResponse.json({ message: 'User saved successfully' }, { status: 201 });
  } catch (err) {
    console.error('Register error:', err);
    if (err?.code === 'P2002') {
      return NextResponse.json({ error: 'Email or phone already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
