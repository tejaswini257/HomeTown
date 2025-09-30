"use client";

import Image from "next/image";
import Link from "next/link";
import { allProducts } from "../data/products";

// Use a consistent source of truth: pick first 6 sofas
const products = (allProducts.sofas || []).slice(0, 6).map(p => ({
  id: p.id,
  name: p.name,
  price: `₹${p.price.toLocaleString('en-IN')}`,
  image1: p.image1,
  image2: p.image2,
  category: p.category
}));

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
            <Link href={`/products/${product.category}/${product.id}`} className="relative w-full aspect-square flex items-center justify-center mb-4 overflow-hidden group">
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
            </Link>

            {/* Details + Button */}
            <div className="flex flex-col flex-grow justify-between">
              <div className="mb-4 text-center">
                <div className="font-semibold text-gray-900 text-base">
                  {product.name}
                </div>
                <div className="text-sm text-gray-500 mt-1">{product.price}</div>
              </div>

              <Link
                href={`/products/${product.category}/${product.id}`}
                className="w-full py-2 rounded text-sm font-semibold transition-colors border mt-auto"
                style={{
                  backgroundColor: "#A0937D",
                  color: "#fff",
                  borderColor: "#A0937D",
                }}
              >
                + Order
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}