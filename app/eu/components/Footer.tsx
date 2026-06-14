'use client';

import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function Footer() {
  const pathname = usePathname();

  const isMenuPage = pathname === '/eu/menu';
  const isHomePage = pathname === '/eu';

  return (
    <footer className="footer">
      <div className="footer-content">
        {isMenuPage && (
          <div className="menu-update-date">Menu updated 14.06.2026</div>
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

