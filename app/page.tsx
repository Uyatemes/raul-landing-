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
    <main className="section-hero">
      <BackgroundSlider />
      <div className="home-copyright">
        <p>© RAUL. Все права защищены.</p>
        <p>Астана, Туркестан 16, этаж 22.</p>
        <p>Фотография — Tolegen Nurbekovich.</p>
      </div>
    </main>
  );
} 