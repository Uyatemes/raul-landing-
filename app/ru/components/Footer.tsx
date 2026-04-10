'use client';

import { usePathname } from 'next/navigation';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function Footer() {
  const pathname = usePathname();

  const isMenuPage = pathname === '/ru/menu';
  const isHomePage = pathname === '/ru';

  return (
    <footer className="footer">
      <div className="footer-content">
        {isMenuPage && (
          <div className="menu-update-date">Меню обновлено 11.04.2026</div>
        )}
        {!isHomePage && (
          <div className="footer-language-switcher">
            <LanguageSwitcher />
          </div>
        )}
        <p className="footer-copyright">© 2026 raul. Все права защищены.</p>
      </div>
    </footer>
  );
}

