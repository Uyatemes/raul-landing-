interface MenuTranslations {
  categories: {
    hotDrinks: string;
    coldDrinks: string;
    seasonal: string;
    coffee: string;
    signatureCoffee: string;
    alternativeCoffee: string;
    authorTea: string;
    leafTea: string;
    hotDrink: string;
    icedTea: string;
    coldDrink: string;
    lemonade: string;
    cocktail: string;
    espressoTonic: string;
    fresh: string;
    smoothie: string;
    bumble: string;
    additional: string;
  };
  items: {
    espresso: string;
    americano: string;
    cappuccino: string;
    latte: string;
    flatWhite: string;
    moccaccino: string;
    rafPistachioTangerine: string;
    rafWalnutCaramel: string;
    goldenLatte: string;
    icelandicLatte: string;
    blueLatte: string;
    dripCoffee: string;
    batch: string;
    v60: string;
    aeropress: string;
    karakTea: string;
    seaBuckthorn: string;
    gingerLemonHoney: string;
    raspberryMint: string;
    assam: string;
    earlGrey: string;
    sencha: string;
    jasmine: string;
    cocoa: string;
    hotChocolate: string;
    matchaLatte: string;
    hotNutella: string;
    syrup: string;
    plantMilk: string;
    mangoPassion: string;
    raspberryStrawberryLime: string;
    cherryPear: string;
    icedAmericano: string;
    icedLatteCappuccino: string;
    icedSpanishLatte: string;
    icedMatcha: string;
    frappeBenvito: string;
    peachAlmond: string;
    appleKiwi: string;
    pineappleBanana: string;
    cherry: string;
    duchess: string;
    nutellaBanana: string;
    kitkat: string;
    citrus: string;
    sakura: string;
    orange: string;
    apple: string;
    bananaRaspberry: string;
    pineappleMango: string;
    greenSmoothie: string;
    proteinSmoothie: string;
    cherryPeachOrange: string;
    decaf: string;
    alternativeMilk: string;
    cottageCream: string;
    lactoseFree: string;
  };
  descriptions: {
    icedMatcha: string;
    dateSmoothie: string;
    strawberryBanana: string;
    grapefruitPearTea: string;
    banoffeePieLatte: string;
  };
}

