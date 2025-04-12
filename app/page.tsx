'use client';

import { useEffect, useState } from 'react';
import BackgroundSlider from './components/BackgroundSlider';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen">
      <BackgroundSlider />
    </main>
  );
} 