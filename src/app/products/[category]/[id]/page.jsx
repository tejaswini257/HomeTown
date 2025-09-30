"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Star, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { allProducts } from "../../../data/products";
import { useWishlist } from "../../../context/WishlistContext";

// Custom hook to handle hydration
const useHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  return isHydrated;
};

export default function ProductDetailPage({ params }) {
  const resolvedParams = React.use(params);
  const category = resolvedParams.category;
  const productId = Number(resolvedParams.id);
  const isHydrated = useHydration();
  const router = useRouter();
  const { toggleWishlist, isInWishlist, isHydrated: wishlistHydrated } = useWishlist();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Find the product
  const product = allProducts[category]?.find(p => p.id === productId);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
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

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="bg-[#A0937D] text-white px-6 py-2 rounded-md hover:bg-[#8a826b] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

 const images = [product.image1, product.image2].filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-[#A0937D]">Home</Link>
          <span>/</span>
          <Link href="/furniture" className="hover:text-[#A0937D] capitalize">
            Furniture
          </Link>
          <span>/</span>
          <Link href={`/furniture/${category}`} className="hover:text-[#A0937D] capitalize">
            {category.replace('-', ' ')}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-[#A0937D] mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 bg-[#A0937D] text-white text-sm font-bold px-3 py-1 rounded">
                {product.discount}% Off
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#A0937D]' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#A0937D]">
                {formatPrice(product.price)}
              </span>
              <span className="text-xl text-gray-500 line-through">
                {formatPrice(product.oldPrice)}
              </span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                Save {formatPrice(product.oldPrice - product.price)}
              </span>
            </div>

            {/* Product Attributes */}
            <div className="space-y-3">
              {product.material && (
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 w-20">Material:</span>
                  <span className="text-gray-600">{product.material}</span>
                </div>
              )}
              {product.color && (
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 w-20">Color:</span>
                  <span className="text-gray-600">{product.color}</span>
                </div>
              )}
              {product.style && (
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 w-20">Style:</span>
                  <span className="text-gray-600">{product.style}</span>
                </div>
              )}
              {(product.seats || product.size || product.pieces) && (
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900 w-20">
                    {product.seats ? 'Seats:' : product.size ? 'Size:' : 'Pieces:'}
                  </span>
                  <span className="text-gray-600">
                    {product.seats ? `${product.seats} Seater` : 
                     product.size ? product.size :
                     product.pieces ? `${product.pieces} Pieces` : ''}
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => toggleWishlist(product)}
                className={`flex-1 py-3 px-6 rounded-md border-2 transition-colors font-medium text-lg flex items-center justify-center gap-2 ${
                  isInWishlist(product.id, product.category)
                    ? 'border-red-500 text-red-500 bg-red-50' 
                    : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
                }`}
              >
                <Heart size={20} className={isInWishlist(product.id, product.category) ? 'fill-current' : ''} />
                {isInWishlist(product.id, product.category) ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
              <button
                onClick={handleShare}
                className="p-3 rounded-md border-2 border-gray-300 text-gray-600 hover:border-[#A0937D] hover:text-[#A0937D] transition-colors"
              >
                <Share2 size={24} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <Truck className="text-[#A0937D]" size={24} />
                <div>
                  <p className="font-medium text-gray-900">Free Delivery</p>
                  <p className="text-sm text-gray-600">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-[#A0937D]" size={24} />
                <div>
                  <p className="font-medium text-gray-900">Warranty</p>
                  <p className="text-sm text-gray-600">1 year manufacturer</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="text-[#A0937D]" size={24} />
                <div>
                  <p className="font-medium text-gray-900">Easy Returns</p>
                  <p className="text-sm text-gray-600">30 days return policy</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="font-medium">Free delivery</p>
          </div>
          <div className="text-center">
            <p className="font-medium">Free installation</p>
          </div>
        </div>
      </div>
    </div>
  );
}