'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isMenuPage = pathname === '/menu';

  return (
    <footer className="footer">
      <div className="footer-content">
        {isMenuPage && (
          <div className="menu-update-date">Меню обновлено 22.05.2025</div>
        )}
        <p className="footer-copyright">© 2025 raul. Все права защищены.</p>
      </div>
    </footer>
  );
} 