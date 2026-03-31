"use client";

import ProductCard from "../common/ProductCard";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

// Sample products data - Replace with real data from API
const sampleProducts = [
  {
    id: 1,
    name: "Oud Royale Premium Perfume",
    price: 1299,
    originalPrice: 1999,
    rating: 4.8,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80&fit=crop",
    badge: "Best Seller",
    category: "Men Perfume",
  },
  {
    id: 2,
    name: "Rose Garden Women Perfume",
    price: 899,
    originalPrice: 1499,
    rating: 4.6,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80&fit=crop",
    badge: "New",
    category: "Women Perfume",
  },
  {
    id: 3,
    name: "Mystic Loban Premium",
    price: 449,
    originalPrice: 699,
    rating: 4.7,
    reviews: 234,
    image:
      "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800&q=80&fit=crop",
    category: "Loban",
  },
  {
    id: 4,
    name: "Lavender Agarbatti Pack",
    price: 199,
    originalPrice: 299,
    rating: 4.5,
    reviews: 421,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80&fit=crop",
    badge: "Hot Deal",
    category: "Agarbatti",
  },
  {
    id: 5,
    name: "Ocean Breeze Car Perfume",
    price: 349,
    originalPrice: 599,
    rating: 4.4,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1585652757173-57de5e9fab42?w=800&q=80&fit=crop",
    category: "Car Perfume",
  },
  {
    id: 6,
    name: "Unisex Combo Pack (3 pcs)",
    price: 2499,
    originalPrice: 3999,
    rating: 4.9,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80&fit=crop",
    badge: "Combo",
    category: "Product Combo",
  },
  {
    id: 7,
    name: "Sandalwood Essence",
    price: 799,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80&fit=crop",
    category: "Unisex Perfume",
  },
  {
    id: 8,
    name: "Citrus Burst Premium",
    price: 1099,
    originalPrice: 1699,
    rating: 4.6,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80&fit=crop",
    badge: "Trending",
    category: "Men Perfume",
  },
];

export default function ProductSection({
  title = "Featured Products",
  products = sampleProducts,
  viewAllLink = "/products",
}) {
  return (
    <section className="py-20 md:py-28 bg-[#181717]">
      <div className="container">
        {/* Section Header */}
        <div
          className="flex items-center justify-between mb-12"
          data-aos="fade-up"
        >
          <div>
            <p className="text-[var(--primary)] text-sm font-bold uppercase tracking-wider mb-3">
              Premium Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {title}
            </h2>
            <div className="h-1 w-24 bg-[var(--primary)] rounded-full"></div>
          </div>

          <Link
            href={viewAllLink}
            className="hidden md:flex items-center gap-3 px-5 py-2 border-2 border-[var(--primary)] text-[var(--primary)] rounded-full font-bold hover:bg-[var(--primary)] hover:text-black hover:scale-105 transition-all duration-300 group"
          >
            View All
            <IconArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg font-semibold hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
          >
            View All Products
            <IconArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
