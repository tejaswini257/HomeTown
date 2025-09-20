"use client";

import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Waddington Fabric Sofa",
    price: "₹14,900",
    oldPrice: "₹36,900",
    discount: "59% Off",
    image1: "/images/14 image.webp",
    image2: "/images/15 image.webp",
  },
  {
    id: 2,
    name: "Garcia Fabric Sofa",
    price: "₹18,500",
    oldPrice: "₹32,000",
    discount: "42% Off",
    image1: "/images/16 image.webp",
    image2: "/images/17 image.webp",
  },
  {
    id: 3,
    name: "Zyra Fabric Sofa",
    price: "₹25,999",
    oldPrice: "₹41,999",
    discount: "38% Off",
    image1: "/images/22 image.webp",
    image2: "/images/18 image.webp",
  },
  {
    id: 4,
    name: "Orlando Fabric Sofa",
    price: "₹21,999",
    oldPrice: "₹34,999",
    discount: "37% Off",
    image1: "/images/24 image.webp",
    image2: "/images/21 image.jpg",
  },
  {
    id: 5,
    name: "Lorenzo Fabric Sofa",
    price: "₹6,999",
    oldPrice: "₹11,999",
    discount: "41% Off",
    image1: "/images/27 image.webp",
    image2: "/images/28 image.webp",
  },
  {
    id: 6,
    name: "Astra Recliner Sofa",
    price: "₹19,499",
    oldPrice: "₹28,499",
    discount: "32% Off",
    image1: "/images/29 image.webp",
    image2: "/images/30 image.webp",
  },
  {
    id: 7,
    name: "Harper Recliner Sofa",
    price: "₹7,500",
    oldPrice: "₹13,500",
    discount: "44% Off",
    image1: "/images/34 image.webp",
    image2: "/images/33 image.webp",
  },
  {
    id: 8,
    name: "Alto Leather Sofa",
    price: "₹18,999",
    oldPrice: "₹29,999",
    discount: "37% Off",
    image1: "/images/26 image.webp",
    image2: "/images/23 image.webp",
  },
  {
    id: 9,
    name: "Venice Fabric Sofa",
    price: "₹9,499",
    oldPrice: "₹15,999",
    discount: "40% Off",
    image1: "/images/18 image.webp",
    image2: "/images/19 image.jpg",
  },
  {
    id: 10,
    name: "Oslo Fabric Sofa",
    price: "₹13,499",
    oldPrice: "₹22,499",
    discount: "40% Off",
    image1: "/images/Baltimor_1Set_HD.webp",
    image2: "/images/Baltimor_9.webp",
  },
];

export default function ProductCard() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 350;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 px-3 sm:px-6" style={{ background: "#FAFAFA" }}>
      <div className="relative">
        {/* Product List */}
        <div
          className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scroll-smooth"
          ref={scrollRef}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[240px] sm:w-[280px] md:w-[325px] min-h-[400px] sm:min-h-[430px] md:min-h-[460px] 
              bg-white rounded-xl sm:rounded-2xl border border-[#EFEFEF] shadow flex flex-col justify-between relative"
            >
              {/* Discount badge */}
              <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#A0937D] text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded shadow z-10">
                {product.discount}
              </span>

              {/* Product image area with hover swap */}
              <div className="relative w-full flex-grow flex items-center justify-center py-6 sm:py-8 group cursor-pointer">
                <div className="relative h-[220px] w-[80%] mx-auto">
                  <Image
                    src={product.image1}
                    alt={product.name}
                    fill
                    className="object-cover transition-opacity rounded-lg group-hover:opacity-0"
                  />
                  <Image
                    src={product.image2}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* DETAILS & Button */}
              <div className="flex flex-col gap-1 sm:gap-2 px-4 sm:px-6 md:px-8 mb-5 sm:mb-6 md:mb-7">
                <div className="text-sm sm:text-base md:text-[17px] font-medium text-gray-900">
                  {product.name}
                </div>
                <div className="mb-3 sm:mb-4 text-sm sm:text-base text-[#a0937d] font-semibold">
                  {product.price}
                </div>
                <button
                  className="w-full text-white font-semibold text-sm sm:text-base py-2 sm:py-2.5 rounded-lg border transition-colors"
                  style={{
                    backgroundColor: "#A0937D",
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

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10 hidden sm:block"
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-10 hidden sm:block"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}