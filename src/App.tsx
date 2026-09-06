import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStatsBar } from './components/TrustStatsBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CustomMadeFeature } from './components/CustomMadeFeature';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MaterialsSection } from './components/MaterialsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('nb_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Fall back to system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nb_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nb_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] dark:bg-[#12100E] dark:text-[#FAF7F2] transition-colors duration-300 font-sans selection:bg-[#C5A059]/30 selection:text-[#1C1917] dark:selection:text-white">
      
      {/* Sticky & Floating Modern Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trust & Quick Stats Bar */}
        <TrustStatsBar />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Featured Portfolio with Masonry & Modal Lightbox */}
        <PortfolioSection />

        {/* "Custom Made" Feature Section */}
        <CustomMadeFeature />

        {/* 4-Step Process Flow */}
        <ProcessSection />

        {/* Why Choose Us with Workshop Presentation */}
        <WhyChooseUs />

        {/* Materials, Swatches & Finishing Section */}
        <MaterialsSection />

        {/* Testimonials Carousel */}
        <TestimonialsSection />

        {/* Accordion FAQ Section */}
        <FAQSection />

        {/* High-Converting Contact & Quote Form */}
        <ContactSection />
      </main>

      {/* Modern Multi-Column Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsApp />

    </div>
  );
}
