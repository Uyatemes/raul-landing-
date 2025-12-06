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
          <div className="menu-update-date">Мәзір жаңартылды 02.09.2025</div>
        )}
        {!isHomePage && (
          <div className="footer-language-switcher">
            <LanguageSwitcher />
          </div>
        )}
        <p className="footer-copyright">© 2025 raul. Барлық құқықтар қорғалған.</p>
      </div>
    </footer>
  );
} 