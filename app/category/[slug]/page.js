'use client';

import { useState, useMemo } from 'react';
import ProductFilter from '@/components/common/ProductFilter';
import ProductCard from '@/components/common/ProductCard';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';

// Category data
const categoryData = {
  'agarbatti': {
    name: 'Agarbatti',
    description: 'Traditional incense sticks for spiritual and aromatic experiences',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
  },
  'men': {
    name: 'Men Perfume',
    description: 'Bold and masculine fragrances for the modern man',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
  },
  'women': {
    name: 'Women Perfume',
    description: 'Elegant and feminine scents for sophisticated women',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800',
  },
  'loban': {
    name: 'Loban',
    description: 'Pure frankincense for traditional rituals and meditation',
    image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800',
  },
  'unisex': {
    name: 'Unisex Perfume',
    description: 'Versatile fragrances suitable for everyone',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800',
  },
  'car': {
    name: 'Car Perfume',
    description: 'Fresh and long-lasting car fragrances',
    image: 'https://images.unsplash.com/photo-1585652757173-57de5e9fab42?w=800',
  },
  'combo': {
    name: 'Product Combo',
    description: 'Special combo packs and gift sets',
    image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800',
  },
};

// Sample products by category - Replace with actual API call
const getProductsByCategory = (categorySlug) => {
  const allProducts = {
    'agarbatti': [
      {
        id: 101,
        name: 'Lavender Agarbatti Pack',
        price: 199,
        originalPrice: 299,
        rating: 4.5,
        reviews: 421,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: 'Hot Deal',
        category: 'Agarbatti',
      },
      {
        id: 102,
        name: 'Sandalwood Incense Sticks',
        price: 249,
        originalPrice: 349,
        rating: 4.7,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: 'Bestseller',
        category: 'Agarbatti',
      },
      {
        id: 103,
        name: 'Rose Agarbatti Premium',
        price: 179,
        originalPrice: 249,
        rating: 4.4,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: null,
        category: 'Agarbatti',
      },
      {
        id: 104,
        name: 'Jasmine Incense Collection',
        price: 299,
        originalPrice: 449,
        rating: 4.6,
        reviews: 267,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: 'New',
        category: 'Agarbatti',
      },
    ],
    'men': [
      {
        id: 201,
        name: 'Oud Royale Premium Perfume',
        price: 1299,
        originalPrice: 1999,
        rating: 4.8,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: 'Best Seller',
        category: 'Men Perfume',
      },
      {
        id: 202,
        name: 'Citrus Burst Premium',
        price: 1099,
        originalPrice: 1699,
        rating: 4.6,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800',
        badge: 'Trending',
        category: 'Men Perfume',
      },
      {
        id: 203,
        name: 'Ocean Breeze Luxury',
        price: 1499,
        originalPrice: 2199,
        rating: 4.7,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800',
        badge: 'Premium',
        category: 'Men Perfume',
      },
      {
        id: 204,
        name: 'Spice Route Oriental',
        price: 1799,
        originalPrice: 2499,
        rating: 4.9,
        reviews: 221,
        image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800',
        badge: 'Limited',
        category: 'Men Perfume',
      },
    ],
    'women': [
      {
        id: 301,
        name: 'Rose Garden Women Perfume',
        price: 899,
        originalPrice: 1499,
        rating: 4.6,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800',
        badge: 'New',
        category: 'Women Perfume',
      },
      {
        id: 302,
        name: 'Velvet Rose Noir',
        price: 3299,
        originalPrice: 4999,
        rating: 4.9,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800',
        badge: 'Premium',
        category: 'Women Perfume',
      },
      {
        id: 303,
        name: 'Cherry Blossom Spring',
        price: 1799,
        originalPrice: 2499,
        rating: 4.6,
        reviews: 167,
        image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800',
        badge: 'Bestseller',
        category: 'Women Perfume',
      },
      {
        id: 304,
        name: 'Vanilla Dreams Luxury',
        price: 2199,
        originalPrice: 2999,
        rating: 4.8,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800',
        badge: 'Hot',
        category: 'Women Perfume',
      },
    ],
    'loban': [
      {
        id: 401,
        name: 'Mystic Loban Premium',
        price: 449,
        originalPrice: 699,
        rating: 4.7,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800',
        badge: 'Bestseller',
        category: 'Loban',
      },
      {
        id: 402,
        name: 'Pure Frankincense Loban',
        price: 599,
        originalPrice: 899,
        rating: 4.8,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800',
        badge: 'Premium',
        category: 'Loban',
      },
      {
        id: 403,
        name: 'Traditional Loban Blend',
        price: 349,
        originalPrice: 499,
        rating: 4.5,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800',
        badge: null,
        category: 'Loban',
      },
    ],
    'unisex': [
      {
        id: 501,
        name: 'Sandalwood Essence',
        price: 799,
        originalPrice: 1199,
        rating: 4.7,
        reviews: 145,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: 'Popular',
        category: 'Unisex Perfume',
      },
      {
        id: 502,
        name: 'Mystic Amber Unisex',
        price: 1499,
        originalPrice: 2199,
        rating: 4.6,
        reviews: 178,
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800',
        badge: 'New',
        category: 'Unisex Perfume',
      },
      {
        id: 503,
        name: 'Citrus Woods Blend',
        price: 1199,
        originalPrice: 1799,
        rating: 4.5,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1585652757173-57de5e9fab42?w=800',
        badge: null,
        category: 'Unisex Perfume',
      },
    ],
    'car': [
      {
        id: 601,
        name: 'Ocean Breeze Car Perfume',
        price: 349,
        originalPrice: 599,
        rating: 4.4,
        reviews: 167,
        image: 'https://images.unsplash.com/photo-1585652757173-57de5e9fab42?w=800',
        badge: 'Hot Deal',
        category: 'Car Perfume',
      },
      {
        id: 602,
        name: 'Fresh Mint Car Fragrance',
        price: 299,
        originalPrice: 499,
        rating: 4.3,
        reviews: 143,
        image: 'https://images.unsplash.com/photo-1585652757173-57de5e9fab42?w=800',
        badge: 'Bestseller',
        category: 'Car Perfume',
      },
      {
        id: 603,
        name: 'Lavender Dream Car Scent',
        price: 399,
        originalPrice: 649,
        rating: 4.5,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1585652757173-57de5e9fab42?w=800',
        badge: 'New',
        category: 'Car Perfume',
      },
    ],
    'combo': [
      {
        id: 701,
        name: 'Unisex Combo Pack (3 pcs)',
        price: 2499,
        originalPrice: 3999,
        rating: 4.9,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800',
        badge: 'Combo',
        category: 'Product Combo',
      },
      {
        id: 702,
        name: 'Luxury Gift Set Premium',
        price: 4999,
        originalPrice: 7999,
        rating: 4.8,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800',
        badge: 'Gift',
        category: 'Product Combo',
      },
      {
        id: 703,
        name: 'Family Pack Special',
        price: 1999,
        originalPrice: 2999,
        rating: 4.7,
        reviews: 123,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: 'Value',
        category: 'Product Combo',
      },
    ],
  };

  return allProducts[categorySlug] || [];
};

