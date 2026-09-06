import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../data/furnitureData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappChatUrl = createWhatsAppUrl(
    "Hello SOLUTION CENTER / N&B Modern Furnitures, I’m browsing your website and would like to ask a quick question about custom furniture."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip Label */}
      <div
        className={`mr-3 px-3.5 py-1.5 rounded-full bg-stone-900 text-white text-xs font-semibold tracking-wide shadow-xl transition-all duration-300 pointer-events-none hidden sm:block ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with N&B Modern Furnitures
      </div>

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappChatUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat with SOLUTION CENTER / N&B Modern Furnitures on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
        
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
};
