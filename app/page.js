import HeroBanner from "@/components/home/HeroBanner";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import ProductSection from "@/components/home/ProductSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ScrollingText from "@/components/home/ScrollingText";
import CenterBanner from "@/components/home/CenterBanner";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Features Section */}
      <FeaturesSection />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Scrolling Text Section */}
      <ScrollingText />

      {/* Center Banner (alternate) */}
      <CenterBanner
        title="Explore New Arrivals"
        subtitle="Limited Edition"
        description="Discover our freshly launched, limited‑edition fragrances — crafted to leave a lasting impression."
        ctaText="Shop New Arrivals"
        ctaLink="/collection/new"
        image="/image/text_bg_img.jpg"
        align="left"
      />

      {/* Best Sellers */}
      <ProductSection title="Best Sellers" viewAllLink="/products" />

      <CenterBanner />

      {/* Featured Products */}
      <ProductSection title="Featured Products" />

      
    </main>
  );
}
