"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconArrowRight, IconStar } from "@tabler/icons-react";

const slides = [
  {
    id: 1,
    title: "Luxury Redefined",
    subtitle: "Premium Fragrances Collection",
    description:
      "Experience the epitome of elegance with our handcrafted perfumes",

    link: "/category/all",
    image: "/image/hero_img_1.jpeg",
    tag: "New Arrival",
  },
  {
    id: 2,
    title: "Bold & Sophisticated",
    subtitle: "Men's Exclusive Collection",
    description: "Commanding fragrances that define modern masculinity",
    link: "/category/men",
    image: "/image/hero_img_2.jpg",
    tag: "Best Seller",
  },
  {
    id: 3,
    title: "Unisex Perfumes",
    subtitle: "Exclusive Combo Sets",
    description:
      "Curated collections at extraordinary prices - While stocks last",
    link: "/category/combo",
    image: "/image/hero_img_3.jpeg",
    tag: "Save 40%",
  },
];

export default function HeroBanner() {
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
    <div
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
      style={{
        marginTop: "calc(var(--header-height) * -1)",
        paddingTop: "var(--header-height)",
      }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center py-20 md:py-24">
            <div className="container px-4 md:px-8">
              <div className="max-w-3xl space-y-4 md:space-y-6">
                {/* Tag */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full shadow-2xl"
                >
                  <IconStar size={16} className="fill-black text-black" />
                  <span className="text-[8px] md:text-[10px] font-semibold text-black uppercase tracking-wider">
                    {slide.tag}
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-[var(--primary)] text-[16px] md:text-[18px] lg:text-[25px] font-semibold tracking-wide uppercase"
                >
                  {slide.subtitle}
                </p>

                {/* Title */}
                <h1
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-[32px] md:text-[44px] lg:text-[56px] xl:text-[68px]  text-white font-extrabold  leading-tight"
                >
                  <span className="block">{slide.title.split(" ")[0]}</span>
                  {slide.title.split(" ").length > 1 && (
                    <span className="block">
                      {slide.title.split(" ").slice(1).join(" ")}
                    </span>
                  )}
                </h1>

                {/* Description */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-300 max-w-2xl leading-relaxed font-light"
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-12 md:w-16 h-2 bg-[var(--primary)] shadow-lg shadow-[var(--primary)]/50"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 hidden lg:flex flex-col items-center gap-3 animate-bounce">
        <span className="text-white/60 text-[8px] font-semibold rotate-90 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.9s ease-out;
        }
      `}</style>
    </div>
  );
}
