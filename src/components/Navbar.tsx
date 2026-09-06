import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/furnitureData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#FBF9F5]/95 dark:bg-[#12100E]/95 shadow-md backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800'
          : 'py-5 bg-[#FBF9F5]/80 dark:bg-[#12100E]/80 backdrop-blur-sm border-b border-stone-200/40 dark:border-stone-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] dark:text-[#FAF7F2] transition-colors group-hover:text-[#C5A059]">
            {BUSINESS_INFO.brandName}
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-[#8C6D37] dark:text-[#D4AF37] uppercase">
            {BUSINESS_INFO.subName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-stone-700 hover:text-[#8C6D37] dark:text-stone-300 dark:hover:text-[#D4AF37] transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Quote CTA */}
        <div className="hidden sm:flex items-center space-x-3.5">
          {/* Light/Dark Toggle */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={() => setDarkMode(prev => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2.5 rounded-full text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white bg-stone-100 hover:bg-stone-200 dark:bg-stone-800/80 dark:hover:bg-stone-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-[#D4AF37]" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

          {/* Quick WhatsApp Quote Button */}
          <a
            id="nav-quote-btn"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2C221E] hover:bg-[#4A3528] text-white dark:bg-[#D4AF37] dark:hover:bg-[#C5A059] dark:text-stone-950 transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* Theme toggle mobile */}
          <button
            id="mobile-theme-toggle-btn"
            type="button"
            onClick={() => setDarkMode(prev => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 focus:outline-none"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* Hamburger Menu Button */}
          <button
            id="mobile-menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-md text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden px-4 pt-3 pb-6 bg-[#FBF9F5] dark:bg-[#12100E] border-b border-stone-200 dark:border-stone-800 shadow-xl transition-all"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-base font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-col gap-2.5">
              <a
                id="mobile-drawer-quote-btn"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider bg-[#2C221E] text-white dark:bg-[#D4AF37] dark:text-stone-950 transition-colors"
              >
                Request a Custom Quote
              </a>
              <a
                id="mobile-drawer-whatsapp-btn"
                href={createWhatsAppUrl("Hello SOLUTION CENTER / N&B Modern Furnitures, I’d like to inquire about your custom furniture services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
