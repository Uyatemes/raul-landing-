'use client';

import { useLanguage } from '../context/LanguageContext';
import { navigationTranslations } from '../translations/navigation';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const t = navigationTranslations[language];

  return (
    <div className="language-switcher">
      <p className="language-title">{t.language}</p>
      <div className="language-buttons">
        <button
          className={`language-button ${language === 'ru' ? 'active' : ''}`}
          onClick={() => setLanguage('ru')}
        >
          RU
        </button>
        <button
          className={`language-button ${language === 'kz' ? 'active' : ''}`}
          onClick={() => setLanguage('kz')}
        >
          KZ
        </button>
        <button
          className={`language-button ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
      </div>
    </div>
  );
} 