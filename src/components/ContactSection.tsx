import React, { useState } from 'react';
import { MapPin, MessageCircle, Clock, Send, UploadCloud, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';
import { QuoteFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    serviceType: 'Custom Furniture',
    furnitureType: 'Modern Sofa / Sectional',
    preferredStyle: 'Contemporary Luxury',
    budget: '',
    message: '',
    referenceFileName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFileName(file.name);
      setFormData(prev => ({ ...prev, referenceFileName: file.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp prefilled message
    let whatsappText = `Hello SOLUTION CENTER / N&B Modern Furnitures,\n`;
    whatsappText += `My name is ${formData.fullName || 'a client'}.\n`;
    whatsappText += `• Service: ${formData.serviceType}\n`;
    whatsappText += `• Piece: ${formData.furnitureType}\n`;
    whatsappText += `• Preferred Style: ${formData.preferredStyle}\n`;
    if (formData.phone) {
      whatsappText += `• Phone: ${formData.phone}\n`;
    }
    if (formData.budget) {
      whatsappText += `• Approximate Budget: ${formData.budget}\n`;
    }
    if (formData.message) {
      whatsappText += `• Project Details: ${formData.message}\n`;
    }
    if (selectedFileName) {
      whatsappText += `• Reference Photo: I have a reference photo (${selectedFileName}) ready to send directly here in chat.\n`;
    }
    whatsappText += `Looking forward to discussing my project!`;

    const url = createWhatsAppUrl(whatsappText);
    setSubmitted(true);
    
    // Open WhatsApp
    window.open(url, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#F4F1EA] dark:bg-[#16120F] transition-colors duration-300 relative border-t border-stone-200/60 dark:border-stone-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE4D9] text-[#6E5020] dark:bg-[#2C241B] dark:text-[#E2BD5A] border border-[#D5C9B3]/60 dark:border-[#52412A]/60">
            <span>Direct Studio Enquiries</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2]">
            Have A Furniture Idea? Let's Build It.
          </h2>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-400">
            Tell us what you're looking for and let's discuss how we can bring it to life with bespoke precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Showroom Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Showroom Visit Card */}
            <div className="p-7 rounded-2xl bg-[#FBF9F5] dark:bg-[#1E1915] border border-stone-200/80 dark:border-stone-800 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-[#785724] dark:text-[#D4AF37]">
                <div className="p-3 rounded-xl bg-[#F2EFE9] dark:bg-[#2A231C]">
                  <MapPin className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-stone-900 dark:text-white">
                  Visit Us
                </h3>
              </div>
              <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 font-medium leading-relaxed">
                Hospital Roundabout<br />
                Bamenda, Cameroon
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Centrally accessible in town. Stop by to view wood specimens, fabric catalogues, and active workshop craft.
              </p>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-7 rounded-2xl bg-[#FBF9F5] dark:bg-[#1E1915] border border-stone-200/80 dark:border-stone-800 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-emerald-600 dark:text-emerald-400">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-stone-900 dark:text-white">
                  Direct WhatsApp
                </h3>
              </div>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Chat with us about your project, send floor plans, or share reference photos anytime.
              </p>
              <a
                id="contact-direct-whatsapp-btn"
                href={createWhatsAppUrl("Hello SOLUTION CENTER / N&B Modern Furnitures, I would like to inquire about your custom furniture pieces.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>Start a WhatsApp Conversation →</span>
              </a>
            </div>

            {/* Business Hours Card */}
            <div className="p-7 rounded-2xl bg-[#FBF9F5] dark:bg-[#1E1915] border border-stone-200/80 dark:border-stone-800 shadow-sm space-y-4">
              <div className="flex items-center space-x-3 text-[#785724] dark:text-[#D4AF37]">
                <div className="p-3 rounded-xl bg-[#F2EFE9] dark:bg-[#2A231C]">
                  <Clock className="w-5 h-5 text-[#C5A059]" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-stone-900 dark:text-white">
                  Business Hours
                </h3>
              </div>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                Contact us for current opening hours & on-site consultation bookings.
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Appointments can be scheduled via WhatsApp to review measurements in detail.
              </p>
            </div>

          </div>

          {/* Right Column: High-Converting Interactive Quote Builder Form */}
          <div className="lg:col-span-7 bg-[#FBF9F5] dark:bg-[#1E1915] p-8 sm:p-10 rounded-3xl border border-stone-200/80 dark:border-stone-800 shadow-xl">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C6D37] dark:text-[#D4AF37] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Custom Furniture Consultation</span>
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-stone-900 dark:text-white">
                Request A Project Estimate
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                Filling out this form prepares your message directly for WhatsApp so you get an instant response.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-fullname" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="quote-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Roland Fongang"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#251E19] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 6XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#251E19] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Service Type & Furniture Piece */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-servicetype" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    What Service Do You Need?
                  </label>
                  <select
                    id="quote-servicetype"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#251E19] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none transition-all"
                  >
                    <option value="Custom Furniture">Custom Furniture (New Build)</option>
                    <option value="Carpentry & Woodwork">Carpentry & Structural Woodwork</option>
                    <option value="Upholstery & Restoration">Upholstery & Restoration</option>
                    <option value="Modern Home Furniture">Modern Home Living Room Furniture</option>
                    <option value="Custom Cabinets & Storage">Custom Cabinets & Closet Systems</option>
                    <option value="Commercial Project">Commercial / Office Outfitting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-furnituretype" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Furniture Piece Type
                  </label>
                  <select
                    id="quote-furnituretype"
                    value={formData.furnitureType}
                    onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#251E19] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none transition-all"
                  >
                    <option value="Modern L-Shape Sofa / Sectional">Modern Sofa / Sectional</option>
                    <option value="Custom Bed & Headboard">Custom Bed Frame & Headboard</option>
                    <option value="Dining Table & Chairs Set">Dining Table & Chairs Set</option>
                    <option value="Statement TV Media Console">Statement TV Media Console</option>
                    <option value="Accent Armchairs / Lounge">Accent Armchairs / Lounge Chairs</option>
                    <option value="Built-in Wardrobe / Cabinets">Built-in Wardrobe / Cabinets</option>
                    <option value="Executive Desk / Office Furniture">Executive Desk / Office Furniture</option>
                    <option value="Other Bespoke Commission">Other Bespoke Piece</option>
                  </select>
                </div>
              </div>

              {/* Style & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-style" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Preferred Style
                  </label>
                  <select
                    id="quote-style"
                    value={formData.preferredStyle}
                    onChange={(e) => setFormData({ ...formData, preferredStyle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#251E19] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none transition-all"
                  >
                    <option value="Contemporary Luxury">Contemporary Luxury</option>
                    <option value="Modern African Contemporary">Modern African Contemporary</option>
                    <option value="Clean Minimalist">Clean Minimalist</option>
                    <option value="Natural Organic Woodcraft">Natural Organic Woodcraft</option>
                    <option value="Classic Elegant">Classic Elegant</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-budget" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                    Approximate Budget (Optional)
                  </label>
                  <input
                    id="quote-budget"
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. Flexible / Discuss in FCFA"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#251E19] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="quote-message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Project Description or Measurements
                </label>
                <textarea
                  id="quote-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe dimensions, room layout, fabric colors, or any specific features you desire..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#251E19] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Reference Image Upload / Attachment Simulator */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5">
                  Have an Inspiration / Reference Image? (Optional)
                </label>
                <div className="relative border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-2xl p-4 text-center hover:border-[#C5A059] transition-colors cursor-pointer bg-stone-50/50 dark:bg-stone-900/30">
                  <input
                    id="quote-file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <UploadCloud className="w-6 h-6 text-[#C5A059]" />
                    {selectedFileName ? (
                      <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Ready: {selectedFileName}</span>
                      </div>
                    ) : (
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        Click or drag a photo here. You can also send photos directly in WhatsApp.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                id="quote-submit-btn"
                type="submit"
                className="w-full py-4 px-6 rounded-full text-sm font-bold uppercase tracking-wider bg-[#241C18] hover:bg-[#3D2D26] text-white dark:bg-[#D4AF37] dark:hover:bg-[#C5A059] dark:text-stone-950 transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 dark:text-stone-950" />
                <span>Send Enquiry via WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 text-center">
                  WhatsApp window opened with your pre-formatted enquiry details!
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
