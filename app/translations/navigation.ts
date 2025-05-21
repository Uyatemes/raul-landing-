interface NavigationTranslations {
  menu: string;
  about: string;
  contacts: string;
  language: string;
}

export const navigationTranslations: Record<'ru' | 'kz' | 'en', NavigationTranslations> = {
  ru: {
    menu: 'Меню',
    about: 'О нас',
    contacts: 'Контакты',
    language: 'Язык'
  },
  kz: {
    menu: 'Мәзір',
    about: 'Біз туралы',
    contacts: 'Байланыс',
    language: 'Тіл'
  },
  en: {
    menu: 'Menu',
    about: 'About',
    contacts: 'Contacts',
    language: 'Language'
  }
}; 