import React, { useState } from 'react';
import { Sparkles, Palette, Layers, Box, Info } from 'lucide-react';
import { MATERIAL_SWATCHES } from '../data/furnitureData';

export const MaterialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'wood' | 'fabric' | 'cushion' | 'hardware'>('all');

  const filteredSwatches = activeTab === 'all'
    ? MATERIAL_SWATCHES
    : MATERIAL_SWATCHES.filter(s => s.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Materials' },
    { id: 'wood', label: 'Wood Finishes' },
    { id: 'fabric', label: 'Upholstery Fabrics' },
    { id: 'cushion', label: 'Foam & Cushioning' },
    { id: 'hardware', label: 'Hardware & Fittings' },
  ];

  return (
    <section
      id="materials"
      className="py-20 lg:py-28 bg-[#FBF9F5] dark:bg-[#12100E] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
            <span>Finishes & Swatches</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2]">
            Details Make The Difference.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Explore our curated range of solid hardwoods, tactile upholstery fabrics, durable foam densities, and architectural hardware.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-3 mb-10 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#241C18] text-white dark:bg-[#D4AF37] dark:text-stone-950 shadow-sm'
                  : 'bg-[#EFECE6] text-stone-700 hover:bg-stone-300 dark:bg-[#1F1915] dark:text-stone-300 dark:hover:bg-stone-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Swatches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSwatches.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#F4F1EA] dark:bg-[#1A1613] border border-stone-200/80 dark:border-stone-800/80 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Swatch Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-full shadow-inner border border-black/10 dark:border-white/20 flex-shrink-0"
                      style={{ backgroundColor: item.colorCode || '#8C6D37' }}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D37] dark:text-[#E2BD5A]">
                      {item.category}
                    </span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#C5A059] transition-colors" />
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">
                  {item.name}
                </h3>

                <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 mb-2">
                  Tone: {item.tone}
                </p>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-200/60 dark:border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                <span>Showroom Sample</span>
                <span className="font-medium text-[#785724] dark:text-[#D4AF37]">Customizable</span>
              </div>
            </div>
          ))}
        </div>

        {/* Availability Notice */}
        <div className="mt-10 p-4 rounded-xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800 flex items-center justify-center gap-2 text-xs text-stone-500 dark:text-stone-400 text-center max-w-2xl mx-auto">
          <Info className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
          <span>
            Exact material availability, grain variations, and imported fabric catalogs depend on current showroom stock & bespoke specifications.
          </span>
        </div>

      </div>
    </section>
  );
};
