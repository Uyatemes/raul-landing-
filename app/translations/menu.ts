interface BreakfastItem {
  name: string;
  description: string;
}

interface SeasonalItem {
  name: string;
  description: string;
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
    lemonadeAppleCabbage: string;
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
  breakfasts: {
    ricePorridge: BreakfastItem;
    oatmeal: BreakfastItem;
    syrniki: BreakfastItem;
    hashBrownBreakfast: BreakfastItem;
    bavarianBreakfast: BreakfastItem;
  };
  breakfastsSchedule: string;
  iftarSchedule: string;
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
      blueLatte: 'Банан Латте с шапкой',
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
      lemonadeAppleCabbage: 'Лимонад - Яблоко капуста',
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
    },
    breakfasts: {
      ricePorridge: { name: 'Рисовая каша', description: 'Нежная сливочная каша с бананом, свежими ягодами, грецкими орехами и семенами чиа. Идеальный тёплый завтрак для спокойного утра.' },
      oatmeal: { name: 'Овсяная каша', description: 'Классическая нежная овсянка на молоке с сливочным маслом. По желанию дополняется сметаной, свежими ягодами, жареным бананом, орехами и семенами чиа.' },
      syrniki: { name: 'Сырники', description: 'Нежные творожные сырники с золотистой корочкой, подаются горячими с соусом, свежими ягодами. Идеальный завтрак или десерт к кофе.' },
      hashBrownBreakfast: { name: 'Завтрак Хашбраун', description: 'Хрустящие картофельные хашбрауны, нежный сливочный скрембл и слабосоленая сёмга. Подаётся с крем-чизом с авокадо, огурцом и укропом.' },
      bavarianBreakfast: { name: 'Баварский завтрак', description: 'Сытный завтрак с охотничьими колбасками, глазуньей из двух яиц, тёплой фасолью, хрустящими тостами, маринованными огурцами и с фирменным соусом.' }
    },
    breakfastsSchedule: 'Завтраки с 8:00 до 12:00',
    iftarSchedule: 'Меню для Ифтара: начиная со времени Магриба — до 23:30',
    iftar: {
      redLentilCreamSoup: { name: 'Крем-суп из красной чечевицы', description: 'Нежный крем-суп с пряными нотами и лёгкой кислинкой лимона. Сытный и согревающий.' },
      mushroomCreamSoup: { name: 'Крем-суп из шампиньонов', description: 'Ароматный грибной крем-суп со сливочной текстурой и мягким вкусом.' },
      fettuccineCreamSauce: { name: 'Фетучини в сливочном соусе', description: 'Фетучини в нежном сливочном соусе с насыщенным, сбалансированным вкусом.' },
      classicLasagnaMeatRagout: { name: 'Классическая лазанья с мясным рагу', description: 'Слоёная лазанья с сочным мясным рагу, соусом бешамель и тягучим сыром.' }
    },
    seasonal: {
      dateSmoothie: { name: 'Смузи Финик', description: 'Нежный сливочный смузи с мягкой сладостью фиников и солнечной курагой. Бархатная текстура, лёгкие карамельные оттенки и тёплое послевкусие — как первый тёплый день весны.' },
      pomegranateLimeTea: { name: 'Чай Гранат-лайм', description: 'Ароматный чёрный чай с сочным гранатом и бодрящим лаймом. Свежесть розмарина добавляет зелёную весеннюю нотку и лёгкую прохладу в каждом глотке.' },
      jasmineGrapeIcedTea: { name: 'Айс ти Жасмин-виноград', description: 'Цветочный жасминовый айс ти с нежным виноградом и спелым персиком. Лёгкий, освежающий и гармоничный — словно прогулка по цветущему саду.' },
      masalaTea: { name: 'Чай Масала', description: 'Пряный индийский напиток из чёрного чая с молоком, сахаром и специями. Обладает насыщенным вкусом и согревающим ароматом.' },
      pineappleBananaLemonade: { name: 'Лимонад Ананас-банан', description: 'Яркий лимонад с тропическим ананасом и сладким бананом. Освежающий, сочный и солнечный — как тёплый ветер после долгой зимы.' },
      oreoCacaoCheeseFoam: { name: 'Какао Орео с шапкой', description: 'Насыщенное шоколадное какао с нежной сырной пенкой и кусочками Орео. Сладкое весеннее настроение в каждом глотке — мягко, сливочно и по-десертному нежно.' }
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
      espresso: 'Эспрессо',
      americano: 'Американо',
      cappuccino: 'Капучино',
      latte: 'Латте',
      flatWhite: 'Флэт Уайт',
      moccaccino: 'Моккачино',
      rafPistachioTangerine: 'Раф пісте-таңқурай',
      rafWalnutCaramel: 'Раф орео',
      goldenLatte: 'Моккачино',
      icelandicLatte: 'Испандық латте',
      blueLatte: 'Банан көбігімен Латте',
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
      peachAlmond: 'Фраппе матча арахис',
      appleKiwi: 'Эспрессо / Матча тоник',
      pineappleBanana: 'Бамбл',
      lemonadeAppleCabbage: 'Лимонад - Алма-қырыққабат',
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
    },
    breakfasts: {
      ricePorridge: { name: 'Күріш ботқасы', description: 'Сары майлы, нәзік күріш ботқасы. Бананмен, балғын жидектермен, грек жаңғағымен және чиа дәндерімен ұсынылады. Сабырлы таңға арналған мінсіз жылы таңғы ас.' },
      oatmeal: { name: 'Сұлы ботқасы', description: 'Сүтке дайындалған, сары май қосылған классикалық нәзік сұлы ботқасы. Жидектер, қуырылған банан, жаңғақтар және чиа дәндері қосылады.' },
      syrniki: { name: 'Ірімшік бәліштері', description: 'Алтын түсті қыртысы бар нәзік ірімшік бәліштері. Ыстық күйде йогуртпен және жидектермен ұсынылады. Кофеге арналған мінсіз таңғы ас, немесе десерт.' },
      hashBrownBreakfast: { name: 'Хашбраун таңғы асы', description: 'Қытырлақ картоп хашбраундары, нәзік әрі кілегейлі скрэмбл және сәл тұздалған ақсерке балық. Авокадо қосылған крем-чиз, қияр және қымыздықпен бірге ұсынылады.' },
      bavarianBreakfast: { name: 'Бавариялық таңғы ас', description: 'Аңшылық шұжықтары, екі жұмыртқадан жасалған глазунья, жылы бұршақ, қытырлақ тосттар және маринадталған қиярлар. Фирмалық соус қосылған тойымды таңғы ас.' }
    },
    breakfastsSchedule: 'Таңғы ас 8:00–12:00',
    iftarSchedule: 'Ауызшашар мәзірі: ақшам уақытынан бастап — 23:30-ға дейін.',
    iftar: {
      redLentilCreamSoup: { name: 'Қызыл жасымық крем-сорпасы', description: 'Дәмдеуіштердің хош иісі мен лимонның жеңіл қышқылдығы бар нәзік крем-сорпа. Тойымды әрі жылытатын тағам.' },
      mushroomCreamSoup: { name: 'Шампиньон крем-сорпасы', description: 'Кілегейлі құрылымды және жұмсақ дәмді, хош иісті саңырауқұлақ крем-сорпасы.' },
      fettuccineCreamSauce: { name: 'Кілегейлі тұздықтағы фетучини', description: 'Нәзік кілегейлі тұздықтағы, қанық әрі үйлесімді дәмді фетучини.' },
      classicLasagnaMeatRagout: { name: 'Ет рагуі қосылған классикалық лазанья', description: 'Шырынды ет рагуі, бешамель тұздығы және созылмалы ірімшік қосылған қабатты лазанья.' }
    },
    seasonal: {
      dateSmoothie: { name: 'Құрма смузиі', description: 'Құрманың жұмсақ тәттілігі мен күндей жарқыраған өрік қағы қосылған нәзік кілегейлі смузи. Барқыттай құрылым, жеңіл қарамель реңктері мен көктемнің алғашқы жылы күніндей жылы дәм.' },
      pomegranateLimeTea: { name: 'Анар-лайм шайы', description: 'Шырынды анар мен сергітетін лайм қосылған хош иісті қара шай. Розмарин балғындығы әр жұтымға көктемгі жасыл реңк пен жеңіл салқындық сыйлайды.' },
      jasmineGrapeIcedTea: { name: 'Жасмин-жүзім айс-тиі', description: 'Нәзік жүзім мен піскен шабдалы қосылған гүлді жасмин айс-тиі. Гүлдеген бақтағы серуендей жеңіл, сергітетін әрі үйлесімді сусын.' },
      masalaTea: { name: 'Масала шайы', description: 'Қара шай, сүт, қант және дәмдеуіштерден дайындалған үндінің хош иісті сусыны. Қанық дәм мен жылытатын хош иіске ие.' },
      pineappleBananaLemonade: { name: 'Ананас-банан лимонады', description: 'Тропикалық ананас пен тәтті банан қосылған жарқын лимонад. Сергітетін, шырынды әрі шуақты – ұзақ қыстан кейінгі жылы желдей асер береді.' },
      oreoCacaoCheeseFoam: { name: 'Ірімшік көбігі бар Орео какаосы', description: 'Қанық шоколадты какао, назік ірімшік көбігі және Оreо кесектері. Әр жұтымдағы көктемгі тәтті көңіл-күй – жұмсақ, кілегейлі әрі десерттей назік.' }
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
      blueLatte: 'Banana Latte with cap',
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
      lemonadeAppleCabbage: 'Lemonade - Apple cabbage',
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
    },
    breakfasts: {
      ricePorridge: { name: 'Rice Porridge', description: 'Creamy rice porridge with banana, fresh berries, walnuts and chia seeds. A perfect warm breakfast for a calm morning.' },
      oatmeal: { name: 'Oatmeal', description: 'Classic creamy oatmeal with milk and butter. Topped with berries, fried banana, nuts and chia seeds.' },
      syrniki: { name: 'Syrniki', description: 'Tender cottage cheese pancakes with a golden crust, served hot with yogurt and fresh berries. An ideal breakfast with coffee or dessert.' },
      hashBrownBreakfast: { name: 'Hash Brown Breakfast', description: 'Crispy potato hash browns, creamy scrambled eggs and lightly salted salmon. Served with avocado cream cheese, cucumber and dill.' },
      bavarianBreakfast: { name: 'Bavarian Breakfast', description: 'Hearty breakfast with hunter sausages, two fried eggs, warm beans, crispy toast, pickled cucumbers and signature sauce.' }
    },
    breakfastsSchedule: 'Breakfasts 8:00–12:00',
    iftarSchedule: 'Iftar menu: from Maghrib time — until 23:30',
    iftar: {
      redLentilCreamSoup: { name: 'Red Lentil Cream Soup', description: 'Tender cream soup with spicy notes and a slight lemon tartness. Hearty and warming.' },
      mushroomCreamSoup: { name: 'Mushroom Cream Soup', description: 'Aromatic mushroom cream soup with a creamy texture and mild taste.' },
      fettuccineCreamSauce: { name: 'Fettuccine in Cream Sauce', description: 'Fettuccine in a delicate cream sauce with a rich, balanced taste.' },
      classicLasagnaMeatRagout: { name: 'Classic Lasagna with Meat Ragout', description: 'Layered lasagna with juicy meat ragout, béchamel sauce and stringy cheese.' }
    },
    seasonal: {
      dateSmoothie: { name: 'Date Smoothie', description: 'Gentle creamy smoothie with the soft sweetness of dates and sunny apricots. Velvety texture, light caramel notes and a warm aftertaste – like the first warm day of spring.' },
      pomegranateLimeTea: { name: 'Pomegranate-Lime Tea', description: 'Aromatic black tea with juicy pomegranate and invigorating lime. The freshness of rosemary adds a green spring note and light coolness in every sip.' },
      jasmineGrapeIcedTea: { name: 'Jasmine-Grape Iced Tea', description: 'Floral jasmine iced tea with delicate grapes and ripe peaches. Light, refreshing and harmonious – like a stroll through a blossoming garden.' },
      masalaTea: { name: 'Masala Tea', description: 'Spicy Indian drink made from black tea with milk, sugar and spices. Has a rich taste and warming aroma.' },
      pineappleBananaLemonade: { name: 'Pineapple-Banana Lemonade', description: 'Bright lemonade with tropical pineapple and sweet banana. Refreshing, juicy and sunny – like a warm wind after a long winter.' },
      oreoCacaoCheeseFoam: { name: 'Oreo Cacao with Cheese Foam', description: 'Rich chocolate cacao with delicate cheese foam and Oreo pieces. Sweet spring mood in every sip – soft, creamy and dessert-like delicate.' }
    }
  }
}; 