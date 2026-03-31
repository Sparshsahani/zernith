'use client';

export default function ScrollingText() {
  const text = "Premium Fragrances • Authentic Products • Luxury Scents • Best Quality • ";
  
  return (
    <section data-aos="fade" className="relative bg-[var(--primary)] overflow-hidden min-h-[280px] md:min-h-[380px] lg:min-h-[480px]">
      {/* subtle light overlay to slightly darken the background color */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <div className="relative z-10 flex items-center min-h-[280px] md:min-h-[380px] lg:min-h-[480px]">
        {/* Scrolling Text Track */}
        <div className="marquee-text w-full">
          <div className="marquee-text__track">
            {/* Original text */}
            <span className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight text-black whitespace-nowrap px-4">
              {text}
            </span>
            {/* Duplicate text for seamless loop */}
            <span className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight text-black whitespace-nowrap px-4">
              {text}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
