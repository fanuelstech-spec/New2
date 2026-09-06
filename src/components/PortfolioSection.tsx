import React, { useState } from 'react';
import { Eye, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PORTFOLIO_ITEMS, createWhatsAppUrl } from '../data/furnitureData';
import { PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';

type CategoryFilter = 'All' | 'Sofas' | 'Beds' | 'Living Room' | 'Tables' | 'Cabinets' | 'Upholstery' | 'Custom Projects';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Sofas',
    'Beds',
    'Living Room',
    'Tables',
    'Cabinets',
    'Upholstery',
    'Custom Projects'
  ];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 bg-[#FBF9F5] dark:bg-[#12100E] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
            <span>Our Completed Work</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2]">
            Made Here. Designed For Real Life.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Explore a selection of custom furniture and craftsmanship created by N&B Modern Furnitures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#241C18] text-white dark:bg-[#D4AF37] dark:text-stone-950 shadow-md'
                    : 'bg-[#EFECE6] text-stone-700 hover:bg-stone-300 dark:bg-[#1F1915] dark:text-stone-300 dark:hover:bg-stone-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const directWhatsApp = createWhatsAppUrl(
              `Hello SOLUTION CENTER / N&B Modern Furnitures, I saw "${item.title}" in your portfolio and would like to ask about custom ordering something similar.`
            );

            return (
              <div
                key={item.id}
                className="group relative bg-[#F4F1EA] dark:bg-[#1A1613] rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Hover Overlay */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200 dark:bg-stone-900 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/90 dark:bg-stone-950/85 text-stone-900 dark:text-stone-100 backdrop-blur-xs shadow-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white text-stone-950 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>View Project</span>
                    </span>
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-[11px] uppercase font-semibold tracking-wider text-[#8C6D37] dark:text-[#D4AF37] mb-1">
                      {item.subtitle}
                    </p>

                    <h3
                      onClick={() => setSelectedItem(item)}
                      className="font-serif-heading text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#8C6D37] dark:group-hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 mt-4 border-t border-stone-200/60 dark:border-stone-800/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="text-xs font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-200 hover:text-[#8C6D37] dark:hover:text-[#D4AF37] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={directWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enquire on WhatsApp"
                      className="p-2 rounded-full bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Notification Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500 dark:text-stone-400 italic">
            * Client Demo Showcase: All pieces can be made to order with your choice of dimensions, timber varieties, and upholstery fabrics at our Bamenda workshop.
          </p>
        </div>

      </div>

      {/* Lightbox / Modal View */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
};
