'use client';

import { useState, useMemo } from 'react';
import ProductFilter from '@/components/common/ProductFilter';
import ProductCard from '@/components/common/ProductCard';

// Sample product data - Replace with your actual data source
const allProducts = [
    {
        id: 1,
        name: 'Midnight Oud Intense',
        price: 2499,
        originalPrice: 3999,
        rating: 4.8,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: 'New',
        category: 'Eau de Parfum',
    },
    {
        id: 2,
        name: 'Royal Amber Collection',
        price: 1899,
        originalPrice: 2999,
        rating: 4.6,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800',
        badge: 'Bestseller',
        category: 'Perfume',
    },
    {
        id: 3,
        name: 'Fresh Citrus Breeze',
        price: 899,
        originalPrice: 1299,
        rating: 4.4,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800',
        badge: 'Sale',
        category: 'Eau de Toilette',
    },
    {
        id: 4,
        name: 'Velvet Rose Noir',
        price: 3299,
        originalPrice: 4999,
        rating: 4.9,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800',
        badge: 'Premium',
        category: 'Eau de Parfum',
    },
    {
        id: 5,
        name: 'Ocean Mist Pour Homme',
        price: 1499,
        originalPrice: null,
        rating: 4.5,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800',
        badge: null,
        category: 'Cologne',
    },
    {
        id: 6,
        name: 'Lavender Dreams',
        price: 1199,
        originalPrice: 1799,
        rating: 4.3,
        reviews: 145,
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800',
        badge: null,
        category: 'Eau de Toilette',
    },
    {
        id: 7,
        name: 'Black Diamond Luxury Set',
        price: 5999,
        originalPrice: 8999,
        rating: 4.9,
        reviews: 87,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
        badge: 'Limited',
        category: 'Gift Sets',
    },
    {
        id: 8,
        name: 'Sandalwood Essence',
        price: 2199,
        originalPrice: 2999,
        rating: 4.7,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800',
        badge: null,
        category: 'Perfume',
    },
    {
        id: 9,
        name: 'Cherry Blossom Spring',
        price: 1799,
        originalPrice: 2499,
        rating: 4.6,
        reviews: 167,
        image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800',
        badge: 'New',
        category: 'Eau de Parfum',
    },
    {
        id: 10,
        name: 'Spice Route Oriental',
        price: 2799,
        originalPrice: 3999,
        rating: 4.8,
        reviews: 221,
        image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800',
        badge: 'Bestseller',
        category: 'Perfume',
    },
    {
        id: 11,
        name: 'Cool Mint Fresh',
        price: 799,
        originalPrice: 1099,
        rating: 4.2,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800',
        badge: 'Sale',
        category: 'Cologne',
    },
    {
        id: 12,
        name: 'Vanilla Bourbon Night',
        price: 2999,
        originalPrice: null,
        rating: 4.7,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800',
        badge: null,
        category: 'Eau de Parfum',
    },
];

export default function ProductsPage() {
    const [filters, setFilters] = useState({
        category: 'all',
        priceRange: 'all',
        rating: 'all',
        sortBy: 'popular',
    });

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let products = [...allProducts];

        // Category Filter
        if (filters.category !== 'all') {
            products = products.filter(
                (p) => p.category.toLowerCase().replace(/\s+/g, '-') === filters.category
            );
        }

        // Price Range Filter
        if (filters.priceRange !== 'all') {
            const [min, max] = filters.priceRange.split('-').map((v) => (v === '' ? Infinity : parseInt(v.replace('+', ''))));
            products = products.filter((p) => {
                if (max === undefined) return p.price >= min;
                return p.price >= min && p.price <= max;
            });
        }

        // Rating Filter
        if (filters.rating !== 'all') {
            const minRating = parseFloat(filters.rating);
            products = products.filter((p) => p.rating >= minRating);
        }

        // Sort
        switch (filters.sortBy) {
            case 'price-low':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                products.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                // Assuming newer products have higher IDs
                products.sort((a, b) => b.id - a.id);
                break;
            case 'popular':
            default:
                products.sort((a, b) => b.reviews - a.reviews);
                break;
        }

        return products;
    }, [filters]);

    return (
        <main className="bg-black min-h-screen">
            {/* Page Header */}
            <div className="relative py-20 md:py-28 overflow-hidden min-h-[220px] md:min-h-[320px]">
                {/* Background Image */}
                <div className="absolute inset-0 ">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/image/product_bg.jpeg')" }}
                    />
                </div>
                {/* Golden Overlay */}
                <div className="absolute inset-0 bg-[#c19a6b] opacity-50"></div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        All Products
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base">
                        Discover our complete collection of premium fragrances
                    </p>
                </div>
            </div>

            {/* Filter Section */}
            <ProductFilter onFilterChange={setFilters} />

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-400 text-sm">
                        Showing <span className="text-white font-semibold">{filteredProducts.length}</span> products
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

            {/* Load More Button (Optional) */}
            {filteredProducts.length > 0 && filteredProducts.length >= 12 && (
                <div className="max-w-7xl mx-auto px-4 pb-12 text-center">
                    <button className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-all">
                        Load More Products
                    </button>
                </div>
            )}
        </main>
    );
}
