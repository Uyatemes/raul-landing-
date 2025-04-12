'use client';

import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function SpaceMonoFont() {
  return (
    <style jsx global>{`
      :root {
        --space-mono-font: ${spaceMono.style.fontFamily};
      }
    `}</style>
  );
} 