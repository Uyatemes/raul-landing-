'use client';

import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const pathname = usePathname();
  const isMenuPage = pathname === '/menu';
  const isHomePage = pathname === '/';

  return (
    <footer className="footer">
      <div className="footer-content">
        {isMenuPage && (
          <div className="menu-update-date">Мәзір жаңартылды 14.06.2026</div>
        )}
        {!isHomePage && (
          <div className="footer-language-switcher">
            <LanguageSwitcher />
          </div>
        )}
        <p className="footer-copyright">© 2026 raul. Барлық құқықтар қорғалған.</p>
      </div>
    </footer>
  );
} 