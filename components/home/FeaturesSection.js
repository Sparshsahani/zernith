'use client';

import { IconTruck, IconRefresh, IconHeadset, IconCertificate, IconGift } from '@tabler/icons-react';

const features = [
  {
    icon: IconTruck,
    title: 'Free Shipping',
    description: 'On orders above ₹999',
    color: 'text-[var(--gray-50)]',
    bgColor: 'bg-black/10',
  },
  // {
  //   icon: IconShield,
  //   title: '100% Authentic',
  //   description: 'Certified genuine products',
  //   color: 'text-[var(--gray-50)]',
  //   bgColor: 'bg-black/10',
  // },
  {
    icon: IconRefresh,
    title: 'Easy Returns',
    description: '7 days return policy',
    color: 'text-[var(--gray-50)]',
    bgColor: 'bg-black/10',
  },
  {
    icon: IconHeadset,
    title: '24/7 Support',
    description: 'Dedicated customer care',
    color: 'text-[var(--gray-50)]',
    bgColor: 'bg-black/10',
  },
  {
    icon: IconCertificate,
    title: 'Premium Quality',
    description: 'Handpicked fragrances',
    color: 'text-[var(--gray-50)]',
    bgColor: 'bg-black/10',
  },
  {
    icon: IconGift,
    title: 'Gift Wrapping',
    description: 'Free premium packaging',
    color: 'text-[var(--gray-50)]',
    bgColor: 'bg-black/10',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#e8dcc8] via-[#f0e6d8] to-[#f5ede0]">
      {/* Gradient Overlay for smooth blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#c19a6b]/5 via-transparent to-[#8b7355]/5"></div>

      {/* Elegant subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block mb-4">
            <p className="text-[#8b7355] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              Our Promise
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#8b7355] to-transparent mx-auto"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2c2416] mb-6 tracking-tight">
            Why Choose Zarnith?
          </h2>

          <p className="text-[#5a4a3a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Experience luxury shopping with unmatched quality and service
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={`f-${index}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-[#c19a6b]/30 hover:border-[#c19a6b]/60 h-full flex flex-col items-center text-center hover:-translate-y-2">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      {/* Outer ring - decorative - now visible by default */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#c19a6b]/25 scale-125 group-hover:scale-[1.35] transition-transform duration-500"></div>

                      {/* Icon background - enhanced default state */}
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#c19a6b]/15 to-[#8b7355]/15 flex items-center justify-center group-hover:from-[#c19a6b]/30 group-hover:to-[#8b7355]/30 transition-all duration-300">
                        <Icon size={28} className="text-[#8b7355] group-hover:text-[#c19a6b] transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#2c2416] mb-3 group-hover:text-[#8b7355] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#6b5d4f] leading-relaxed font-light">
                      {feature.description}
                    </p>

                    {/* Bottom accent line - visible by default */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#c19a6b] to-transparent group-hover:w-3/4 transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
