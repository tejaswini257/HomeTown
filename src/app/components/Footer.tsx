"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 🌟 Logo & Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/50 image.png" alt="HomeTown" className="h-12" />
          </div>
          <p className="text-sm text-gray-400 mb-6">
            The Art of Better Living
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaPinterestP size={20} /></a>
            <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* 🌟 Customer Service */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-white">Service Assurance / Warranty</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* 🌟 About HomeTown */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About HomeTown</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Partner with Us</a></li>
            <li><a href="#" className="hover:text-white">Corporate Website</a></li>
            <li><a href="#" className="hover:text-white">Store Locator</a></li>
            <li><a href="#" className="hover:text-white">Sitemap</a></li>
          </ul>
        </div>

        {/* 🌟 Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="text-red-400" size={18} /> care@hometown.in
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-green-400" size={18} /> 08069252525 (10AM - 7PM)
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={18} /> Store Locator
            </li>
          </ul>
        </div>
      </div>

      {/* 🌟 Newsletter */}
      <div className="max-w-4xl mx-auto mt-12 bg-red-600 rounded-2xl p-6 text-center">
        <h3 className="text-white text-lg font-semibold mb-3">Subscribe Now!</h3>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Subscribe →
          </button>
        </form>
        <p className="text-sm text-gray-100 mt-3">
          Join our VIP list for inspiration, new arrivals and more.
        </p>
      </div>

      {/* 🌟 Locations */}
      <div className="max-w-5xl mx-auto text-center mt-10 text-sm text-gray-400">
        <p className="font-semibold text-gray-300 mb-2">Locations</p>
        <p>
          Aurangabad | Ahmedabad | Bhubaneswar | Guwahati | Hyderabad | Kolkata | Lucknow | 
          Nagpur | Nashik | Patna | Pune | Raipur | Siliguri | Visakhapatnam
        </p>
      </div>

      {/* 🌟 Bottom Links */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 max-w-7xl mx-auto px-6">
        <p>© 2025 HT Interiors</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Refund Policy</a>
          <a href="#" className="hover:text-white">Shipping Policy</a>
          <a href="#" className="hover:text-white">Contact Information</a>
        </div>
      </div>
    </footer>
  );
}
