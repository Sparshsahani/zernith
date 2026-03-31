'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrowRight, IconSparkles } from '@tabler/icons-react';

const slides = [
  {
    id: 1,
    title: 'Luxury Fragrances',
    subtitle: 'Experience the Essence of Elegance',
    description: 'Discover our premium collection of perfumes crafted for the discerning individual',
    cta: 'Shop Now',
    link: '/category/all',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Men\'s Collection',
    subtitle: 'Bold & Sophisticated',
    description: 'Powerful fragrances that define masculinity and confidence',
    cta: 'Explore',
    link: '/category/men',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Special Combos',
    subtitle: 'Save Big on Premium Sets',
    description: 'Curated perfume combos at unbeatable prices - Limited time offer!',
    cta: 'View Deals',
    link: '/category/combo',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=600&fit=crop',
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[var(--gray-100)] to-white">
      <div className="container py-12 md:py-20">
        {/* Slides */}
        <div className="relative min-h-[400px] md:min-h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                {/* Content */}
                <div className="space-y-6 animate-slideUp" data-aos="fade-right" data-aos-duration="800">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                    <IconSparkles size={16} className="text-[var(--primary)]" />
                    <span className="text-sm font-medium text-[var(--primary)]">
                      {slide.subtitle}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href={slide.link} className="btn-primary group">
                      {slide.cta}
                      <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/about" className="btn-secondary">
                      Learn More
                    </Link>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-6 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[var(--gray-200)] rounded-full flex items-center justify-center">
                        <span className="text-[var(--primary)] font-bold">✓</span>
                      </div>
                      <span className="text-sm font-medium">100% Authentic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[var(--gray-200)] rounded-full flex items-center justify-center">
                        <span className="text-[var(--primary)] font-bold">✓</span>
                      </div>
                      <span className="text-sm font-medium">Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[var(--gray-200)] rounded-full flex items-center justify-center">
                        <span className="text-[var(--primary)] font-bold">✓</span>
                      </div>
                      <span className="text-sm font-medium">Easy Returns</span>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-full blur-3xl"></div>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="relative w-full h-auto animate-float drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-[var(--primary)]'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)] opacity-5 rounded-full blur-3xl"></div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
