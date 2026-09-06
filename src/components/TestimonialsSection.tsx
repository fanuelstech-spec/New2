import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/furnitureData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#F4F1EA] dark:bg-[#16120F] transition-colors duration-300 relative border-t border-stone-200/60 dark:border-stone-800/60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
            <span>Client Demonstration Feedback</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2]">
            What Our Clients Say
          </h2>

          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
            * Sample demonstration reviews illustrating representative client feedback for custom furniture commissions.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-[#FBF9F5] dark:bg-[#1E1915] rounded-3xl p-8 sm:p-12 border border-stone-200/80 dark:border-stone-800 shadow-xl transition-all duration-300 min-h-[300px] flex flex-col justify-between">
          
          {/* Quote Icon */}
          <div className="absolute top-6 right-8 text-[#C5A059]/20 pointer-events-none">
            <Quote className="w-16 h-16" />
          </div>

          <div>
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif-heading text-lg sm:text-2xl text-stone-800 dark:text-stone-100 italic leading-relaxed mb-8">
              “{current.quote}”
            </blockquote>
          </div>

          {/* Author info and navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-200/60 dark:border-stone-800">
            <div>
              <p className="text-base font-bold text-stone-900 dark:text-white">
                {current.role}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-[#8C6D37] dark:text-[#D4AF37] font-medium">
                  {current.projectType}
                </span>
                <span className="text-stone-400">•</span>
                <span className="text-xs text-stone-500 dark:text-stone-400">
                  Bamenda, Cameroon
                </span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-3 self-end sm:self-auto">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex space-x-1.5 px-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-6 bg-[#C5A059]'
                        : 'w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
