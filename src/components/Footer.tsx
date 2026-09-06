import React from 'react';
import { ArrowUp, MapPin, MessageCircle, Instagram, Facebook, Share2 } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const exploreLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Custom Furniture', href: '#services' },
    { label: 'Carpentry', href: '#services' },
    { label: 'Upholstery', href: '#services' },
    { label: 'Cabinets & Storage', href: '#services' },
    { label: 'Commercial Furniture', href: '#services' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappFooterUrl = createWhatsAppUrl(
    "Hello SOLUTION CENTER / N&B Modern Furnitures, I am visiting your website footer and would like to contact your workshop."
  );

  return (
    <footer className="bg-[#181411] text-[#FAF7F2] pt-16 pb-12 border-t border-stone-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800/80">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {BUSINESS_INFO.brandName}
              </span>
              <span className="text-xs tracking-[0.2em] font-semibold text-[#D4AF37] uppercase">
                {BUSINESS_INFO.subName}
              </span>
            </div>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Custom furniture, carpentry, upholstery, and modern furniture solutions crafted in Bamenda.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-stone-400">
              {/* Social placeholders clearly documented for client connection */}
              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-full bg-stone-900 hover:bg-emerald-600 hover:text-white text-stone-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <span
                title="Connect real business Instagram account"
                className="p-2.5 rounded-full bg-stone-900 text-stone-400 hover:text-white cursor-pointer transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </span>
              <span
                title="Connect real business Facebook account"
                className="p-2.5 rounded-full bg-stone-900 text-stone-400 hover:text-white cursor-pointer transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
              Explore
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>
                  Hospital Roundabout<br />
                  Bamenda, Cameroon
                </span>
              </div>
              <div className="pt-2">
                <a
                  href={whatsappFooterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <p className="text-xs text-stone-500 pt-1">
                {BUSINESS_INFO.hoursNotice}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © 2026 SOLUTION CENTER / N&B Modern Furnitures. All rights reserved.
          </p>
          <p className="italic text-stone-400">
            Designed for modern spaces. Crafted with care.
          </p>
          
          {/* Back to Top */}
          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors focus:outline-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
