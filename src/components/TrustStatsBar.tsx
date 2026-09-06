import React from 'react';
import { Ruler, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { TRUST_STATS } from '../data/furnitureData';

export const TrustStatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ruler':
        return <Ruler className="w-5 h-5 text-[#C5A059]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#C5A059]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section
      id="trust-bar"
      className="py-10 bg-[#F2EFE9] dark:bg-[#1A1613] border-y border-stone-200/80 dark:border-stone-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_STATS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-3 rounded-xl transition-colors hover:bg-stone-50/60 dark:hover:bg-stone-800/40"
            >
              <div className="flex-shrink-0 p-3 rounded-xl bg-white dark:bg-[#251E19] border border-stone-200/70 dark:border-stone-700/60 shadow-xs">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
