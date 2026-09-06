import React from 'react';
import { PROCESS_STEPS } from '../data/furnitureData';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-[#FBF9F5] dark:bg-[#12100E] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
            <span>Our Simple 4-Step Process</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2]">
            From Idea To Finished Piece.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            A clear, collaborative process designed to ensure your furniture fits your lifestyle and expectations.
          </p>
        </div>

        {/* 4-Step Process Flow with Desktop Connecting Line */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-16 right-16 h-0.5 bg-stone-300 dark:bg-stone-800 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((stepItem, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start text-center lg:text-left bg-[#F4F1EA] dark:bg-[#1A1613] p-7 rounded-2xl border border-stone-200/80 dark:border-stone-800/80 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Numbered Indicator Circle */}
                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#251E19] border-2 border-[#C5A059] text-[#785724] dark:text-[#D4AF37] font-serif-heading font-bold text-lg flex items-center justify-center shadow-md mb-6 group-hover:bg-[#C5A059] group-hover:text-stone-950 transition-colors">
                  {stepItem.step}
                </div>

                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {stepItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
