interface BreakfastItem {
  name: string;
  description: string;
  price: number;
}

interface SeasonalItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuItem {
  name: string;
  price: number | number[];
  sizes?: string[]; // массив размеров S, M, L или ['-'], длина совпадает с количеством цен
}

interface MenuTranslations {
  categories: {
    hotDrinks: string;
    coldDrinks: string;
    seasonal: string;
    breakfasts: string;
    iftar: string;
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
    espresso: MenuItem;
    americano: MenuItem;
    cappuccino: MenuItem;
    latte: MenuItem;
    flatWhite: MenuItem;
    moccaccino: MenuItem;
    rafPistachioTangerine: MenuItem;
    rafWalnutCaramel: MenuItem;
    goldenLatte: MenuItem;
    icelandicLatte: MenuItem;
    blueLatte: MenuItem;
    dripCoffee: MenuItem;
    batch: MenuItem;
    v60: MenuItem;
    aeropress: MenuItem;
    karakTea: MenuItem;
    seaBuckthorn: MenuItem;
    gingerLemonHoney: MenuItem;
    raspberryMint: MenuItem;
    assam: MenuItem;
    earlGrey: MenuItem;
    sencha: MenuItem;
    jasmine: MenuItem;
    cocoa: MenuItem;
    hotChocolate: MenuItem;
    matchaLatte: MenuItem;
    hotNutella: MenuItem;
    syrup: MenuItem;
    plantMilk: MenuItem;
    mangoPassion: MenuItem;
    raspberryStrawberryLime: MenuItem;
    cherryPear: MenuItem;
    icedAmericano: MenuItem;
    icedLatteCappuccino: MenuItem;
    icedSpanishLatte: MenuItem;
    icedMatcha: MenuItem;
    frappeBenvito: MenuItem;
    peachAlmond: MenuItem;
    appleKiwi: MenuItem;
    pineappleBanana: MenuItem;
    lemonadeAppleCabbage: MenuItem;
    cherry: MenuItem;
    duchess: MenuItem;
    nutellaBanana: MenuItem;
    kitkat: MenuItem;
    citrus: MenuItem;
    sakura: MenuItem;
    orange: MenuItem;
    apple: MenuItem;
    bananaRaspberry: MenuItem;
    pineappleMango: MenuItem;
    greenSmoothie: MenuItem;
    proteinSmoothie: MenuItem;
    cherryPeachOrange: MenuItem;
    decaf: MenuItem;
    alternativeMilk: MenuItem;
    cottageCream: MenuItem;
    lactoseFree: MenuItem;
  };
  descriptions: {
    icedMatcha: string;
    dateSmoothie: string;
    strawberryBanana: string;
    grapefruitPearTea: string;
    banoffeePieLatte: string;
  };
  breakfasts: {
    ricePorridge: BreakfastItem;
    oatmeal: BreakfastItem;
    syrniki: BreakfastItem;
    hashBrownBreakfast: BreakfastItem;
    bavarianBreakfast: BreakfastItem;
  };
  breakfastsSchedule: string;
  iftarSchedule: string;
  iftarPromoBefore: string;
  iftarPromoLink: string;
  iftarPromoAfter: string;
  iftar: {
    redLentilCreamSoup: BreakfastItem;
    mushroomCreamSoup: BreakfastItem;
    fettuccineCreamSauce: BreakfastItem;
    classicLasagnaMeatRagout: BreakfastItem;
  };
  seasonal: {
    dateSmoothie: SeasonalItem;
    pomegranateLimeTea: SeasonalItem;
    jasmineGrapeIcedTea: SeasonalItem;
    masalaTea: SeasonalItem;
    pineappleBananaLemonade: SeasonalItem;
    oreoCacaoCheeseFoam: SeasonalItem;
  };
}

