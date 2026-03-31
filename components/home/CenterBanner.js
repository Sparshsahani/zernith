"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";

export default function CenterBanner({
  title = "Discover Our Signature Scents",
  subtitle = "Signature Collection",
  description = "Handcrafted blends made from premium ingredients — crafted to leave a lasting impression.",
  ctaText = "Explore Collection",
  ctaLink = "/collection/signature",
  image = "/image/center_bg_img_copy.png",
  align = "right",
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center overflow-hidden min-h-[420px] md:min-h-[520px] lg:min-h-[620px] flex items-center w-full"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Full width container - no max-width restrictions */}
      <div
        className={`relative z-10 w-full flex ${align === "left" ? "justify-start" : "justify-end"}`}
      >
        <div
          data-aos={align === "left" ? "fade-right" : "fade-left"}
          data-aos-duration="1000"
          className={`max-w-3xl ${align === "left" ? "ml-8 md:ml-16 lg:ml-24" : "mr-8 md:mr-16 lg:mr-24"} p-8 md:p-12`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[var(--primary)]"></span>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--primary)] font-bold">
              {subtitle}
            </p>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            {title}
          </h3>

          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed font-light opacity-90">
            {description}
          </p>

          <div className="flex justify-start">
            <a
              href={ctaLink}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c19a6b] to-[#8b7355] text-white rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-[#c19a6b]"
            >
              <span>{ctaText}</span>
              <IconArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
