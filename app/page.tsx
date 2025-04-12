'use client';

import { useEffect } from 'react';
import BackgroundSlider from './components/BackgroundSlider';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <main className="min-h-screen relative">
      <BackgroundSlider />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="home-logo">
          <Image
            src="/svg/logo.svg"
            alt="RAUL Coffee Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
} 