"use client";

import Link from "next/link";

const categories = [
  { name: "Sofas", href: "/sofas", image: "/images/1image.png" },
  { name: "Recliners", href: "/recliners", image: "/images/2image.png" },
  { name: "Beds", href: "/beds", image: "/images/3 image.avif"},
  { name: "Center Tables", href: "/center-tables", image: "/images/4 image.avif" },
  { name: "Dining Sets", href: "/dining", image: "/images/6 image.png" },
  { name: "Cabinets", href: "/cabinets", image: "/images/7 image.png" },
  { name: "Dressing Tables", href: "/dressing", image: "/images/8 image.png" },
  { name: "Cushions", href: "/cushions", image: "/images/10 image.png" },
  { name: "Curtains", href: "/curtains", image: "/images/11 image.png" },
  { name: "Planters", href: "/planters", image: "/images/12 image.png" },
  { name: "Figurines", href: "/figurines", image: "/images/13 image.png" },
  { name: "Paintings", href: "/paintings", image: "/images/14 image.png"},
];

export default function Category() {
  return (
    <section className="container mx-auto px-6 mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Popular categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-24 h-24 object-contain mb-4 group-hover:scale-105 transition"
            />
            <span className="text-base font-medium text-gray-700 group-hover:text-red-600">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
