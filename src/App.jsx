import React, { Suspense } from 'react';
import SmoothScrollProvider from './components/providers/SmoothScrollProvider';
import AnimationProvider from './components/providers/AnimationProvider';
import Navbar from './components/navigation/Navbar';
import HeroSection from './components/hero/HeroSection';
import MessageSection from './components/message/MessageSection';
import TimelineSection from './components/timeline/TimelineSection';
import SplitSection from './components/split/SplitSection';
import HelmetGallerySection from './components/helmets/HelmetGallerySection';
import StorePromoSection from './components/store/StorePromoSection';
import PartnersSection from './components/partners/PartnersSection';
import FooterSection from './components/footer/FooterSection';
import './App.css';

function App() {
  return (
    <SmoothScrollProvider>
      <AnimationProvider>
        <div className="bg-bg-light min-h-screen text-black font-body selection:bg-neon-lime selection:text-black">
          <Navbar />

          <main>
            <Suspense fallback={<div className="h-screen w-full bg-bg-light flex items-center justify-center">Loading...</div>}>
              <HeroSection />
            </Suspense>

            <MessageSection />
            <TimelineSection />
            <SplitSection />
            <HelmetGallerySection />
            <StorePromoSection />
            <PartnersSection />
          </main>

          <FooterSection />
        </div>
      </AnimationProvider>
    </SmoothScrollProvider>
  );
}

export default App;
