import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, createWhatsAppUrl } from '../data/furnitureData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const whatsappAskUrl = createWhatsAppUrl(
    "Hello SOLUTION CENTER / N&B Modern Furnitures, I have a specific question about commissioning custom furniture."
  );

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#FBF9F5] dark:bg-[#12100E] transition-colors duration-300 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2]">
            Everything You Need To Know.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Answers to common questions about our custom furniture commissions, materials, and ordering process in Bamenda.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#F4F1EA] dark:bg-[#1A1613] border border-stone-200/80 dark:border-stone-800 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif-heading text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#C5A059] text-stone-950 dark:bg-[#D4AF37] dark:text-stone-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-200/40 dark:border-stone-800/60 pt-4">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#EFECE6] dark:bg-[#1E1915] border border-stone-300/60 dark:border-stone-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif-heading text-base sm:text-lg font-bold text-stone-900 dark:text-white">
              Have a question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
              Speak directly with our craftsmen at Hospital Roundabout, Bamenda.
            </p>
          </div>

          <a
            href={whatsappAskUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
