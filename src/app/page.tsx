"use client";

import Link from "next/link";
import Category from "./components/Category";
import ProductCard from "./components/ProductCard";
import StealDeal from "./components/StealDeal";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      <main className="space-y-16">
        {/* ✅ Hero Banner Section */}
        <section className="relative w-full">
          <img
            src="/images/E_U-25_Desktop_Banner_FNL_1.webp"
            alt="Hero Sale Banner"
            className="w-full object-cover rounded-lg shadow-md"
          />
        </section>

        {/* ✅ Discount text below banner */}
        <div className="text-center mt-6">
          <p className="text-xl md:text-2xl tracking-wide leading-relaxed">
            Up to <span className="font-bold text-red-600">70% OFF</span> on all furniture
          </p>
        </div>

        {/* ✅ Popular Categories Section */}
        <Category />

        {/* ✅ Product Cards Section */}
        <ProductCard />

        {/* ✅ Steal Deal Section */}
        <StealDeal />

        {/* ✅ Featured Section */}
        <FeatureSection />
      </main>

      {/* ✅ Footer (separated for clarity) */}
      <Footer />
    </div>
  );
}
