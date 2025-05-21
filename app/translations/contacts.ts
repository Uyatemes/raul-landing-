interface ContactsTranslations {
  title: string;
  address: string;
  workingHours: string;
  phone: string;
  instagram: string;
  copyright: string;
  schedule: {
    weekdays: string;
    weekends: string;
    time: string;
  };
}

export const contactsTranslations: Record<'ru' | 'kz' | 'en', ContactsTranslations> = {
  ru: {
    title: 'Контакты',
    address: 'улица Туркестан 16, 22 этаж',
    workingHours: 'Режим работы',
    phone: 'Телефон',
    instagram: 'Instagram',
    copyright: '© 2025 raul. Все права защищены.',
    schedule: {
      weekdays: 'Пн-Пт',
      weekends: 'Сб-Вс',
      time: '08:00 - 00:00'
    }
  },
  kz: {
    title: 'Байланыс',
    address: 'Түркістан көшесі 16, 22 қабат',
    workingHours: 'Жұмыс уақыты',
    phone: 'Телефон',
    instagram: 'Instagram',
    copyright: '© 2025 raul. Барлық құқықтар қорғалған.',
    schedule: {
      weekdays: 'Дс-Жм',
      weekends: 'Сб-Жс',
      time: '08:00 - 00:00'
    }
  },
  en: {
    title: 'Contacts',
    address: '16 Turkistan Street, 22nd floor',
    workingHours: 'Working Hours',
    phone: 'Phone',
    instagram: 'Instagram',
    copyright: '© 2025 raul. All rights reserved.',
    schedule: {
      weekdays: 'Mon-Fri',
      weekends: 'Sat-Sun',
      time: '08:00 - 00:00'
    }
  }
}; 