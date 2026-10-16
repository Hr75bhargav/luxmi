import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BrandsSection } from './components/BrandsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyVisitUsSection } from './components/WhyVisitUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { ContactCTASection } from './components/ContactCTASection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { InquiryModal } from './components/InquiryModal';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryBrand, setInquiryBrand] = useState('Apple');

  const handleOpenInquiry = (brand?: string) => {
    if (brand) {
      setInquiryBrand(brand);
    }
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090b0e] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero onOpenInquiry={handleOpenInquiry} />
        <AboutSection />
        <BrandsSection onOpenInquiry={handleOpenInquiry} />
        <ServicesSection onOpenInquiry={handleOpenInquiry} />
        <WhyVisitUsSection />
        <ReviewsSection />
        <LocationSection />
        <InstagramSection />
        <ContactCTASection onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Contact Bar (height <= 15% of viewport) */}
      <MobileBottomBar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Quick Model & Stock Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        defaultBrand={inquiryBrand}
      />
    </div>
  );
}
