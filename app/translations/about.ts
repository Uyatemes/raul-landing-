interface AboutTranslations {
  title: string;
  description: string;
}

export const aboutTranslations: Record<'ru' | 'kz' | 'en', AboutTranslations> = {
  ru: {
    title: 'О нас',
    description: 'Мы - уютная кофейня в самом сердце левого берега, где каждая чашка кофе создается с любовью и вниманием к деталям. Наша миссия - создавать особенную атмосферу и дарить незабываемые впечатления каждому гостю.'
  },
  kz: {
    title: 'Біз туралы',
    description: 'Біз - сол жағалаудың жүрегінде орналасқан жайлы кофехана, мұнда әрбір кофе шынысы махаббатпен және ұсақ-түйекке мән берумен жасалады. Біздің миссиямыз - ерекше атмосфера жасау және әр қонаққа ұмытылмас әсер сыйлау.'
  },
  en: {
    title: 'About Us',
    description: 'We are a cozy coffee shop in the heart of the left bank, where every cup of coffee is created with love and attention to detail. Our mission is to create a special atmosphere and give unforgettable impressions to every guest.'
  }
}; 