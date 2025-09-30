"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = [
  { id: 1, name: "Wallstorage", image: "/images/gi20.png" },
  { id: 2, name: "Corner Sofa", image: "/images/gi21.png" },
  { id: 3, name: "Sofa", image: "/images/gi22.png" },
  { id: 4, name: "Bookcase", image: "/images/gi23.png" },
  { id: 5, name: "Sideboard", image: "/images/gi24.png" },
  { id: 6, name: "Tv stand", image: "/images/gi25.png" },
];

// Responsive sticker layout with position adjustments
const stickerLayout = [
  // Wallstorage - Top Left
  { idx: 0, style: { top: "7%", left: "7%" }, responsive: { sm: { top: "6%", left: "5%" } } },
  // Corner Sofa - Top Right
  { idx: 1, style: { top: "7%", right: "7%" }, responsive: { sm: { top: "6%", right: "5%" } } },
  // Sofa - Bottom Left
  { idx: 2, style: { bottom: "10%", left: "7%" }, responsive: { sm: { bottom: "8%", left: "5%" } } },
  // Bookcase - Bottom Right
  { idx: 3, style: { bottom: "10%", right: "7%" }, responsive: { sm: { bottom: "8%", right: "5%" } } },
  // Sideboard - Higher and centered ABOVE text
  {
    idx: 4,
    style: { top: "1%", left: "42%", transform: "translateX(-50%)" },
    responsive: { sm: { top: "2%", left: "50%", transform: "translateX(-50%)" } },
  },
  // Tv stand - Slightly left of center near bottom
  {
    idx: 5,
    style: { bottom: "5%", left: "42%", transform: "translateX(-42%)" },
    responsive: { sm: { bottom: "6%", left: "50%", transform: "translateX(-50%)" } },
  },
];

export default function A() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative min-h-[100vh] pt-12 pb-16 px-4 sm:px-6 max-w-7xl mx-auto bg-[#f7f3e9] rounded-3xl overflow-visible">
      {/* Absolutely centered responsive text */}
      <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center pointer-events-none px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#4b2e2e] drop-shadow-lg tracking-tight leading-none text-center">
          Pick Your Design
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl text-[#7a3e3e] font-medium text-center max-w-2xl">
          Style your home beautifully with our curated collections
        </p>
      </div>

      {/* Stickers with bobbing animation */}
      {stickerLayout.map((st, i) => {
        const cat = categories[st.idx];
        const isHovered = hoveredId === cat.id;
        return (
          <motion.div
            key={cat.id}
            className="absolute flex flex-col items-center z-20"
            style={st.style}
            onMouseEnter={() => setHoveredId(cat.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ scale: 1.08 }}
          >
            <Link href="#shop-by-category" aria-label={`Explore ${cat.name}`}>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className="relative w-32 sm:w-40 md:w-48 lg:w-64 h-32 sm:h-40 md:h-48 lg:h-64 flex flex-col items-center"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                width={250}
                height={250}
                className="object-contain drop-shadow-xl mx-auto"
              />
              {/* Tooltip ABOVE image */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-[#4b2e2e] px-4 py-1 text-sm sm:text-base font-semibold text-white select-none shadow-lg pointer-events-none whitespace-nowrap"
                  >
                    {cat.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
}