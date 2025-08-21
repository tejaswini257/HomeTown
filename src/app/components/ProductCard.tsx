"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Paddington Fabric Sofa",
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
    name: "Zyra Wooden Bed",
    price: "₹25,999",
    oldPrice: "₹41,999",
    discount: "38% Off",
    image1: "/images/22 image.webp",
    image2: "/images/18 image.webp",
  },
  {
    id: 4,
    name: "Orlando Dining Table",
    price: "₹21,999",
    oldPrice: "₹34,999",
    discount: "37% Off",
    image1: "/images/24 image.webp",
    image2: "/images/21 image.jpg",
  },
  {
    id: 5,
    name: "Lorenzo Study Chair",
    price: "₹6,999",
    oldPrice: "₹11,999",
    discount: "41% Off",
    image1: "/images/27 image.webp",
    image2: "/images/28 image.webp",
  },
  {
    id: 6,
    name: "Astra Recliner",
    price: "₹19,499",
    oldPrice: "₹28,499",
    discount: "32% Off",
    image1: "/images/29 image.webp",
    image2: "/images/30 image.webp",
  },
  {
    id: 7,
    name: "Harper Coffee Table",
    price: "₹7,500",
    oldPrice: "₹13,500",
    discount: "44% Off",
    image1: "/images/34 image.webp",
    image2: "/images/33 image.webp",
  },
  {
    id: 8,
    name: "Alto Wardrobe",
    price: "₹18,999",
    oldPrice: "₹29,999",
    discount: "37% Off",
    image1: "/images/26 image.webp",
    image2: "/images/23 image.webp",
  },
  {
    id: 9,
    name: "Venice Bookshelf",
    price: "₹9,499",
    oldPrice: "₹15,999",
    discount: "40% Off",
    image1: "/images/18 image.webp",
    image2: "/images/19 image.jpg",
  },
  {
    id: 10,
    name: "Oslo TV Unit",
    price: "₹13,499",
    oldPrice: "₹22,499",
    discount: "40% Off",
    image1: "/images/Baltimor_1Set_HD.webp",
    image2: "/images/Baltimor_9.webp",
  },
];

export default function ProductCard() {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our <span className="text-red-600">Bestsellers</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Product Image with hover swap */}
            <div className="relative w-full h-64">
              <Image
                src={product.image1}
                alt={product.name}
                fill
                className="object-cover group-hover:hidden"
              />
              <Image
                src={product.image2}
                alt={product.name}
                fill
                className="object-cover hidden group-hover:block"
              />

              {/* Discount badge */}
              <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                {product.discount}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-gray-500 text-xs">HOMETOWN</p>
              <div className="mt-2">
                <span className="text-lg font-bold text-black">
                  {product.price}
                </span>
                <span className="line-through text-gray-400 text-sm ml-2">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
