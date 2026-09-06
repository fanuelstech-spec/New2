import React from 'react';
import { Armchair, Hammer, Scissors, Home, Layers, Building2, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SERVICES, createWhatsAppUrl } from '../data/furnitureData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-[#C5A059]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#C5A059]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#C5A059]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#C5A059]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#C5A059]" />;
      case 'Building2':
      default:
        return <Building2 className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#F4F1EA] dark:bg-[#16120F] transition-colors duration-300 relative border-t border-stone-200/60 dark:border-stone-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
            <span>Specialized Capabilities</span>
          </div>
          
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2]">
            Everything You Need To Build A Better Space.
          </h2>
          
          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            From the first idea to the final finishing touch, we create furniture solutions designed around your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const quoteLink = createWhatsAppUrl(
              `Hello SOLUTION CENTER / N&B Modern Furnitures, I am interested in your ${service.title} service. Could we discuss my project?`
            );

            return (
              <div
                key={service.id}
                className="group relative bg-[#FBF9F5] dark:bg-[#1E1915] p-8 rounded-2xl border border-stone-200/80 dark:border-stone-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Accent line that reveals on hover at the top edge */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-[#F2EFE9] dark:bg-[#2A231C] border border-stone-200/60 dark:border-stone-700/50 group-hover:bg-[#C5A059]/15 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-heading text-xl font-bold text-stone-900 dark:text-stone-100 mb-3 group-hover:text-[#8C6D37] dark:group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/60 dark:border-stone-800/80 flex items-center justify-between">
                  <a
                    href={quoteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#785724] dark:text-[#D4AF37] hover:underline"
                  >
                    <span>Enquire on WhatsApp</span>
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                  </a>

                  <a
                    href="#contact"
                    className="p-2 rounded-full text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                    aria-label={`Get quote for ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
