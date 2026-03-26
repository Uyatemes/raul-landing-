'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function Footer() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMenuPage = mounted && pathname === '/eu/menu';
  const isHomePage = mounted && pathname === '/eu';

  return (
    <footer className="footer">
      <div className="footer-content">
        {isMenuPage && (
          <div className="menu-update-date">Menu updated 26.03.2026</div>
        )}
        {!isHomePage && (
          <div className="footer-language-switcher">
            <LanguageSwitcher />
          </div>
        )}
        <p className="footer-copyright">© 2026 raul. All rights reserved.</p>
      </div>
    </footer>
  );
}

