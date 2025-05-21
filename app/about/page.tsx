'use client';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-video-desktop">
          <video 
            src="/videos/about-video-vertical.webm"
            autoPlay
            loop
            muted
            playsInline
            className="about-video"
          />
        </div>
        <div className="about-video-mobile">
          <video 
            src="/videos/about-video-horizontal.webm"
            autoPlay
            loop
            muted
            playsInline
            className="about-video"
          />
        </div>

        <div className="about-content">
          <h1 className="about-title">О нас</h1>
          <div className="about-text about-jetbrains">
            <p>
              Raul — кофейня с панорамным видом на ботанический сад в Астане.
            </p>
            <p>
              С самого первого дня нас поддержали вы — наши дорогие гости, жители и гости столицы. Благодаря вам о Raul заговорили по всему Казахстану и за его пределами. Ваши сторис, отзывы и тёплые рекомендации стали для нас самой мощной поддержкой.
            </p>
            <p>
              Мы искренне благодарны каждому, кто разделяет с нами любовь к кофе и атмосфере.
            </p>
            <p>
              Raul продолжает расти, меняться и становиться лучше — каждый день.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
} 