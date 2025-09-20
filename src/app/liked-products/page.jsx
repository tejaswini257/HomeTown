"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowLeft, Trash2 } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

// Custom hook to handle hydration
const useHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  return isHydrated;
};

export default function LikedProductsPage() {
  const isHydrated = useHydration();
  const { wishlist, removeFromWishlist, clearWishlist, isHydrated: wishlistHydrated } = useWishlist();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Show loading state during hydration
  if (!isHydrated || !wishlistHydrated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A0937D] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-[#A0937D] transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Liked Products</h1>
          <p className="text-gray-600">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
          </p>
        </div>

        {wishlist.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16">
            <div className="mb-6">
              <Heart size={64} className="mx-auto text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">
              Start adding products you love to your wishlist by clicking the heart icon.
            </p>
            <Link
              href="/"
              className="bg-[#A0937D] text-white px-6 py-3 rounded-md hover:bg-[#8a826b] transition-colors font-medium"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Clear All Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={clearWishlist}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                <Trash2 size={16} />
                Clear All
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <div
                  key={`${product.category}-${product.id}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden product-card"
                >
                  {/* Product Image */}
                  <Link href={`/products/${product.category}/${product.id}`}>
                    <div className="relative group cursor-pointer h-64">
                      <Image
                        src={product.image1}
                        alt={product.name}
                        fill
                        className="object-cover transition-opacity group-hover:opacity-0"
                      />
                      <Image
                        src={product.image2}
                        alt={product.name}
                        fill
                        className="object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      
                      {/* Discount Badge */}
                      <div className="absolute top-4 left-4 bg-[#A0937D] text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% Off
                      </div>

                      {/* Remove from Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          removeFromWishlist(product.id, product.category);
                        }}
                        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors"
                      >
                        <Heart size={16} className="fill-current" />
                      </button>
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="p-4">
                    <Link href={`/products/${product.category}/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 hover:text-[#A0937D] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-[#A0937D]">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-600">
                      {product.material && (
                        <span className="bg-gray-100 px-2 py-1 rounded">{product.material}</span>
                      )}
                      {product.color && (
                        <span className="bg-gray-100 px-2 py-1 rounded">{product.color}</span>
                      )}
                      {(product.seats || product.size || product.pieces) && (
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {product.seats ? `${product.seats} Seater` : 
                           product.size ? product.size :
                           product.pieces ? `${product.pieces} Pieces` : ''}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <Link
                      href={`/products/${product.category}/${product.id}`}
                      className="block w-full bg-[#A0937D] text-white py-2 px-4 rounded-md hover:bg-[#8a826b] transition-colors font-medium text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
