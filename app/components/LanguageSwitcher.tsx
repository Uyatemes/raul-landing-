'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function LanguageSwitcherContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isRuPage = pathname?.startsWith('/ru');
  const isEuPage = pathname?.startsWith('/eu');
  const isKzPage = !isRuPage && !isEuPage; // Main site is KZ
  
  const getCurrentPath = () => {
    if (!pathname) return '/';
    
    // Remove language prefix to get the base path
    if (isRuPage) {
      const path = pathname.replace('/ru', '');
      return path || '/'; // If path is just '/ru', return '/'
    }
    if (isEuPage) {
      const path = pathname.replace('/eu', '');
      return path || '/'; // If path is just '/eu', return '/'
    }
    return pathname;
  };

  const getLanguagePath = (lang: 'kz' | 'ru' | 'eu') => {
    const basePath = getCurrentPath();
    
    // Preserve query parameters (like tab=seasonal)
    const queryString = searchParams.toString();
    const query = queryString ? `?${queryString}` : '';
    
    if (lang === 'kz') {
      return `${basePath}${query}`;
    } else if (lang === 'ru') {
      const path = basePath === '/' ? '/ru' : `/ru${basePath}`;
      return `${path}${query}`;
    } else {
      const path = basePath === '/' ? '/eu' : `/eu${basePath}`;
      return `${path}${query}`;
    }
  };

  return (
    <div className="language-switcher">
      <Link
        href={getLanguagePath('kz')}
        className={`language-link ${isKzPage ? 'active' : ''}`}
      >
        KZ
      </Link>
      <span className="language-separator">/</span>
      <Link
        href={getLanguagePath('ru')}
        className={`language-link ${isRuPage ? 'active' : ''}`}
      >
        RU
      </Link>
      <span className="language-separator">/</span>
      <Link
        href={getLanguagePath('eu')}
        className={`language-link ${isEuPage ? 'active' : ''}`}
      >
        EN
      </Link>
    </div>
  );
}

export default function LanguageSwitcher() {
  return (
    <Suspense fallback={<div className="language-switcher"><span className="language-link">KZ</span><span className="language-separator">/</span><span className="language-link">RU</span><span className="language-separator">/</span><span className="language-link">EN</span></div>}>
      <LanguageSwitcherContent />
    </Suspense>
  );
}
