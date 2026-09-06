import React from 'react';
import { Maximize2, Sparkle, CheckCircle, Users } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/furnitureData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-[#C5A059]" />;
      case 'Sparkle':
        return <Sparkle className="w-5 h-5 text-[#C5A059]" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-[#C5A059]" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-[#F4F1EA] dark:bg-[#16120F] transition-colors duration-300 relative border-t border-stone-200/60 dark:border-stone-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
            <span>The N&B Difference</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2]">
            Why Choose N&B Modern Furnitures?
          </h2>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Built on a commitment to quality joinery, durable fabrics, and dependable local service in Bamenda.
          </p>
        </div>

        {/* Content & Workshop Image Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: 4 Strong Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FBF9F5] dark:bg-[#1E1915] border border-stone-200/80 dark:border-stone-800 shadow-xs hover:shadow-md transition-all flex items-start space-x-4"
              >
                <div className="p-3 rounded-xl bg-[#F2EFE9] dark:bg-[#2A231C] border border-stone-200/70 dark:border-stone-700/60 flex-shrink-0">
                  {getIcon(item.iconName)}
                </div>
                <div>
                  <h3 className="font-serif-heading text-lg font-bold text-stone-900 dark:text-stone-100 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Large Workshop / Artisan Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 dark:border-stone-800 shadow-2xl aspect-[4/3] sm:aspect-[1/1] max-w-lg mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Artisan carpenter crafting custom timber furniture at N&B Modern Furnitures Bamenda"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Inset Workshop Credibility Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-[#1A1512]/95 backdrop-blur-md border border-white/20 dark:border-stone-700/60 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#8C6D37] dark:text-[#E2BD5A]">
                    Hospital Roundabout, Bamenda
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  Direct artisan oversight from timber cutting to final upholstery stitch.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
