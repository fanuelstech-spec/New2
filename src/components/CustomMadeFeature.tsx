import React from 'react';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../data/furnitureData';

export const CustomMadeFeature: React.FC = () => {
  const whatsappCustomProjectUrl = createWhatsAppUrl(
    "Hello SOLUTION CENTER / N&B Modern Furnitures, I would like to start a custom furniture project. I have ideas and measurements I'd like to discuss."
  );

  const checklist = [
    "Custom dimensions",
    "Fabric & upholstery options",
    "Wood & finish selection",
    "Style tailored to your space",
    "Functional designs",
    "Personal consultation"
  ];

  return (
    <section
      id="custom-made"
      className="py-20 lg:py-28 bg-[#181411] text-[#FAF7F2] relative overflow-hidden transition-colors duration-300"
    >
      {/* Subtle gold accent lighting in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-800 shadow-2xl aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
                alt="Custom built minimalist interior dining and living furniture"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37] text-stone-950 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>100% Made to Order</span>
                </div>
                <p className="text-white text-base sm:text-lg font-serif-heading font-semibold">
                  Hand-tailored for homes and businesses in Bamenda.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Made Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#2C241B] text-[#E2BD5A] border border-[#52412A]/80">
              <span>Bespoke Engineering</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Your Space. Your Style. Your Furniture.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Choose the dimensions, materials, colors, fabrics, finishes, and details. We help transform your idea into a piece designed specifically for you.
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-stone-200">
                  <div className="p-1 rounded-full bg-[#C5A059]/20 text-[#D4AF37]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                id="custom-project-whatsapp-btn"
                href={whatsappCustomProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-[#D4AF37] hover:bg-[#C5A059] text-stone-950 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Your Custom Project</span>
              </a>
              <p className="text-xs text-stone-400 mt-2">
                Fast response on WhatsApp • Hospital Roundabout, Bamenda
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
