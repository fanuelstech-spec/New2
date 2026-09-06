import React from 'react';
import { ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      const navOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#FBF9F5] dark:bg-[#12100E] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Furniture Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 dark:border-stone-800 aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80"
                alt="Bespoke carpentry and modern furniture crafting at SOLUTION CENTER / N&B Modern Furnitures workshop"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Inset badge highlighting Bamenda Workshop */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 dark:bg-[#1A1512]/90 backdrop-blur-md border border-white/20 dark:border-stone-700/60 shadow-lg">
                <p className="text-xs uppercase tracking-widest text-[#8C6D37] dark:text-[#D4AF37] font-bold">
                  Bespoke Studio & Carpentry
                </p>
                <p className="text-sm font-semibold text-stone-900 dark:text-white">
                  Handcrafted with selected hardwoods & quality upholstery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EFECE6] text-[#785724] dark:bg-[#27211B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
              <span>About N&B Modern Furnitures</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2] leading-tight">
              Craftsmanship That Turns Ideas Into Furniture.
            </h2>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
              At <strong className="font-semibold text-stone-900 dark:text-white">SOLUTION CENTER / N&B Modern Furnitures</strong>, we believe every living and working space deserves pieces that feel intentional, durable, and uniquely personal. Located at Hospital Roundabout in Bamenda, our studio creates custom furniture, professional carpentry, and upholstery solutions shaped around each client’s unique space, personal taste, and daily comfort.
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
              Whether you are furnishing a new residential home, outfitting an executive office, or reupholstering cherished seating, our artisans combine strong timber framing, precise joinery, and tailored finishing to deliver timeless results built for real everyday living.
            </p>

            {/* Core Specialties Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                "Custom Living Room Sofas",
                "Solid Wood Carpentry",
                "Precision Upholstery",
                "Modern Home & Office Sets",
                "Built-in Cabinetry & Storage",
                "Rigorous Finishing & Detail"
              ].map((specialty, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                  <span>{specialty}</span>
                </div>
              ))}
            </div>

            {/* "Our approach" card */}
            <div className="p-5 rounded-2xl bg-[#F4F1EA] dark:bg-[#1E1915] border border-stone-200/80 dark:border-stone-800/80 space-y-2 mt-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C6D37] dark:text-[#D4AF37]">
                <HeartHandshake className="w-4 h-4" />
                <span>Our Approach — Designed For You</span>
              </div>
              <p className="text-sm text-stone-700 dark:text-stone-300 italic leading-relaxed">
                “We believe furniture should fit the person, the space, and the way it is used—not the other way around.”
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                id="about-discover-services-btn"
                href="#services"
                onClick={handleScrollToServices}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#785724] dark:text-[#D4AF37] hover:text-stone-900 dark:hover:text-white transition-colors group"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
