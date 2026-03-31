'use client';

import { useState } from 'react';
import { IconFilter, IconX, IconChevronDown } from '@tabler/icons-react';

export default function ProductFilter({ onFilterChange }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'perfume', label: 'Perfumes' },
    { value: 'cologne', label: 'Colognes' },
    { value: 'eau-de-toilette', label: 'Eau de Toilette' },
    { value: 'eau-de-parfum', label: 'Eau de Parfum' },
    { value: 'gift-sets', label: 'Gift Sets' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: 'Under ₹500' },
    { value: '500-1000', label: '₹500 - ₹1,000' },
    { value: '1000-2000', label: '₹1,000 - ₹2,000' },
    { value: '2000-5000', label: '₹2,000 - ₹5,000' },
    { value: '5000+', label: 'Above ₹5,000' },
  ];

  const ratings = [
    { value: 'all', label: 'All Ratings' },
    { value: '4', label: '4★ & Above' },
    { value: '3', label: '3★ & Above' },
    { value: '2', label: '2★ & Above' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const handleFilterChange = (type, value) => {
    const filters = {
      category: type === 'category' ? value : selectedCategory,
      priceRange: type === 'price' ? value : selectedPriceRange,
      rating: type === 'rating' ? value : selectedRating,
      sortBy: type === 'sort' ? value : sortBy,
    };

    if (type === 'category') setSelectedCategory(value);
    if (type === 'price') setSelectedPriceRange(value);
    if (type === 'rating') setSelectedRating(value);
    if (type === 'sort') setSortBy(value);

    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedRating('all');
    setSortBy('popular');
    if (onFilterChange) {
      onFilterChange({
        category: 'all',
        priceRange: 'all',
        rating: 'all',
        sortBy: 'popular',
      });
    }
  };

  const activeFiltersCount = [selectedCategory, selectedPriceRange, selectedRating].filter(
    (f) => f !== 'all'
  ).length;

  return (
    <div className="bg-[#1a1a1a] sticky top-0 z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between lg:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-black font-semibold rounded-lg"
          >
            <IconFilter size={18} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort Dropdown (Mobile) */}
          <select
            value={sortBy}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
            className="px-4 py-2 bg-[#111] text-white border border-white/20 rounded-lg focus:outline-none focus:border-[var(--primary)]"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Filters */}
        <div className="hidden lg:flex items-center gap-4 flex-wrap">
          {/* Category Filter */}
          <FilterDropdown
            label="Category"
            value={selectedCategory}
            options={categories}
            onChange={(value) => handleFilterChange('category', value)}
          />

          {/* Price Range Filter */}
          <FilterDropdown
            label="Price Range"
            value={selectedPriceRange}
            options={priceRanges}
            onChange={(value) => handleFilterChange('price', value)}
          />

          {/* Rating Filter */}
          <FilterDropdown
            label="Rating"
            value={selectedRating}
            options={ratings}
            onChange={(value) => handleFilterChange('rating', value)}
          />

          {/* Sort By */}
          <div className="ml-auto flex items-center gap-2">
            <span className="text-gray-400 text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="px-4 py-2 bg-[#111] text-white border border-white/20 rounded-lg focus:outline-none focus:border-[var(--primary)] cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-2 text-sm text-gray-400 hover:text-[var(--primary)] transition-colors"
            >
              <IconX size={16} />
              Clear All
            </button>
          )}
        </div>

        {/* Mobile Filter Panel */}
        {isFilterOpen && (
          <div className="lg:hidden mt-4 space-y-4 pt-4 border-t border-white/10">
            {/* Category */}
            <div>
              <label className="text-white text-sm font-semibold mb-2 block">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full px-4 py-2 bg-[#111] text-white border border-white/20 rounded-lg focus:outline-none focus:border-[var(--primary)]"
              >
                {categories.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-white text-sm font-semibold mb-2 block">Price Range</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => handleFilterChange('price', e.target.value)}
                className="w-full px-4 py-2 bg-[#111] text-white border border-white/20 rounded-lg focus:outline-none focus:border-[var(--primary)]"
              >
                {priceRanges.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="text-white text-sm font-semibold mb-2 block">Rating</label>
              <select
                value={selectedRating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="w-full px-4 py-2 bg-[#111] text-white border border-white/20 rounded-lg focus:outline-none focus:border-[var(--primary)]"
              >
                {ratings.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Button */}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="w-full py-2 border border-white/20 text-white font-semibold rounded-lg hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Desktop Filter Dropdown Component
function FilterDropdown({ label, value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
          value !== 'all'
            ? 'bg-[var(--primary)] text-black border-[var(--primary)] font-semibold'
            : 'bg-[#111] text-white border-white/20 hover:border-white/40'
        }`}
      >
        {selectedOption?.label || label}
        <IconChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-56 bg-[#111] border border-white/20 rounded-lg shadow-lg overflow-hidden z-20">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                  value === option.value
                    ? 'bg-[var(--primary)] text-black font-semibold'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