export const menuTranslations: Record<'ru' | 'kz' | 'en', MenuTranslations> = {
  ru: {
    categories: {
      hotDrinks: 'Горячие напитки',
      coldDrinks: 'Холодные напитки',
      seasonal: 'Сезонное меню',
      breakfasts: 'Завтраки',
      iftar: 'Ифтар меню 🌙',
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
      espresso: { name: 'Эспрессо', price: 1000, sizes: ['-'] },
      americano: { name: 'Американо', price: [1300, 1500], sizes: ['S', 'M'] },
      cappuccino: { name: 'Капучино', price: [1500, 1700, 1900], sizes: ['S', 'M', 'L'] },
      latte: { name: 'Латте', price: [1700, 1900], sizes: ['M', 'L'] },
      flatWhite: { name: 'Флэт уайт', price: 1700, sizes: ['S'] },
      cocoa: { name: 'Какао', price: 1500, sizes: ['M'] },
      moccaccino: { name: 'Моккачино', price: 2300 },
      rafPistachioTangerine: { name: 'Раф фисташка-мандарин', price: 2100 },
      rafWalnutCaramel: { name: 'Раф грек жаңғағы-карамель', price: 2100 },
      goldenLatte: { name: 'Золотой латте', price: 2800 },
      icelandicLatte: { name: 'Исландиялық латте', price: 2000 },
      blueLatte: { name: 'Банан Латте с шапкой', price: 2300 },
      dripCoffee: { name: 'Дрип кофе', price: 2800, sizes: ['M'] },
      batch: { name: 'Batch', price: 2800 },
      v60: { name: 'V60', price: 2800 },
      aeropress: { name: 'Аэропресс', price: 2800 },
      karakTea: { name: 'Карак чай', price: 2000, sizes: ['M'] },
      seaBuckthorn: { name: 'Шырғанақ-Маракуйя', price: 2100, sizes: ['L'] },
      gingerLemonHoney: { name: 'Имбирь-Лимон-Бал', price: 2100, sizes: ['L'] },
      raspberryMint: { name: 'Таңқурай-Жалбыз', price: 2100, sizes: ['L'] },
      assam: { name: 'Ассам', price: 1500 },
      earlGrey: { name: 'Эрл Грей', price: 1500 },
      sencha: { name: 'Сенча', price: 1500 },
      jasmine: { name: 'Жасмин', price: 1500 },
      hotChocolate: { name: 'Горячий шоколад', price: 1500, sizes: ['S'] },
      matchaLatte: { name: 'Матча Латте', price: 2100, sizes: ['M'] },
      hotNutella: { name: 'Горячий Нутелла', price: 1500 },
      syrup: { name: '+ Шәрбат', price: 300 },
      plantMilk: { name: '+ Өсімдік сүті', price: 600 },
      mangoPassion: { name: 'Манго-Маракуйя', price: 2100 },
      raspberryStrawberryLime: { name: 'Таңқурай / Құлпынай лайм', price: 2100 },
      cherryPear: { name: 'Шие алмұрт', price: 2100 },
      icedAmericano: { name: 'Мұзды Американо', price: 1700 },
      icedLatteCappuccino: { name: 'Мұзды Латте / Капучино', price: 1900 },
      icedSpanishLatte: { name: 'Мұзды Испан латте', price: 2500 },
      icedMatcha: { name: 'Мұзды Матча', price: 2700 },
      frappeBenvito: { name: 'Фраппе Benvito', price: 2800 },
      peachAlmond: { name: 'Персик-Миндаль', price: 2900 },
      appleKiwi: { name: 'Алма-Киви', price: 2100 },
      pineappleBanana: { name: 'Ананас-Банан', price: 2200 },
      lemonadeAppleCabbage: { name: 'Лимонад - Яблоко капуста', price: 2100 },
      cherry: { name: 'Шие', price: 2100 },
      duchess: { name: 'Дюшес', price: 2100 },
      nutellaBanana: { name: 'Нутелла банан', price: 2300 },
      kitkat: { name: 'Кит-Кат', price: 2300 },
      citrus: { name: 'Цитрус', price: 2100 },
      sakura: { name: 'Сакура', price: 2100 },
      orange: { name: 'Апельсин', price: 3100 },
      apple: { name: 'Алма', price: 3100 },
      bananaRaspberry: { name: 'Банан-таңқурай', price: 3100 },
      pineappleMango: { name: 'Ананас-манго', price: 3100 },
      greenSmoothie: { name: 'Жасыл смузи', price: 2900 },
      proteinSmoothie: { name: 'Протеинді смузи', price: 3400 },
      cherryPeachOrange: { name: 'Шие, Шабдалы, Апельсин', price: 3100 },
      decaf: { name: '+ Кофеинсіз', price: 600 },
      alternativeMilk: { name: '+ Балама сүт', price: 600 },
      cottageCream: { name: '+ Сүзбе кремі', price: 300 },
      lactoseFree: { name: '+ Лактозасыз', price: 500 }
    },
    descriptions: {
      icedMatcha: '(шабдалы, манго, құлпынай)',
      dateSmoothie: 'Табиғи патша құрма мен өрікті сүт негізіндегі қанық және нәрлі сусын.',
      strawberryBanana: 'Тәтті құлпынай мен піскен банан пюресінен жасалған сергітетін сусын. Хош иісті жалбыз бен газдалған су қосылады.',
      grapefruitPearTea: 'Грейпфрут пен алмұрт пюресі, жасыл жапырақты шай мен розмарин қосылған хош иісті жылытатын сусын.',
      banoffeePieLatte: 'Табиғи банан негізі, сүзбе қалпақшасы және сүт қосылған нәзік кофе сусыны.'
    },
    breakfasts: {
      ricePorridge: { name: 'Рисовая каша', description: 'Нежная сливочная каша с бананом, свежими ягодами, грецкими орехами и семенами чиа. Идеальный тёплый завтрак для спокойного утра.', price: 2800 },
      oatmeal: { name: 'Овсяная каша', description: 'Классическая нежная овсянка на молоке с сливочным маслом. По желанию дополняется сметаной, свежими ягодами, жареным бананом, орехами и семенами чиа.', price: 2600 },
      syrniki: { name: 'Сырники', description: 'Нежные творожные сырники с золотистой корочкой, подаются горячими с соусом, свежими ягодами. Идеальный завтрак или десерт к кофе.', price: 3100 },
      hashBrownBreakfast: { name: 'Завтрак Хашбраун', description: 'Хрустящие картофельные хашбрауны, нежный сливочный скрембл и слабосоленая сёмга. Подаётся с крем-чизом с авокадо, огурцом и укропом.', price: 4900 },
      bavarianBreakfast: { name: 'Баварский завтрак', description: 'Сытный завтрак с охотничьими колбасками, глазуньей из двух яиц, тёплой фасолью, хрустящими тостами, маринованными огурцами и с фирменным соусом.', price: 4400 }
    },
    breakfastsSchedule: 'Завтраки с 8:00 до 12:00',
    iftarSchedule: 'Меню для Ифтара: начиная со времени Магриба — до 23:30',
    iftarPromoBefore: 'К заказу из Ифтар-меню — напиток из категории «',
    iftarPromoLink: 'Классика',
    iftarPromoAfter: '» в подарок.',
    iftar: {
      redLentilCreamSoup: { name: 'Крем-суп из красной чечевицы', description: 'Нежный крем-суп с пряными нотами и лёгкой кислинкой лимона. Сытный и согревающий.', price: 2800 },
      mushroomCreamSoup: { name: 'Крем-суп из шампиньонов', description: 'Ароматный грибной крем-суп со сливочной текстурой и мягким вкусом.', price: 2600 },
      fettuccineCreamSauce: { name: 'Фетучини в сливочном соусе', description: 'Фетучини в нежном сливочном соусе с насыщенным, сбалансированным вкусом.', price: 4400 },
      classicLasagnaMeatRagout: { name: 'Классическая лазанья с мясным рагу', description: 'Слоёная лазанья с сочным мясным рагу, соусом бешамель и тягучим сыром.', price: 4900 }
    },
    seasonal: {
      dateSmoothie: { name: 'Смузи Финик', description: 'Нежный сливочный смузи с мягкой сладостью фиников и солнечной курагой. Бархатная текстура, лёгкие карамельные оттенки и тёплое послевкусие — как первый тёплый день весны.', price: 3200 },
      pomegranateLimeTea: { name: 'Чай Гранат-лайм', description: 'Ароматный чёрный чай с сочным гранатом и бодрящим лаймом. Свежесть розмарина добавляет зелёную весеннюю нотку и лёгкую прохладу в каждом глотке.', price: 2300 },
      jasmineGrapeIcedTea: { name: 'Айс ти Жасмин-виноград', description: 'Цветочный жасминовый айс ти с нежным виноградом и спелым персиком. Лёгкий, освежающий и гармоничный — словно прогулка по цветущему саду.', price: 2300 },
      masalaTea: { name: 'Чай Масала', description: 'Пряный индийский напиток из чёрного чая с молоком, сахаром и специями. Обладает насыщенным вкусом и согревающим ароматом.', price: 2100 },
      pineappleBananaLemonade: { name: 'Лимонад Ананас-банан', description: 'Яркий лимонад с тропическим ананасом и сладким бананом. Освежающий, сочный и солнечный — как тёплый ветер после долгой зимы.', price: 2300 },
      oreoCacaoCheeseFoam: { name: 'Какао Орео с шапкой', description: 'Насыщенное шоколадное какао с нежной сырной пенкой и кусочками Орео. Сладкое весеннее настроение в каждом глотке — мягко, сливочно и по-десертному нежно.', price: 2300 }
    }
  },
  kz: {
    categories: {
      hotDrinks: 'ЫСТЫҚ СУСЫНДАР',
      coldDrinks: 'САЛҚЫН СУСЫНДАР',
      seasonal: 'МАУСЫМДЫҚ МӘЗIP',
      breakfasts: 'ТАҢҒЫ АС',
      iftar: 'АУЫЗАШАР МӘЗІРІ 🌙',
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
      espresso: { name: 'Эспрессо', price: 1000, sizes: ['-'] },
      americano: { name: 'Американо', price: [1300, 1500], sizes: ['S', 'M'] },
      cappuccino: { name: 'Капучино', price: [1500, 1700, 1900], sizes: ['S', 'M', 'L'] },
      latte: { name: 'Латте', price: [1700, 1900], sizes: ['M', 'L'] },
      flatWhite: { name: 'Флэт Уайт', price: 1700, sizes: ['S'] },
      moccaccino: { name: 'Моккачино', price: 2300 },
      rafPistachioTangerine: { name: 'Раф пісте-таңқурай', price: 2100 },
      rafWalnutCaramel: { name: 'Раф орео', price: 2100 },
      goldenLatte: { name: 'Моккачино', price: 2800 },
      icelandicLatte: { name: 'Испандық латте', price: 2000 },
      blueLatte: { name: 'Банан көбігімен Латте', price: 2300 },
      dripCoffee: { name: 'Дрип кофе', price: 2800, sizes: ['M'] },
      batch: { name: 'Батч', price: 2800 },
      v60: { name: 'Фильтр', price: 2800 },
      aeropress: { name: 'Аэропресс', price: 2800 },
      karakTea: { name: 'Қарак шай', price: 2000, sizes: ['M'] },
      seaBuckthorn: { name: 'Шырғанақ-маракуйя', price: 2100, sizes: ['L'] },
      gingerLemonHoney: { name: 'Таңқурай-зімбір', price: 2100, sizes: ['L'] },
      raspberryMint: { name: 'Тары шай', price: 2100, sizes: ['L'] },
      assam: { name: 'Ассам', price: 1500 },
      earlGrey: { name: 'Ағылшын таңғы ас', price: 1500 },
      sencha: { name: 'Улун', price: 1500 },
      jasmine: { name: 'Ройбуш', price: 1500 },
      cocoa: { name: 'Какао', price: 1500, sizes: ['M'] },
      hotChocolate: { name: 'Ыстық шоколад', price: 1500, sizes: ['S'] },
      matchaLatte: { name: 'Матча латте', price: 2100, sizes: ['M'] },
      hotNutella: { name: 'Ыстық Нутелла', price: 1500 },
      syrup: { name: '+ Сироп', price: 300 },
      plantMilk: { name: '+ Баламалы сүт', price: 600 },
      mangoPassion: { name: 'Айс ти - Манго-маракуйя', price: 2100 },
      raspberryStrawberryLime: { name: 'Айс-ти - Таңкурай/Құлпынай лайм', price: 2100 },
      cherryPear: { name: 'Лимонад - Ананас-қымыздық', price: 2100 },
      icedAmericano: { name: 'Айс Американо', price: 1700 },
      icedLatteCappuccino: { name: 'Айс Латте / Капучино', price: 1900 },
      icedSpanishLatte: { name: 'Айс Испандық латте', price: 2500 },
      icedMatcha: { name: 'Айс Матча', price: 2700 },
      frappeBenvito: { name: 'Фраппучино Белвита', price: 2800 },
      peachAlmond: { name: 'Фраппе матча арахис', price: 2900 },
      appleKiwi: { name: 'Эспрессо / Матча тоник', price: 2100 },
      pineappleBanana: { name: 'Бамбл', price: 2200 },
      lemonadeAppleCabbage: { name: 'Лимонад - Алма-қырыққабат', price: 2100 },
      cherry: { name: 'Шие', price: 2100 },
      duchess: { name: 'Дюшес', price: 2100 },
      nutellaBanana: { name: 'Нутелла банан', price: 2300 },
      kitkat: { name: 'Кит-Кат', price: 2300 },
      citrus: { name: 'Цитрус', price: 2100 },
      sakura: { name: 'Сакура', price: 2100 },
      orange: { name: 'Апельсин', price: 3100 },
      apple: { name: 'Таңкурай-алма', price: 3100 },
      bananaRaspberry: { name: 'Ананас-манго', price: 3100 },
      pineappleMango: { name: 'Ананас-манго', price: 3100 },
      greenSmoothie: { name: 'Жасыл смузи', price: 2900 },
      proteinSmoothie: { name: 'Протеинді', price: 3400 },
      cherryPeachOrange: { name: 'Шие, Шабдалы, Апельсин', price: 3100 },
      decaf: { name: '+ Кофеинсіз', price: 600 },
      alternativeMilk: { name: '+ Баламалы сүт', price: 600 },
      cottageCream: { name: '+ Ірімшік көбігі', price: 300 },
      lactoseFree: { name: '+ Лактозасыз', price: 500 }
    },
    descriptions: {
      icedMatcha: '(шабдалы, манго, құлпынай)',
      dateSmoothie: 'Табиғи патша құрма мен өрікті сүт негізіндегі қанық және нәрлі сусын.',
      strawberryBanana: 'Тәтті құлпынай мен піскен банан пюресінен жасалған сергітетін сусын. Хош иісті жалбыз бен газдалған су қосылады.',
      grapefruitPearTea: 'Грейпфрут пен алмұрт пюресі, жасыл жапырақты шай мен розмарин қосылған хош иісті жылытатын сусын.',
      banoffeePieLatte: 'Табиғи банан негізі, сүзбе қалпақшасы және сүт қосылған нәзік кофе сусыны.'
    },
    breakfasts: {
      ricePorridge: { name: 'Күріш ботқасы', description: 'Сары майлы, нәзік күріш ботқасы. Бананмен, балғын жидектермен, грек жаңғағымен және чиа дәндерімен ұсынылады. Сабырлы таңға арналған мінсіз жылы таңғы ас.', price: 2800 },
      oatmeal: { name: 'Сұлы ботқасы', description: 'Сүтке дайындалған, сары май қосылған классикалық нәзік сұлы ботқасы. Жидектер, қуырылған банан, жаңғақтар және чиа дәндері қосылады.', price: 2600 },
      syrniki: { name: 'Ірімшік бәліштері', description: 'Алтын түсті қыртысы бар нәзік ірімшік бәліштері. Ыстық күйде йогуртпен және жидектермен ұсынылады. Кофеге арналған мінсіз таңғы ас, немесе десерт.', price: 3100 },
      hashBrownBreakfast: { name: 'Хашбраун таңғы асы', description: 'Қытырлақ картоп хашбраундары, нәзік әрі кілегейлі скрэмбл және сәл тұздалған ақсерке балық. Авокадо қосылған крем-чиз, қияр және қымыздықпен бірге ұсынылады.', price: 4900 },
      bavarianBreakfast: { name: 'Бавариялық таңғы ас', description: 'Аңшылық шұжықтары, екі жұмыртқадан жасалған глазунья, жылы бұршақ, қытырлақ тосттар және маринадталған қиярлар. Фирмалық соус қосылған тойымды таңғы ас.', price: 4400 }
    },
    breakfastsSchedule: 'Таңғы ас 8:00–12:00',
    iftarSchedule: 'Ауызшашар мәзірі: ақшам уақытынан бастап — 23:30-ға дейін.',
    iftarPromoBefore: 'Ауызашар мәзірі: Кез келген тағамға «',
    iftarPromoLink: 'Классика',
    iftarPromoAfter: '» сусыны тегін!',
    iftar: {
      redLentilCreamSoup: { name: 'Қызыл жасымық крем-сорпасы', description: 'Дәмдеуіштердің хош иісі мен лимонның жеңіл қышқылдығы бар нәзік крем-сорпа. Тойымды әрі жылытатын тағам.', price: 2800 },
      mushroomCreamSoup: { name: 'Шампиньон крем-сорпасы', description: 'Кілегейлі құрылымды және жұмсақ дәмді, хош иісті саңырауқұлақ крем-сорпасы.', price: 2600 },
      fettuccineCreamSauce: { name: 'Кілегейлі тұздықтағы фетучини', description: 'Нәзік кілегейлі тұздықтағы, қанық әрі үйлесімді дәмді фетучини.', price: 4400 },
      classicLasagnaMeatRagout: { name: 'Ет рагуі қосылған классикалық лазанья', description: 'Шырынды ет рагуі, бешамель тұздығы және созылмалы ірімшік қосылған қабатты лазанья.', price: 4900 }
    },
    seasonal: {
      dateSmoothie: { name: 'Құрма смузиі', description: 'Құрманың жұмсақ тәттілігі мен күндей жарқыраған өрік қағы қосылған нәзік кілегейлі смузи. Барқыттай құрылым, жеңіл қарамель реңктері мен көктемнің алғашқы жылы күніндей жылы дәм.', price: 3200 },
      pomegranateLimeTea: { name: 'Анар-лайм шайы', description: 'Шырынды анар мен сергітетін лайм қосылған хош иісті қара шай. Розмарин балғындығы әр жұтымға көктемгі жасыл реңк пен жеңіл салқындық сыйлайды.', price: 2300 },
      jasmineGrapeIcedTea: { name: 'Жасмин-жүзім айс-тиі', description: 'Нәзік жүзім мен піскен шабдалы қосылған гүлді жасмин айс-тиі. Гүлдеген бақтағы серуендей жеңіл, сергітетін әрі үйлесімді сусын.', price: 2300 },
      masalaTea: { name: 'Масала шайы', description: 'Қара шай, сүт, қант және дәмдеуіштерден дайындалған үндінің хош иісті сусыны. Қанық дәм мен жылытатын хош иіске ие.', price: 2100 },
      pineappleBananaLemonade: { name: 'Ананас-банан лимонады', description: 'Тропикалық ананас пен тәтті банан қосылған жарқын лимонад. Сергітетін, шырынды әрі шуақты – ұзақ қыстан кейінгі жылы желдей асер береді.', price: 2300 },
      oreoCacaoCheeseFoam: { name: 'Ірімшік көбігі бар Орео какаосы', description: 'Қанық шоколадты какао, назік ірімшік көбігі және Оreо кесектері. Әр жұтымдағы көктемгі тәтті көңіл-күй – жұмсақ, кілегейлі әрі десерттей назік.', price: 2300 }
    }
  },
  en: {
    categories: {
      hotDrinks: 'Hot Drinks',
      coldDrinks: 'Cold Drinks',
      seasonal: 'Seasonal Menu',
      breakfasts: 'Breakfasts',
      iftar: 'Iftar Menu 🌙',
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
      espresso: { name: 'Espresso', price: 1000, sizes: ['-'] },
      americano: { name: 'Americano', price: [1300, 1500], sizes: ['S', 'M'] },
      cappuccino: { name: 'Cappuccino', price: [1500, 1700, 1900], sizes: ['S', 'M', 'L'] },
      latte: { name: 'Latte', price: [1700, 1900], sizes: ['M', 'L'] },
      flatWhite: { name: 'Flat White', price: 1700, sizes: ['S'] },
      moccaccino: { name: 'Moccaccino', price: 2300 },
      rafPistachioTangerine: { name: 'Raf Pistachio-Tangerine', price: 2100 },
      rafWalnutCaramel: { name: 'Raf Walnut-Caramel', price: 2100 },
      goldenLatte: { name: 'Golden Latte', price: 2800 },
      icelandicLatte: { name: 'Icelandic Latte', price: 2000 },
      blueLatte: { name: 'Banana Latte with cap', price: 2300 },
      dripCoffee: { name: 'Drip Coffee', price: 2800, sizes: ['M'] },
      batch: { name: 'Batch', price: 2800 },
      v60: { name: 'V60', price: 2800 },
      aeropress: { name: 'Aeropress', price: 2800 },
      karakTea: { name: 'Karak Tea', price: 2000, sizes: ['M'] },
      seaBuckthorn: { name: 'Sea Buckthorn-Passion Fruit', price: 2100, sizes: ['L'] },
      gingerLemonHoney: { name: 'Ginger-Lemon-Honey', price: 2100, sizes: ['L'] },
      raspberryMint: { name: 'Raspberry-Mint', price: 2100, sizes: ['L'] },
      assam: { name: 'Assam', price: 1500 },
      earlGrey: { name: 'Earl Grey', price: 1500 },
      sencha: { name: 'Sencha', price: 1500 },
      jasmine: { name: 'Jasmine', price: 1500 },
      cocoa: { name: 'Cocoa', price: 1500, sizes: ['M'] },
      hotChocolate: { name: 'Hot Chocolate', price: 1500, sizes: ['S'] },
      matchaLatte: { name: 'Matcha Latte', price: 2100, sizes: ['M'] },
      hotNutella: { name: 'Hot Nutella', price: 1500 },
      syrup: { name: '+ Syrup', price: 300 },
      plantMilk: { name: '+ Plant Milk', price: 600 },
      mangoPassion: { name: 'Mango-Passion Fruit', price: 2100 },
      raspberryStrawberryLime: { name: 'Raspberry / Strawberry Lime', price: 2100 },
      cherryPear: { name: 'Cherry Pear', price: 2100 },
      icedAmericano: { name: 'Iced Americano', price: 1700 },
      icedLatteCappuccino: { name: 'Iced Latte / Cappuccino', price: 1900 },
      icedSpanishLatte: { name: 'Iced Spanish Latte', price: 2500 },
      icedMatcha: { name: 'Iced Matcha', price: 2700 },
      frappeBenvito: { name: 'Frappe Benvito', price: 2800 },
      peachAlmond: { name: 'Peach-Almond', price: 2900 },
      appleKiwi: { name: 'Apple-Kiwi', price: 2100 },
      pineappleBanana: { name: 'Pineapple-Banana', price: 2200 },
      lemonadeAppleCabbage: { name: 'Lemonade - Apple cabbage', price: 2100 },
      cherry: { name: 'Cherry', price: 2100 },
      duchess: { name: 'Duchess', price: 2100 },
      nutellaBanana: { name: 'Nutella Banana', price: 2300 },
      kitkat: { name: 'Kit Kat', price: 2300 },
      citrus: { name: 'Citrus', price: 2100 },
      sakura: { name: 'Sakura', price: 2100 },
      orange: { name: 'Orange', price: 3100 },
      apple: { name: 'Apple', price: 3100 },
      bananaRaspberry: { name: 'Banana-Raspberry', price: 3100 },
      pineappleMango: { name: 'Pineapple-Mango', price: 3100 },
      greenSmoothie: { name: 'Green Smoothie', price: 2900 },
      proteinSmoothie: { name: 'Protein Smoothie', price: 3400 },
      cherryPeachOrange: { name: 'Cherry, Peach, Orange', price: 3100 },
      decaf: { name: '+ Decaf', price: 600 },
      alternativeMilk: { name: '+ Alternative Milk', price: 600 },
      cottageCream: { name: '+ Cottage Cream', price: 300 },
      lactoseFree: { name: '+ Lactose Free', price: 500 }
    },
    descriptions: {
      icedMatcha: '(peach, mango, strawberry)',
      dateSmoothie: 'Rich and nutritious milk-based drink with natural royal dates and dried apricots.',
      strawberryBanana: 'Refreshing drink with sweet strawberry and ripe banana puree. Complemented with aromatic mint and sparkling water.',
      grapefruitPearTea: 'Aromatic warming drink with grapefruit and pear puree, green leaf tea and rosemary.',
      banoffeePieLatte: 'Delicate coffee drink with natural banana base, cottage cheese cap and milk.'
    },
    breakfasts: {
      ricePorridge: { name: 'Rice Porridge', description: 'Creamy rice porridge with banana, fresh berries, walnuts and chia seeds. A perfect warm breakfast for a calm morning.', price: 2800 },
      oatmeal: { name: 'Oatmeal', description: 'Classic creamy oatmeal with milk and butter. Topped with berries, fried banana, nuts and chia seeds.', price: 2600 },
      syrniki: { name: 'Syrniki', description: 'Tender cottage cheese pancakes with a golden crust, served hot with yogurt and fresh berries. An ideal breakfast with coffee or dessert.', price: 3100 },
      hashBrownBreakfast: { name: 'Hash Brown Breakfast', description: 'Crispy potato hash browns, creamy scrambled eggs and lightly salted salmon. Served with avocado cream cheese, cucumber and dill.', price: 4900 },
      bavarianBreakfast: { name: 'Bavarian Breakfast', description: 'Hearty breakfast with hunter sausages, two fried eggs, warm beans, crispy toast, pickled cucumbers and signature sauce.', price: 4400 }
    },
    breakfastsSchedule: 'Breakfasts 8:00–12:00',
    iftarSchedule: 'Iftar menu: from Maghrib time — until 23:30',
    iftarPromoBefore: 'With any order from Iftar menu — a drink from «',
    iftarPromoLink: 'Classic',
    iftarPromoAfter: '» category for free.',
    iftar: {
      redLentilCreamSoup: { name: 'Red Lentil Cream Soup', description: 'Tender cream soup with spicy notes and a slight lemon tartness. Hearty and warming.', price: 2800 },
      mushroomCreamSoup: { name: 'Mushroom Cream Soup', description: 'Aromatic mushroom cream soup with a creamy texture and mild taste.', price: 2600 },
      fettuccineCreamSauce: { name: 'Fettuccine in Cream Sauce', description: 'Fettuccine in a delicate cream sauce with a rich, balanced taste.', price: 4400 },
      classicLasagnaMeatRagout: { name: 'Classic Lasagna with Meat Ragout', description: 'Layered lasagna with juicy meat ragout, béchamel sauce and stringy cheese.', price: 4900 }
    },
    seasonal: {
      dateSmoothie: { name: 'Date Smoothie', description: 'Gentle creamy smoothie with the soft sweetness of dates and sunny apricots. Velvety texture, light caramel notes and a warm aftertaste – like the first warm day of spring.', price: 3200 },
      pomegranateLimeTea: { name: 'Pomegranate-Lime Tea', description: 'Aromatic black tea with juicy pomegranate and invigorating lime. The freshness of rosemary adds a green spring note and light coolness in every sip.', price: 2300 },
      jasmineGrapeIcedTea: { name: 'Jasmine-Grape Iced Tea', description: 'Floral jasmine iced tea with delicate grapes and ripe peaches. Light, refreshing and harmonious – like a stroll through a blossoming garden.', price: 2300 },
      masalaTea: { name: 'Masala Tea', description: 'Spicy Indian drink made from black tea with milk, sugar and spices. Has a rich taste and warming aroma.', price: 2100 },
      pineappleBananaLemonade: { name: 'Pineapple-Banana Lemonade', description: 'Bright lemonade with tropical pineapple and sweet banana. Refreshing, juicy and sunny – like a warm wind after a long winter.', price: 2300 },
      oreoCacaoCheeseFoam: { name: 'Oreo Cacao with Cheese Foam', description: 'Rich chocolate cacao with delicate cheese foam and Oreo pieces. Sweet spring mood in every sip – soft, creamy and dessert-like delicate.', price: 2300 }
    }
  }
}; 