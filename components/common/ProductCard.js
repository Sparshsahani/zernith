'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconShoppingCart, IconHeart, IconStar, IconEye } from '@tabler/icons-react';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const {
    id,
    name,
    price,
    originalPrice,
    rating = 4.5,
    reviews = 0,
    image,
    badge,
    category,
  } = product;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-[#1a1a1a] rounded-lg shadow-sm transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(193,154,107,0.2)]">

      {/* Badge container */}
      <div className="absolute top-0 left-0 w-full p-2 md:p-3 flex justify-between items-start z-20 pointer-events-none">
        {badge ? (
          <span className="bg-[var(--primary)] text-black text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 uppercase tracking-widest pointer-events-auto">
            {badge}
          </span>
        ) : <div></div>}

        {/* Discount & Wishlist Stack */}
        <div className="flex flex-col gap-2 pointer-events-auto">
          {discount > 0 && (
            <span className="bg-red-600/90 backdrop-blur-sm text-white text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 text-center">
              -{discount}%
            </span>
          )}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-[var(--primary)] backdrop-blur-sm transition-colors text-white hover:text-black"
          >
            <IconHeart
              size={14}
              className={`md:w-[16px] md:h-[16px] ${isWishlisted ? 'fill-black' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <Link href={`/product/${id}`} className="relative block h-[220px] md:h-[320px] overflow-hidden bg-[#111]">
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800'})`,
          }}
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        
        {/* Quick View (Bottom Slide Up) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 hidden md:block">
          <button className="w-full py-3 bg-white/95 backdrop-blur-md text-black text-sm font-bold uppercase tracking-wider hover:bg-[var(--primary)] transition-colors">
            Quick View
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-3 md:p-5 flex flex-col gap-2 md:gap-3 relative bg-[#1a1a1a]">
        <div>
          {category && (
            <p className="text-[9px] md:text-[10px] text-[var(--primary)] font-bold uppercase tracking-widest mb-1">
              {category}
            </p>
          )}
          <Link href={`/product/${id}`}>
            <h3 className="text-white text-base md:text-lg font-medium leading-snug hover:text-[var(--primary)] transition-colors line-clamp-1">
              {name}
            </h3>
          </Link>
        </div>

        {/* Price & Rating Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg md:text-xl font-semibold text-[#c19a6b]">
              ₹{price}
            </span>
            {originalPrice && (
              <span className="text-[10px] md:text-xs text-gray-500 line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <IconStar size={14} className="fill-[var(--primary)] text-[var(--primary)]" />
            <span className="text-[10px] md:text-xs text-gray-400 font-medium">{rating}</span>
          </div>
        </div>

        {/* Hover Add to Cart Button (replaces price on mobile or stays fixed? Let's use a dedicated bottom button) */}
        <button className="w-full mt-2 py-2 md:py-3 border border-white/20 text-white text-xs md:text-sm font-semibold uppercase tracking-wider hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
}