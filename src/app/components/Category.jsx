"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Sofas", href: "/sofas", image: "/images/gi3.png" },
  { name: "Recliners", href: "/recliners", image: "/images/gi1.png" },
  { name: "Beds", href: "/beds", image: "/images/gi2.png" },
  { name: "Center Tables", href: "/center-tables", image: "/images/gi4.png" },
  { name: "Dining Sets", href: "/dining", image: "/images/gi5.png" },
  { name: "Cabinets", href: "/cabinets", image: "/images/gi6.png" },
  { name: "Dressing Tables", href: "/dressing", image: "/images/gi7.png" },
  { name: "Cushions", href: "/cushions", image: "/images/gi11.png" },
  { name: "Curtains", href: "/curtains", image: "/images/gi8.png" },
  { name: "Planters", href: "/planters", image: "/images/gi13.png" },
  { name: "Figurines", href: "/figurines", image: "/images/gi14.png" },
  { name: "Paintings", href: "/paintings", image: "/images/gi9.png" },
];

export default function Category() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F6E6CB] via-[#E7D4B5] to-[#F6E6CB] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#5C4033] leading-snug"
        >
          Shop by Category
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-3 sm:mt-4 text-base sm:text-lg text-[#6B4F3D] px-2 sm:px-0"
        >
          Find the perfect furniture & décor for every corner of your home.
        </motion.p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className={`${idx % 2 === 0 ? "translate-y-3 sm:translate-y-4" : "-translate-y-3 sm:-translate-y-4"}`}
          >
            <Link href={cat.href} className="group block text-center">
              {/* Floating Image */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 6, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2,
                }}
                className="relative w-full aspect-square overflow-hidden"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* Text */}
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold text-[#4A2C2A] group-hover:text-[#2F1B18] transition">
                {cat.name}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}