export default function CategoryPage({ params }) {
  const categorySlug = params.slug;
  const category = categoryData[categorySlug];
  const products = getProductsByCategory(categorySlug);

  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    rating: 'all',
    sortBy: 'popular',
  });

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Price Range Filter
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map((v) => (v === '' ? Infinity : parseInt(v.replace('+', ''))));
      filtered = filtered.filter((p) => {
        if (max === undefined) return p.price >= min;
        return p.price >= min && p.price <= max;
      });
    }

    // Rating Filter
    if (filters.rating !== 'all') {
      const minRating = parseFloat(filters.rating);
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [filters, products]);

  if (!category) {
    return (
      <main className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <Link href="/products" className="text-[var(--primary)] hover:underline">
            View All Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#1a1a1a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <IconChevronRight size={16} className="text-gray-600" />
            <Link href="/products" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
              Products
            </Link>
            <IconChevronRight size={16} className="text-gray-600" />
            <span className="text-white">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header with Banner */}
      <div className="relative bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${category.image})` }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 text-center">
          <p className="text-[var(--primary)] text-sm font-bold uppercase tracking-wider mb-3">
            Category
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--primary)]">{products.length}</p>
              <p className="text-gray-400 text-sm">Products</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[var(--primary)]">
                {products.reduce((sum, p) => sum + p.reviews, 0)}
              </p>
              <p className="text-gray-400 text-sm">Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <ProductFilter onFilterChange={setFilters} />

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-white font-semibold">{filteredProducts.length}</span> of{' '}
            <span className="text-white font-semibold">{products.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg mb-4">No products found matching your filters</p>
            <button
              onClick={() =>
                setFilters({
                  category: 'all',
                  priceRange: 'all',
                  rating: 'all',
                  sortBy: 'popular',
                })
              }
              className="px-6 py-3 bg-[var(--primary)] text-black font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
