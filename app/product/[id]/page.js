'use client';

import { useState } from 'react';
import { IconShoppingCart, IconHeart, IconStar, IconStarFilled, IconMinus, IconPlus, IconTruck, IconShieldCheck, IconRefresh } from '@tabler/icons-react';
import Link from 'next/link';
import ProductCard from '@/components/common/ProductCard';

// Sample product data - Replace with actual API call based on ID
const getProductById = (id) => {
  return {
    id: id,
    name: 'Midnight Oud Intense Premium Perfume',
    price: 2499,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 234,
    inStock: true,
    category: 'Eau de Parfum',
    brand: 'ZP Fragrances',
    description: 'Experience the luxurious blend of exotic oud and warm spices in this premium fragrance. Perfect for evening wear and special occasions.',
    fullDescription: `Midnight Oud Intense is a captivating fragrance that combines the richness of traditional oud with modern sophistication. This premium perfume opens with refreshing notes of bergamot and lavender, transitioning into a heart of rich oud, amber, and rose. The base notes of sandalwood, musk, and vanilla create a long-lasting, memorable trail.

Crafted for the discerning individual, this fragrance embodies elegance and confidence. Its complex composition evolves throughout the day, revealing different facets of its personality.

Perfect for evening events, special occasions, or when you want to make a lasting impression.`,
    features: [
      'Long-lasting fragrance (8-10 hours)',
      'Premium quality ingredients',
      'Suitable for all seasons',
      'Unisex appeal',
      '100ml Eau de Parfum',
      'Elegant packaging',
    ],
    notes: {
      top: ['Bergamot', 'Lavender', 'Cardamom'],
      middle: ['Oud', 'Amber', 'Rose', 'Jasmine'],
      base: ['Sandalwood', 'Musk', 'Vanilla', 'Patchouli'],
    },
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800',
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800',
    ],
  };
};

// Related products
const relatedProducts = [
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
];

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#1a1a1a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/products" className="text-gray-400 hover:text-[var(--primary)] transition-colors">
              Products
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Images Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-[#1a1a1a] rounded-lg overflow-hidden aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <span className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-[#1a1a1a] rounded-lg overflow-hidden aspect-square border-2 transition-all ${
                    selectedImage === index
                      ? 'border-[var(--primary)]'
                      : 'border-transparent hover:border-white/20'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            {/* Category & Brand */}
            <div className="flex items-center gap-3 text-sm">
              <span className="text-[var(--primary)] font-semibold uppercase tracking-wide">
                {product.category}
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">{product.brand}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(product.rating) ? (
                    <IconStarFilled key={i} size={18} className="text-[var(--primary)]" />
                  ) : (
                    <IconStar key={i} size={18} className="text-gray-600" />
                  )
                ))}
              </div>
              <span className="text-white font-semibold">{product.rating}</span>
              <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-[var(--primary)]">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-green-500 font-semibold">Save ₹{product.originalPrice - product.price}</span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <span className="text-green-500 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  In Stock
                </span>
              ) : (
                <span className="text-red-500 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Out of Stock
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{product.description}</p>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-white font-semibold">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-3 bg-[#1a1a1a] text-white hover:bg-[var(--primary)] hover:text-black transition-colors"
                  >
                    <IconMinus size={18} />
                  </button>
                  <span className="px-6 py-3 bg-black text-white font-semibold">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-3 bg-[#1a1a1a] text-white hover:bg-[var(--primary)] hover:text-black transition-colors"
                  >
                    <IconPlus size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[var(--primary)] text-black font-bold rounded-lg hover:bg-[var(--primary)]/90 transition-all">
                <IconShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-4 py-4 border rounded-lg transition-all ${
                  isWishlisted
                    ? 'bg-[var(--primary)] border-[var(--primary)] text-black'
                    : 'border-white/20 text-white hover:border-[var(--primary)]'
                }`}
              >
                <IconHeart size={20} className={isWishlisted ? 'fill-black' : ''} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-[#1a1a1a] rounded-lg">
                <IconTruck size={24} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold text-sm">Free Delivery</p>
                  <p className="text-gray-400 text-xs">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#1a1a1a] rounded-lg">
                <IconShieldCheck size={24} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold text-sm">Authentic</p>
                  <p className="text-gray-400 text-xs">100% genuine products</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#1a1a1a] rounded-lg">
                <IconRefresh size={24} className="text-[var(--primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold text-sm">Easy Returns</p>
                  <p className="text-gray-400 text-xs">7-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 md:mt-16">
          {/* Tab Headers */}
          <div className="flex gap-6 border-b border-white/10">
            <button
              onClick={() => setActiveTab('description')}
              className={`pb-4 font-semibold transition-colors relative ${
                activeTab === 'description' ? 'text-[var(--primary)]' : 'text-gray-400 hover:text-white'
              }`}
            >
              Description
              {activeTab === 'description' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`pb-4 font-semibold transition-colors relative ${
                activeTab === 'notes' ? 'text-[var(--primary)]' : 'text-gray-400 hover:text-white'
              }`}
            >
              Fragrance Notes
              {activeTab === 'notes' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 font-semibold transition-colors relative ${
                activeTab === 'reviews' ? 'text-[var(--primary)]' : 'text-gray-400 hover:text-white'
              }`}
            >
              Reviews ({product.reviews})
              {activeTab === 'reviews' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]"></span>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {product.fullDescription}
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-[var(--primary)] font-bold mb-4">Top Notes</h3>
                  <ul className="space-y-2">
                    {product.notes.top.map((note, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-[var(--primary)] font-bold mb-4">Middle Notes</h3>
                  <ul className="space-y-2">
                    {product.notes.middle.map((note, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-[var(--primary)] font-bold mb-4">Base Notes</h3>
                  <ul className="space-y-2">
                    {product.notes.base.map((note, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <p className="text-gray-400">Customer reviews feature coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
