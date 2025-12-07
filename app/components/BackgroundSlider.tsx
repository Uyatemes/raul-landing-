'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function BackgroundSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();

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

  const translations = {
    kz: {
      copyright: '© RAUL. Барлық құқықтар қорғалған.',
      address: 'Астана, Түркістан 16, 22 қабат.',
      photography: 'Фото — Tolegen Nurbekovich.'
    },
    ru: {
      copyright: '© RAUL. Все права защищены.',
      address: 'Астана, Туркестан 16, этаж 22.',
      photography: 'Фотография — Tolegen Nurbekovich.'
    },
    en: {
      copyright: '© RAUL. All rights reserved.',
      address: 'Astana, Turkestan 16, 22nd floor.',
      photography: 'Photography — Tolegen Nurbekovich.'
    }
  };

  const t = translations[language];

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
            <div className="text-shadow text-right">{t.copyright}</div>
            <div className="text-shadow text-right">{t.address}</div>
            <div className="text-shadow text-right">{t.photography}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 