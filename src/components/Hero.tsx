import React from 'react';
import { MessageCircle, ArrowDown, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { createWhatsAppUrl } from '../data/furnitureData';

export const Hero: React.FC = () => {
  const whatsappQuoteUrl = createWhatsAppUrl(
    "Hello SOLUTION CENTER / N&B Modern Furnitures, I’d like to request a quote for a custom furniture project."
  );

  const handleExploreScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      const navOffset = 80;
      const elementPosition = portfolioSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F7F4EE] via-[#FBF9F5] to-[#FBF9F5] dark:from-[#181512] dark:via-[#12100E] dark:to-[#12100E] transition-colors duration-300"
    >
      {/* Subtle architectural background texture accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Copy Column */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Crafted in Bamenda • Built for Your Space</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2] leading-[1.12]">
              Furniture Designed Around Your Space.
            </h1>

            {/* Supporting line */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-xl leading-relaxed">
              Custom furniture, modern upholstery, and expert carpentry crafted to bring comfort, character, and timeless style into your home.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-primary-quote-btn"
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#241C18] hover:bg-[#3D2D26] text-white dark:bg-[#D4AF37] dark:hover:bg-[#C5A059] dark:text-stone-950 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 dark:text-stone-950" />
                <span>Request a Quote</span>
              </a>

              <a
                id="hero-secondary-explore-btn"
                href="#portfolio"
                onClick={handleExploreScroll}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold tracking-wide uppercase bg-stone-200/80 hover:bg-stone-300 text-stone-800 dark:bg-stone-800/80 dark:hover:bg-stone-700 dark:text-stone-200 transition-all border border-stone-300/60 dark:border-stone-700/60"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Trust statement beneath */}
            <div className="pt-4 flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>Custom Made • Quality Craftsmanship • Bamenda, Cameroon</span>
            </div>
          </div>

          {/* Right Hero Image Composition */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Showroom Image Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern luxury interior showroom crafted by SOLUTION CENTER / N&B Modern Furnitures"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle vignette gradient for warmth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: Custom Furniture */}
              <div
                id="hero-floating-card-1"
                className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-[#1E1915]/95 shadow-xl border border-stone-200/80 dark:border-stone-700/60 backdrop-blur-md max-w-[210px] sm:max-w-[240px] transform hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D37] dark:text-[#E2BD5A]">
                    Custom Furniture
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-snug">
                  Made to fit your style, space & lifestyle.
                </p>
              </div>

              {/* Floating Card 2: Local Craftsmanship */}
              <div
                id="hero-floating-card-2"
                className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-[#1E1915]/95 shadow-xl border border-stone-200/80 dark:border-stone-700/60 backdrop-blur-md max-w-[220px] sm:max-w-[260px] transform hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-900 dark:text-white">
                    Local Craftsmanship
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-snug">
                  Hospital Roundabout, Bamenda
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
