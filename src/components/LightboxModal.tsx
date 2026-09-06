import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Ruler, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';
import { createWhatsAppUrl } from '../data/furnitureData';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (item) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((p) => p.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const whatsappInquiryUrl = createWhatsAppUrl(
    `Hello SOLUTION CENTER / N&B Modern Furnitures, I am interested in custom ordering a piece similar to "${item.title}" (${item.category}). Could you provide more details and an estimate?`
  );

  return (
    <div
      id="portfolio-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#FBF9F5] dark:bg-[#1A1613] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-200/40 dark:border-stone-800 text-stone-900 dark:text-stone-100 max-h-[92vh] flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project view"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Column */}
        <div className="relative lg:w-3/5 bg-stone-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[50vh] lg:max-h-[85vh] overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[80vh] p-2"
          />

          {/* Previous / Next Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous project"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next project"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Project Details Sidebar */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#EFECE6] dark:bg-[#2A231C] text-[#8C6D37] dark:text-[#E2BD5A] border border-[#D5C9B3]/40 dark:border-[#52412A]/40">
                {item.category}
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                {currentIndex + 1} of {items.length}
              </span>
            </div>

            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              {item.title}
            </h3>

            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              {item.subtitle}
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {item.description}
            </p>

            {/* Specifications */}
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 border-t border-stone-200 dark:border-stone-800">
              {item.dimensions && (
                <div className="flex items-start gap-2 pt-2">
                  <Ruler className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">Dimensions: </span>
                    <span>{item.dimensions}</span>
                  </div>
                </div>
              )}
              {item.material && (
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">Materials: </span>
                    <span>{item.material}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Inquiry CTA */}
          <div className="pt-6 mt-6 border-t border-stone-200 dark:border-stone-800 space-y-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire About This Piece via WhatsApp</span>
            </a>
            <p className="text-[11px] text-center text-stone-500 dark:text-stone-400">
              Customized to fit your exact room measurements & fabric choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
