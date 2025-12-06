'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setIsDark(pathname === '/eu');
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  // Use default 'dark' to match server-side rendering
  const navClassName = mounted 
    ? `nav-container ${isDark ? 'dark' : 'light'} ${isMenuOpen ? 'menu-open' : ''}`
    : `nav-container dark ${isMenuOpen ? 'menu-open' : ''}`;

  return (
    <>
      <nav className={navClassName} suppressHydrationWarning>
        <div className="nav-content px-6 md:px-6">
          {/* Left Side */}
          <div className="flex items-center gap-8">
            {/* Burger Menu Button */}
            <button
              className={`md:hidden burger-button ${mounted && isDark ? 'text-white' : 'text-black'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              suppressHydrationWarning
            >
              <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <Link href="/eu" className="hover:opacity-70 transition-opacity">
              <img src="/svg/r.svg" alt="R" className={`h-6 ${mounted && isDark ? 'invert' : ''}`} suppressHydrationWarning />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/eu/menu"
                className={`nav-link ${mounted && pathname === '/eu/menu' ? 'font-bold' : ''}`}
                suppressHydrationWarning
              >
                Menu
              </Link>
              <Link
                href="/eu/about"
                className={`nav-link ${mounted && pathname === '/eu/about' ? 'font-bold' : ''}`}
                suppressHydrationWarning
              >
                About
              </Link>
              <Link
                href="/eu/contacts"
                className={`nav-link ${mounted && pathname === '/eu/contacts' ? 'font-bold' : ''}`}
                suppressHydrationWarning
              >
                Contacts
              </Link>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-6">
            {mounted && pathname !== '/eu/contacts' && (
              <>
                <a href="https://www.instagram.com/coffee.raul/" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://t.me/coffee_raul_bot" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <svg className="w-6 h-6 align-middle" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g transform="translate(2,2) scale(1.1)">
                        <path d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z"/>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@coffee.raul" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://2gis.kz/astana/search/raul/firm/70000001091828086?m=71.466203%2C51.102622%2F13.66" target="_blank" rel="noopener noreferrer" className={`nav-link ${mounted && isDark ? 'text-white' : 'text-black'}`} suppressHydrationWarning>
                  <svg className="w-6 h-6" viewBox="0 0 566 586" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M419.825 348.408C317.939 348.925 301.458 412.547 295.966 466.342L293.469 490.135H272.99L270.493 466.342C265.001 412.547 248.02 348.925 149.63 348.408C133.149 313.232 126.157 284.783 126.157 252.714C126.157 172.541 189.586 97.5362 283.478 97.5362C377.372 97.5362 439.802 172.021 439.802 253.233C439.802 284.783 436.806 313.232 419.825 348.408ZM282.481 0.291992C127.657 0.291992 0.798828 131.676 0.798828 292.541C0.798828 453.927 127.657 585.309 282.481 585.309C438.802 585.309 565.161 453.927 565.161 292.541C565.161 131.677 438.802 0.291992 282.481 0.291992Z" fill="currentColor"/>
                  </svg>
                </a>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {mounted && pathname !== '/eu' && (
              <button 
                className={`mobile-nav-link ${pathname === '/eu' ? 'font-bold' : ''}`}
                onClick={() => handleNavigation('/eu')}
              >
                Home
              </button>
            )}
            <button 
              className={`mobile-nav-link ${mounted && pathname === '/eu/menu' ? 'font-bold' : ''}`}
              onClick={() => handleNavigation('/eu/menu')}
              suppressHydrationWarning
            >
              Menu
            </button>
            <button 
              className={`mobile-nav-link ${mounted && pathname === '/eu/about' ? 'font-bold' : ''}`}
              onClick={() => handleNavigation('/eu/about')}
              suppressHydrationWarning
            >
              About
            </button>
            <button 
              className={`mobile-nav-link ${mounted && pathname === '/eu/contacts' ? 'font-bold' : ''}`}
              onClick={() => handleNavigation('/eu/contacts')}
              suppressHydrationWarning
            >
              Contacts
            </button>
            {/* Language Switcher in Mobile Menu */}
            <div className="mobile-language-switcher">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

