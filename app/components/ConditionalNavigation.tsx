'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function ConditionalNavigation() {
  const pathname = usePathname();
  
  // Don't render Navigation for /ru and /eu pages (they have their own Navigation)
  if (pathname?.startsWith('/ru') || pathname?.startsWith('/eu')) {
    return null;
  }
  
  return <Navigation />;
}

