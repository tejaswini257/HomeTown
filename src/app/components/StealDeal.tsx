// components/HomePageSections.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function HomePageSections() {
  const [hoveredDeal, setHoveredDeal] = useState<number | null>(null);

  const deals = [
    {
      id: 1,
      name: "Classic Bed",
      img: "/images/SD1.webp",
    },
    {
      id: 2,
      name: "Saville King Size Bed",
      img: "/images/Saville_King_Size_Bed.webp",
      price: "₹30,900",
      originalPrice: "₹82,500",
    },
    {
      id: 3,
      name: "Coffee Table",
      img: "/images/35 image.webp",
      price: "₹7,999",
      originalPrice: "₹15,000",
    },
    {
      id: 4,
      name: "Wooden Wardrobe",
      img: "/images/36 image.webp",
      price: "₹12,499",
      originalPrice: "₹25,000",
    },
    {
      id: 5,
      name: "Side Table",
      img: "/images/38 image.webp",
      price: "₹4,999",
      originalPrice: "₹10,000",
    },
  ];

  const rooms = [
    { id: 1, name: "Display Cabinet", img: "/images/40 image.webp" },
    { id: 2, name: "Dining", img: "/images/DR.webp" },
    { id: 3, name: "Drawing room", img: "/images/LR.webp" },
    { id: 4, name: "Kitchen", img: "/images/MK.webp" },
    { id: 5, name: "Study", img: "/images/OS.webp" },
    { id: 6, name: "Bedroom", img: "/images/BR2.webp" },
  ];
  
  return (
    <>
      {/* Steal Deal Section */}
      <section className="container mx-auto px-6 md:px-12 py-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ✅ Left Big Image */}
          <div className="relative group overflow-hidden rounded-2xl shadow-lg border-2 border-red-500 min-h-[320px]">
            <Image
              src={deals[0].img}
              alt={deals[0].name}
              fill
              className="object-cover"
            />
          </div>

          {/* ✅ Right 4 Small Images */}
          <div className="grid grid-cols-2 gap-4">
            {deals.slice(1).map((deal) => (
              <div
                key={deal.id}
                className="relative overflow-hidden rounded-xl shadow-md aspect-square"
                onMouseEnter={() => setHoveredDeal(deal.id)}
                onMouseLeave={() => setHoveredDeal(null)}
              >
                <Image
                  src={deal.img}
                  alt={deal.name}
                  fill
                  className="object-cover"
                />
                {/* White Dot Overlay */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow">
                  <span className="text-gray-600 text-xs font-bold">i</span>
                </div>

                {/* Hover Pop-up */}
                {hoveredDeal === deal.id && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl w-60 z-10">
                    <h3 className="text-lg font-semibold text-gray-800">{deal.name}</h3>
                    <p className="text-gray-500 mt-1">
                      <span className="font-bold text-lg text-gray-800">{deal.price}</span>{" "}
                      <span className="text-sm text-gray-400 line-through">
                        {deal.originalPrice}
                      </span>
                    </p>
                    <p className="mt-3 text-xs text-green-600 font-semibold flex items-center">
                      Best Coupon Applied
                    </p>
                    <button className="w-full mt-3 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
                      Add To Cart
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop By Room Section */}
      <section className="container mx-auto px-6 md:px-12 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Shop By Room</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="group relative">
              <div className="relative w-full aspect-[4/3] overflow-hidden shadow-lg rounded-2xl">
                <Image
                  src={room.img}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-center text-lg font-semibold text-gray-700 group-hover:text-red-500 transition-colors duration-300">
                {room.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
