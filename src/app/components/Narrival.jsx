"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Rico Chair",
    price: "₹59,900",
    image1: "/images/sh12.png",
    image2: "/images/gii441.png",
  },
  {
    id: 2,
    name: "Wooden Chair",
    price: "₹124,900",
    image1: "/images/gii55.png",
    image2: "/images/gii551.png",
  },
  {
    id: 3,
    name: "Wall Frame",
    price: "₹79,900",
    image1: "/images/sh16.png",
    image2: "/images/gii77.png",
  },
  {
    id: 4,
    name: "Bean Bag Chair",
    price: "₹42,000",
    image1: "/images/gi88.png",
    image2: "/images/gi881.png",
  },
  {
    id: 5,
    name: "Office Chair",
    price: "₹89,900",
    image1: "/images/sh15.png",
    image2: "/images/gi991.png",
  },
  {
    id: 6,
    name: "Lamp Set",
    price: "₹29,900",
    image1: "/images/sh13.png",
    image2: "/images/gii101.png",
  },
];

export default function NewArrival() {
  return (
    <section className="min-h-screen py-10 px-4 sm:px-6 lg:px-12 bg-[#FCFCF6]">
      <div className="mb-12 text-center">
        <h2
          className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide inline-block"
          style={{
            color: "#A0937D",
            letterSpacing: "0.1em",
          }}
        >
          New Arrivals
        </h2>
        <div
          style={{
            background: "#E7D4B5",
            height: "6px",
            width: "140px",
            margin: "16px auto 0 auto",
            borderRadius: "6px",
          }}
        />
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-[#EFEFEF] shadow-sm p-4 flex flex-col transition-shadow hover:shadow-lg relative w-full max-w-xs mx-auto"
            style={{ fontSize: "0.95rem", minHeight: "420px" }}
          >
            {/* Product image with hover */}
            <div className="relative w-full aspect-square flex items-center justify-center mb-4 overflow-hidden group">
              <Image
                src={product.image1}
                alt={product.name}
                fill
                className="object-contain transition-opacity rounded-lg group-hover:opacity-0"
              />
              <Image
                src={product.image2}
                alt={product.name}
                fill
                className="object-contain rounded-lg absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Details + Button */}
            <div className="flex flex-col flex-grow justify-between">
              <div className="mb-4 text-center">
                <div className="font-semibold text-gray-900 text-base">
                  {product.name}
                </div>
                <div className="text-sm text-gray-500 mt-1">{product.price}</div>
              </div>

              <button
                className="w-full py-2 rounded text-sm font-semibold transition-colors border mt-auto"
                style={{
                  backgroundColor: "#A0937D",
                  color: "#fff",
                  borderColor: "#A0937D",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#8a826b";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#A0937D";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                + Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}