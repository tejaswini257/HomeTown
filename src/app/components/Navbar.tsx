"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Heart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Row */}
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logoanimatio.gif"   // Make sure file is inside /public
            alt="HomeTown Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* ✅ Search Bar */}
        <div className="flex-1 mx-6 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded-full border border-gray-300 pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-500"
              size={20}
            />
          </div>
        </div>

        {/* ✅ Icons */}
        <div className="flex items-center gap-6 text-gray-700">
          <User className="cursor-pointer hover:text-red-600" size={22} />
          <div className="relative">
            <Heart className="cursor-pointer hover:text-red-600" size={22} />
            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <ShoppingCart
            className="cursor-pointer hover:text-red-600"
            size={22}
          />
        </div>
      </div>

      {/* ✅ Navigation Links (Centered) */}
      <div className="border-t">
        <div className="container mx-auto flex justify-center gap-8 px-6 py-2 text-sm font-medium text-gray-700">
          <Link href="/furniture" className="hover:text-red-600">Furniture</Link>
          <Link href="/kitchen" className="hover:text-red-600">Kitchen & Dining</Link>
          <Link href="/decor" className="hover:text-red-600">Home Decor</Link>
          <Link href="/furnishing" className="hover:text-red-600">Home Furnishing</Link>
          <Link href="/interiors" className="hover:text-red-600">Interiors</Link>
          <Link href="/clearance" className="hover:text-red-600">Clearance Sale</Link>
        </div>
      </div>
    </nav>
  );
}