export const menuTranslations: Record<'ru' | 'kz' | 'en', MenuTranslations> = {
  ru: {
    categories: {
      hotDrinks: 'Горячие напитки',
      coldDrinks: 'Холодные напитки',
      seasonal: 'Сезонное меню',
      coffee: 'Классика',
      signatureCoffee: 'Авторский кофе',
      alternativeCoffee: 'Альтернативный кофе',
      authorTea: 'Авторский чай',
      leafTea: 'Листовой чай (L)',
      hotDrink: 'Горячий напиток',
      icedTea: 'Айс ти (L)',
      coldDrink: 'Холодный напиток (L)',
      lemonade: 'Лимонад (L)',
      cocktail: 'Коктейль (L)',
      espressoTonic: 'Эспрессо тоник (L)',
      fresh: 'Фреш (L)',
      smoothie: 'Смузи (L)',
      bumble: 'Бамбл (L)',
      additional: 'Дополнительно'
    },
    items: {
      espresso: 'Эспрессо',
      americano: 'Американо',
      cappuccino: 'Капучино',
      latte: 'Латте',
      flatWhite: 'Флэт уайт',
      cocoa: 'Какао',
      moccaccino: 'Моккачино',
      rafPistachioTangerine: 'Раф фисташка-мандарин',
      rafWalnutCaramel: 'Раф грек жаңғағы-карамель',
      goldenLatte: 'Золотой латте',
      icelandicLatte: 'Исландиялық латте',
      blueLatte: 'Көк латте',
      dripCoffee: 'Дрип кофе',
      batch: 'Batch',
      v60: 'V60',
      aeropress: 'Аэропресс',
      karakTea: 'Карак чай',
      seaBuckthorn: 'Шырғанақ-Маракуйя',
      gingerLemonHoney: 'Имбирь-Лимон-Бал',
      raspberryMint: 'Таңқурай-Жалбыз',
      assam: 'Ассам',
      earlGrey: 'Эрл Грей',
      sencha: 'Сенча',
      jasmine: 'Жасмин',
      hotChocolate: 'Горячий шоколад',
      matchaLatte: 'Матча Латте',
      hotNutella: 'Горячий Нутелла',
      syrup: '+ Шәрбат',
      plantMilk: '+ Өсімдік сүті',
      mangoPassion: 'Манго-Маракуйя',
      raspberryStrawberryLime: 'Таңқурай / Құлпынай лайм',
      cherryPear: 'Шие алмұрт',
      icedAmericano: 'Мұзды Американо',
      icedLatteCappuccino: 'Мұзды Латте / Капучино',
      icedSpanishLatte: 'Мұзды Испан латте',
      icedMatcha: 'Мұзды Матча',
      frappeBenvito: 'Фраппе Benvito',
      peachAlmond: 'Персик-Миндаль',
      appleKiwi: 'Алма-Киви',
      pineappleBanana: 'Ананас-Банан',
      cherry: 'Шие',
      duchess: 'Дюшес',
      nutellaBanana: 'Нутелла банан',
      kitkat: 'Кит-Кат',
      citrus: 'Цитрус',
      sakura: 'Сакура',
      orange: 'Апельсин',
      apple: 'Алма',
      bananaRaspberry: 'Банан-таңқурай',
      pineappleMango: 'Ананас-манго',
      greenSmoothie: 'Жасыл смузи',
      proteinSmoothie: 'Протеинді смузи',
      cherryPeachOrange: 'Шие, Шабдалы, Апельсин',
      decaf: '+ Кофеинсіз',
      alternativeMilk: '+ Балама сүт',
      cottageCream: '+ Сүзбе кремі',
      lactoseFree: '+ Лактозасыз'
    },
    descriptions: {
      icedMatcha: '(шабдалы, манго, құлпынай)',
      dateSmoothie: 'Табиғи патша құрма мен өрікті сүт негізіндегі қанық және нәрлі сусын.',
      strawberryBanana: 'Тәтті құлпынай мен піскен банан пюресінен жасалған сергітетін сусын. Хош иісті жалбыз бен газдалған су қосылады.',
      grapefruitPearTea: 'Грейпфрут пен алмұрт пюресі, жасыл жапырақты шай мен розмарин қосылған хош иісті жылытатын сусын.',
      banoffeePieLatte: 'Табиғи банан негізі, сүзбе қалпақшасы және сүт қосылған нәзік кофе сусыны.'
    }
  },
  kz: {
    categories: {
      hotDrinks: 'ЫСТЫҚ СУСЫНДАР',
      coldDrinks: 'САЛҚЫН СУСЫНДАР',
      seasonal: 'МАУСЫМДЫҚ МӘЗIP',
      coffee: 'Классика',
      signatureCoffee: 'Авторлық кофе (М)',
      alternativeCoffee: 'Альтернативті кофе',
      authorTea: 'Авторлық шай',
      leafTea: 'Жапырақты шай (L)',
      hotDrink: 'Ыстық сусын',
      icedTea: 'Мұзды шай (L)',
      coldDrink: 'Салқындататын сусындар (L)',
      lemonade: 'Лимонад (L)',
      cocktail: 'Коктейль (L)',
      espressoTonic: 'Эспрессо тоник (L)',
      fresh: 'Фреш (L)',
      smoothie: 'Смузи (L)',
      bumble: 'Бамбл (L)',
      additional: 'Қосымша'
    },
    items: {
      espresso: 'Эспрессо',
      americano: 'Американо',
      cappuccino: 'Капучино',
      latte: 'Латте',
      flatWhite: 'Флэт Уайт',
      moccaccino: 'Моккачино голд',
      rafPistachioTangerine: 'Раф пісте-таңқурай',
      rafWalnutCaramel: 'Раф орео',
      goldenLatte: 'Моккачино голд',
      icelandicLatte: 'Испандық латте',
      blueLatte: 'Мандарин кофесі',
      dripCoffee: 'Дрип кофе',
      batch: 'Батч',
      v60: 'Фильтр',
      aeropress: 'Аэропресс',
      karakTea: 'Қарак шай',
      seaBuckthorn: 'Шырғанақ-маракуйя',
      gingerLemonHoney: 'Таңқурай-зімбір',
      raspberryMint: 'Тары шай',
      assam: 'Ассам',
      earlGrey: 'Ағылшын таңғы ас',
      sencha: 'Улун',
      jasmine: 'Ройбуш',
      cocoa: 'Какао',
      hotChocolate: 'Ыстық шоколад',
      matchaLatte: 'Матча латте',
      hotNutella: 'Ыстық Нутелла',
      syrup: '+ Сироп',
      plantMilk: '+ Баламалы сүт',
      mangoPassion: 'Айс ти - Манго-маракуйя',
      raspberryStrawberryLime: 'Айс-ти - Таңкурай/Құлпынай лайм',
      cherryPear: 'Лимонад - Ананас-қымыздық',
      icedAmericano: 'Айс Американо',
      icedLatteCappuccino: 'Айс Латте / Капучино',
      icedSpanishLatte: 'Айс Испандық латте',
      icedMatcha: 'Айс Матча',
      frappeBenvito: 'Фраппучино Белвита',
      peachAlmond: 'Фраппе Матча',
      appleKiwi: 'Эспрессо / Матча тоник',
      pineappleBanana: 'Бамбл',
      cherry: 'Шие',
      duchess: 'Дюшес',
      nutellaBanana: 'Нутелла банан',
      kitkat: 'Кит-Кат',
      citrus: 'Цитрус',
      sakura: 'Сакура',
      orange: 'Апельсин',
      apple: 'Таңкурай-алма',
      bananaRaspberry: 'Ананас-манго',
      pineappleMango: 'Ананас-манго',
      greenSmoothie: 'Жасыл смузи',
      proteinSmoothie: 'Протеинді',
      cherryPeachOrange: 'Шие, Шабдалы, Апельсин',
      decaf: '+ Кофеинсіз',
      alternativeMilk: '+ Баламалы сүт',
      cottageCream: '+ Ірімшік көбігі',
      lactoseFree: '+ Лактозасыз'
    },
    descriptions: {
      icedMatcha: '(шабдалы, манго, құлпынай)',
      dateSmoothie: 'Табиғи патша құрма мен өрікті сүт негізіндегі қанық және нәрлі сусын.',
      strawberryBanana: 'Тәтті құлпынай мен піскен банан пюресінен жасалған сергітетін сусын. Хош иісті жалбыз бен газдалған су қосылады.',
      grapefruitPearTea: 'Грейпфрут пен алмұрт пюресі, жасыл жапырақты шай мен розмарин қосылған хош иісті жылытатын сусын.',
      banoffeePieLatte: 'Табиғи банан негізі, сүзбе қалпақшасы және сүт қосылған нәзік кофе сусыны.'
    }
  },
  en: {
    categories: {
      hotDrinks: 'Hot Drinks',
      coldDrinks: 'Cold Drinks',
      seasonal: 'Seasonal Menu',
      coffee: 'Coffee',
      signatureCoffee: 'Signature Coffee',
      alternativeCoffee: 'Alternative Coffee',
      authorTea: 'Signature Tea',
      leafTea: 'Leaf Tea (L)',
      hotDrink: 'Hot Drink',
      icedTea: 'Iced Tea (L)',
      coldDrink: 'Cold Drink (L)',
      lemonade: 'Lemonade (L)',
      cocktail: 'Cocktail (L)',
      espressoTonic: 'Espresso Tonic (L)',
      fresh: 'Fresh (L)',
      smoothie: 'Smoothie (L)',
      bumble: 'Bumble (L)',
      additional: 'Additional'
    },
    items: {
      espresso: 'Espresso',
      americano: 'Americano',
      cappuccino: 'Cappuccino',
      latte: 'Latte',
      flatWhite: 'Flat White',
      moccaccino: 'Moccaccino',
      rafPistachioTangerine: 'Raf Pistachio-Tangerine',
      rafWalnutCaramel: 'Raf Walnut-Caramel',
      goldenLatte: 'Golden Latte',
      icelandicLatte: 'Icelandic Latte',
      blueLatte: 'Blue Latte',
      dripCoffee: 'Drip Coffee',
      batch: 'Batch',
      v60: 'V60',
      aeropress: 'Aeropress',
      karakTea: 'Karak Tea',
      seaBuckthorn: 'Sea Buckthorn-Passion Fruit',
      gingerLemonHoney: 'Ginger-Lemon-Honey',
      raspberryMint: 'Raspberry-Mint',
      assam: 'Assam',
      earlGrey: 'Earl Grey',
      sencha: 'Sencha',
      jasmine: 'Jasmine',
      cocoa: 'Cocoa',
      hotChocolate: 'Hot Chocolate',
      matchaLatte: 'Matcha Latte',
      hotNutella: 'Hot Nutella',
      syrup: '+ Syrup',
      plantMilk: '+ Plant Milk',
      mangoPassion: 'Mango-Passion Fruit',
      raspberryStrawberryLime: 'Raspberry / Strawberry Lime',
      cherryPear: 'Cherry Pear',
      icedAmericano: 'Iced Americano',
      icedLatteCappuccino: 'Iced Latte / Cappuccino',
      icedSpanishLatte: 'Iced Spanish Latte',
      icedMatcha: 'Iced Matcha',
      frappeBenvito: 'Frappe Benvito',
      peachAlmond: 'Peach-Almond',
      appleKiwi: 'Apple-Kiwi',
      pineappleBanana: 'Pineapple-Banana',
      cherry: 'Cherry',
      duchess: 'Duchess',
      nutellaBanana: 'Nutella Banana',
      kitkat: 'Kit Kat',
      citrus: 'Citrus',
      sakura: 'Sakura',
      orange: 'Orange',
      apple: 'Apple',
      bananaRaspberry: 'Banana-Raspberry',
      pineappleMango: 'Pineapple-Mango',
      greenSmoothie: 'Green Smoothie',
      proteinSmoothie: 'Protein Smoothie',
      cherryPeachOrange: 'Cherry, Peach, Orange',
      decaf: '+ Decaf',
      alternativeMilk: '+ Alternative Milk',
      cottageCream: '+ Cottage Cream',
      lactoseFree: '+ Lactose Free'
    },
    descriptions: {
      icedMatcha: '(peach, mango, strawberry)',
      dateSmoothie: 'Rich and nutritious milk-based drink with natural royal dates and dried apricots.',
      strawberryBanana: 'Refreshing drink with sweet strawberry and ripe banana puree. Complemented with aromatic mint and sparkling water.',
      grapefruitPearTea: 'Aromatic warming drink with grapefruit and pear puree, green leaf tea and rosemary.',
      banoffeePieLatte: 'Delicate coffee drink with natural banana base, cottage cheese cap and milk.'
    }
  }
}; 