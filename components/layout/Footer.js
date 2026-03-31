"use client";

import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-30 bg-black text-white">
        {/* Main Footer */}
        <div className="container py-12 md:py-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div data-aos="fade-up" data-aos-delay="0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-xl">
                  Z
                </div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">
                  Zarnith
                </h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Premium fragrances that define elegance and luxury. Experience
                the essence of sophistication.
              </p>
              <div className="flex gap-3">
                <a href="#" className="social-icon">
                  <IconBrandFacebook size={20} />
                </a>
                <a href="#" className="social-icon">
                  <IconBrandInstagram size={20} />
                </a>
                <a href="#" className="social-icon">
                  <IconBrandTwitter size={20} />
                </a>
                <a href="#" className="social-icon">
                  <IconBrandWhatsapp size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <div className="h-[2px] w-12 bg-[#c19a6b] mb-4"></div>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="footer-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-lg font-semibold mb-2">Categories</h4>
              <div className="h-[2px] w-12 bg-[#c19a6b] mb-4"></div>
              <ul className="space-y-2">
                <li>
                  <Link href="/category/men" className="footer-link">
                    Men Perfume
                  </Link>
                </li>
                <li>
                  <Link href="/category/women" className="footer-link">
                    Women Perfume
                  </Link>
                </li>
                <li>
                  <Link href="/category/unisex" className="footer-link">
                    Unisex
                  </Link>
                </li>
                <li>
                  <Link href="/category/agarbatti" className="footer-link">
                    Agarbatti
                  </Link>
                </li>
                <li>
                  <Link href="/category/combo" className="footer-link">
                    Combo Packs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="text-lg font-semibold mb-2">Get In Touch</h4>
              <div className="h-[2px] w-12 bg-[#c19a6b] mb-4"></div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <IconMapPin
                    size={20}
                    className="text-[var(--secondary)] mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-400 text-sm">
                    123 Fragrance Street, Mumbai, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <IconPhone
                    size={20}
                    className="text-[var(--secondary)] flex-shrink-0"
                  />
                  <a
                    href="tel:+911234567890"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    +91 1234567890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <IconMail
                    size={20}
                    className="text-[var(--secondary)] flex-shrink-0"
                  />
                  <a
                    href="mailto:info@zarnith.com"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    info@zarnith.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <style jsx>{`
          .social-icon {
            width: 40px;
            height: 40px;
            border-radius: var(--radius-md);
            background-color: #c19a6b;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all var(--transition-base);
            color: white;
          }

          .social-icon:hover {
            background-color: #8b7355;
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(193, 154, 107, 0.4);
          }

          .footer-link {
            color: var(--gray-400);
            transition: color var(--transition-base);
            font-size: 0.9rem;
          }

          .footer-link:hover {
            color: var(--white);
            padding-left: 4px;
          }
        `}</style>
      </footer>

      {/* Bottom Bar with Gold Background - Full Width */}
      <div className="py-2 w-full bg-gradient-to-r from-[#c19a6b] via-[#d4b085] to-[#c19a6b] border-t-2 border-[#8b7355]">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#2c2416] text-sm text-center md:text-left font-medium">
              © {currentYear} Zarnith. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-[#2c2416] hover:text-[#0f0f0f] transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#2c2416] hover:text-[#0f0f0f] transition-colors font-medium"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/refund"
                className="text-[#2c2416] hover:text-[#0f0f0f] transition-colors font-medium"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
