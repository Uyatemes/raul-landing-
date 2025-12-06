interface AboutTranslations {
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
}

export const aboutTranslations: Record<'ru' | 'kz' | 'en', AboutTranslations> = {
  ru: {
    title: 'О нас',
    paragraph1: 'Raul — кофейня с панорамным видом на ботанический сад в Астане.',
    paragraph2: 'С самого первого дня нас поддержали вы — наши дорогие гости, жители и гости столицы. Благодаря вам о Raul заговорили по всему Казахстану и за его пределами. Ваши сторис, отзывы и тёплые рекомендации стали для нас самой мощной поддержкой.',
    paragraph3: 'Мы искренне благодарны каждому, кто разделяет с нами любовь к кофе и атмосфере.',
    paragraph4: 'Raul продолжает расти, меняться и становиться лучше — каждый день.'
  },
  kz: {
    title: 'Біз туралы',
    paragraph1: 'Raul — Астанадағы ботаникалық баққа панорамалық көрінісі бар кофехана.',
    paragraph2: 'Алғашқы күннен бастап бізді сіздер — қадірлі қонақтарымыз, астана тұрғындары мен қонақтары қолдады. Сіздердің арқасында Raul туралы бүкіл Қазақстан бойынша және оның шекарасынан тыс айтыла бастады. Сіздердің сторис, пікірлеріңіз және жылы ұсыныстарыңыз біз үшін ең күшті қолдау болды.',
    paragraph3: 'Біз кофе мен атмосфераға деген сүйіспеншілікті бізбен бөлісетін әрбір адамға шын жүректен алғыс білдіреміз.',
    paragraph4: 'Raul өсуін, өзгеруін және жақсаруын жалғастырады — күн сайын.'
  },
  en: {
    title: 'About Us',
    paragraph1: 'Raul is a coffee shop with a panoramic view of the botanical garden in Astana.',
    paragraph2: 'From the very first day, you have supported us — our dear guests, residents and visitors of the capital. Thanks to you, Raul has been talked about throughout Kazakhstan and beyond. Your stories, reviews and warm recommendations have become the most powerful support for us.',
    paragraph3: 'We are sincerely grateful to everyone who shares with us the love for coffee and atmosphere.',
    paragraph4: 'Raul continues to grow, change and become better — every day.'
  }
}; 