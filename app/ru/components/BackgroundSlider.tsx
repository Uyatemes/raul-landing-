'use client';

import { useState, useEffect } from 'react';

export default function BackgroundSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/images/hero/hero-background.webp',
    '/images/hero/hero-background-2.webp',
    '/images/hero/hero-background-3.webp',
    '/images/hero/hero-background-4.webp',
    '/images/hero/hero-background-5.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={src}
            alt={`RAUL Coffee ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="text-white text-xs opacity-50 text-right">
            <div className="text-shadow text-right">© RAUL. Все права защищены.</div>
            <div className="text-shadow text-right">Астана, Туркестан 16, этаж 22.</div>
            <div className="text-shadow text-right">Фотография — Tolegen Nurbekovich.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

