"use client";

import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="space-y-16 my-12">

      {/* 🌟 Banner */}
      <div className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center bg-black">
        <Image
          src="/images/46 image.webp"
          alt="New Collection Banner"
          width={1920}
          height={800}
          className="object-contain w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6 sm:px-16">
          <h2 className="text-white text-3xl sm:text-5xl font-bold leading-snug max-w-3xl">
            Browse through our newest selection crafted with precision and style
          </h2>
          <a
            href="#"
            className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Explore Now →
          </a>
        </div>
      </div>

      {/* 🌟 Decor Section */}
      <div className="flex flex-col sm:flex-row items-center gap-12 bg-white py-12">
        {/* 🖼️ Image Side */}
        <div className="flex">
          <div className="flex-shrink-0 ml-20">
            <Image
              src="/images/47b image.webp"
              alt="Decor"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* ✨ Text Side */}
        <div className="max-w-lg text-center sm:text-left">
          <h3 className="text-3xl font-bold text-gray-900 leading-snug">
            Add warmth to your space{" "}
            <span className="italic font-medium text-gray-700">with our Decor</span>
          </h3>
          <p className="mt-4 text-gray-600 text-lg">
            From walls to windows, explore our collection of decor, furnishings & more
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Shop Decor →
          </a>
        </div>
      </div>

      {/* 🌟 Discount Section */}
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
        {/* ✅ Background Image */}
        <Image
          src="/images/living-room.jpg"
          alt="Discount Banner"
          fill
          className="object-cover"
          priority
        />

        {/* ✅ Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
            Get Extra 5% OFF upto ₹500 <br /> on your first purchase
          </h2>
          <a
            href="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg"
          >
            WELCOME
          </a>
        </div>
      </div>

      {/* 🌟 Text Section Below Discount */}
<div className="max-w-5xl mx-auto text-gray-700 px-6 sm:px-12 space-y-10">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide leading-relaxed">
    HomeTown, one of the best online furniture & home décor stores in India
  </h2>
  
  <p className="text-lg sm:text-xl leading-loose tracking-wide">
    At HomeTown, our stunning furniture and home décor are designed to fit effortlessly into any style, from minimalistic and modern to bold and eclectic. With a wide range of colors, finishes, and designs, you’ll always find something that complements your home perfectly.
  </p>
  
  <p className="text-lg sm:text-xl leading-loose tracking-wide">
    If you think of your home as a work of art, then you’ve likely spent years collecting and curating pieces that speak to you, that tell a story and make your home unique. So, it makes sense that when you find the ideal piece, you want it to be something that will last for generations!
  </p>
  
  <p className="text-lg sm:text-xl leading-loose tracking-wide">
    That’s why we combine authentic craftsmanship with modern materials to bring you furniture that’s built to last. Each piece is thoughtfully designed and meticulously crafted with attention to detail offering lasting quality, timeless style, and affordability that fits your budget.
  </p>

  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-12 tracking-wide">
    Explore our range of home furniture online
  </h3>
  
  <p className="text-lg sm:text-xl leading-loose tracking-wide">
    Inspired by the power of design to transform ordinary spaces into extraordinary lifestyles, we partner with you to create your unique ambience. We take pride in offering a curated selection of top-quality home furnishings for every room, style and budget on our online furniture store.
  </p>

  {/* 🪑 Sections */}
  <div className="space-y-12 mt-12">
    
    {/* Kitchen */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-wide">Kitchen Furniture</h3>
      <p className="text-lg sm:text-xl leading-loose tracking-wide">
        A stylish kitchen is a perfect place to cook up some memories. At HomeTown, we believe your kitchen deserves just as much love and care as any other room in your home. Whether it’s your quiet morning coffee spot, a lively family gathering place, or a quick pit stop before a busy day, your kitchen can be anything you want it to be.
      </p>
      <p className="text-lg sm:text-xl leading-loose tracking-wide">
        No matter your style or needs, HomeTown offers everything you need to bring your dream kitchen to life, from stylish finishes to smart storage solutions. Our collection is designed to make your space both functional and beautiful. Explore our range of fully customizable kitchen designs, furniture, crockery, and accessories thoughtfully crafted to add charm, convenience, and style to your cooking space.
      </p>
    </div>

    {/* Living Room */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-wide">Living Room Furniture</h3>
      <p className="text-lg sm:text-xl leading-loose tracking-wide">
        When you’ve got the kind of style and grandeur in your kitchen and bedroom that only HomeTown can provide, you need a living room to match. At HomeTown, we believe your living room should reflect your personality and love for your home.
      </p>
      <p className="text-lg sm:text-xl leading-loose tracking-wide">
        Whether you’re hosting a dinner party, relaxing with friends, or spending quality time with family, we have everything from swivel chairs to space-saving sofas, stylish bookshelves, sleek TV cabinets, and of course, comfy recliner sofas.
      </p>
    </div>

    {/* Dining Room */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-wide">Dining Room Furniture</h3>
      <p className="text-lg sm:text-xl leading-loose tracking-wide">
        Dining is more than just meals—it’s about sharing moments. At HomeTown, our dining room furniture is designed to bring people together in style. From compact dining sets for small apartments to large, elegant tables for family feasts, our collection covers it all.
      </p>
    </div>

    {/* Bedroom */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-wide">Bedroom Furniture</h3>
      <p className="text-lg sm:text-xl leading-loose tracking-wide">
        Your bedroom is your sanctuary, a place to rest, recharge, and dream. HomeTown offers a range of bedroom furniture that combines comfort with style. From cozy beds with storage options to chic side tables, wardrobes, and dressers, every piece is built to last and designed to match your aesthetic.
      </p>
    </div>

    {/* Office */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-wide">Office Furniture</h3>
      <p className="text-lg sm:text-xl leading-loose tracking-wide">
        Work from home or set up your dream office with our ergonomic and stylish office furniture. From height-adjustable chairs and spacious desks to compact study tables and sleek bookshelves, HomeTown provides solutions that make working from home productive and comfortable.
      </p>
    </div>

  </div>
</div>
</section>
  );
}