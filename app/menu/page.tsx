'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { menuTranslations, type MenuItem } from '../translations/menu';

function MenuItemRow({
  item,
  nameExtra,
}: {
  item: MenuItem;
  nameExtra?: React.ReactNode;
}) {
  const prices = Array.isArray(item.price) ? item.price : [item.price];
  const sizes = item.sizes ?? ['-'];
  return (
    <tr className="menu-row">
      <td className="menu-cell">
        <div>{item.name}{nameExtra}</div>
      </td>
      <td className="menu-cell-size">
        {sizes.map((s) => (
          <div key={s} className="menu-cell-size-item">{s}</div>
        ))}
      </td>
      <td className="menu-cell-price">
        {prices.map((p) => (
          <div key={p} className="menu-cell-price-item">{p}</div>
        ))}
      </td>
    </tr>
  );
}

function MenuItemRowNoSize({
  item,
  nameExtra,
}: {
  item: MenuItem;
  nameExtra?: React.ReactNode;
}) {
  const price = Array.isArray(item.price) ? item.price[0] : item.price;
  return (
    <tr className="menu-row">
      <td className="menu-cell">
        <div>{item.name}{nameExtra}</div>
      </td>
      <td className="menu-cell-price">
        <div className="menu-cell-price-item">{price}</div>
      </td>
    </tr>
  );
}

function MenuContent() {
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = menuTranslations[language];
  
  // Get active tab from URL or default to 'hot'
  const tabFromUrl = searchParams.get('tab');
  const validTabs = ['hot', 'cold', 'seasonal', 'breakfasts', 'main'];
  const initialTab = tabFromUrl && validTabs.includes(tabFromUrl) ? tabFromUrl : 'hot';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setMounted(true);
    // Update active tab from URL on mount
    const tab = searchParams.get('tab');
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Scroll to "Классика" when opening with ?tab=hot#menu-classic — раздел полностью в видимой области
  useEffect(() => {
    if (!mounted || activeTab !== 'hot') return;
    if (typeof window !== 'undefined' && window.location.hash === '#menu-classic') {
      const el = document.getElementById('menu-classic');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [mounted, activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Update URL with tab parameter
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="menu-section">
      <div className="menu-content-wrapper">
        <div className="menu-tabs">
          <button
            className={`menu-tab ${activeTab === 'hot' ? 'active' : ''}`}
            onClick={() => handleTabChange('hot')}
          >
            {t.categories.hotDrinks}
          </button>
          <button
            className={`menu-tab ${activeTab === 'cold' ? 'active' : ''}`}
            onClick={() => handleTabChange('cold')}
          >
            {t.categories.coldDrinks}
          </button>
          <button
            className={`menu-tab ${activeTab === 'seasonal' ? 'active' : ''}`}
            onClick={() => handleTabChange('seasonal')}
          >
            {t.categories.seasonal}
          </button>
          <button
            className={`menu-tab ${activeTab === 'breakfasts' ? 'active' : ''}`}
            onClick={() => handleTabChange('breakfasts')}
          >
            {t.categories.breakfasts}
          </button>
          <button
            className={`menu-tab ${activeTab === 'main' ? 'active' : ''}`}
            onClick={() => handleTabChange('main')}
          >
            {t.categories.iftar}
          </button>
        </div>
        <div className={`menu-content ${activeTab === 'hot' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-8">
            <div id="menu-classic" className="menu-category">
              <h2 className="menu-category-title">{t.categories.coffee}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRow
                    item={t.items.espresso}
                    nameExtra={<><br /><span style={{ fontSize: '0.9em', color: '#444' }}>{language === 'kz' ? 'Бразилия, Кения' : language === 'ru' ? 'Бразилия, Кения' : 'Brazil, Kenya'}</span></>}
                  />
                  <MenuItemRow item={t.items.americano} />
                  <MenuItemRow item={t.items.cappuccino} />
                  <MenuItemRow item={t.items.latte} />
                  <MenuItemRow item={t.items.flatWhite} />
                  <MenuItemRow item={t.items.cocoa} />
                  <MenuItemRow item={t.items.hotChocolate} />
                  <MenuItemRow
                    item={t.items.matchaLatte}
                    nameExtra={<><br /><span style={{ fontSize: '0.9em', color: '#444' }}>{language === 'kz' ? 'жасыл, көк' : language === 'ru' ? 'зеленая, голубая' : 'green, blue'}</span></>}
                  />
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.signatureCoffee}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRowNoSize
                    item={t.items.moccaccino}
                    nameExtra={<><span style={{ color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8 }}>NEW</span></>}
                  />
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Испандық латте' : language === 'ru' ? 'Испанский Латте' : 'Spanish Latte'}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2400</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Раф пісте-таңқурай' : language === 'ru' ? 'Раф фисташка-малина' : 'Raf Pistachio-Raspberry'}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <MenuItemRowNoSize
                    item={t.items.blueLatte}
                    nameExtra={<><span style={{ color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8 }}>NEW</span></>}
                  />
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Раф орео' : language === 'ru' ? 'Раф орео' : 'Oreo Raf'}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.alternativeCoffee}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRow item={t.items.dripCoffee} />
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.authorTea}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRow item={t.items.karakTea} />
                  <MenuItemRow item={t.items.seaBuckthorn} />
                  <MenuItemRow item={t.items.raspberryMint} />
                  <MenuItemRow item={t.items.gingerLemonHoney} />
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.leafTea}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRowNoSize
                    item={t.items.earlGrey}
                    nameExtra={<><br /><span style={{ fontSize: '0.9em', color: '#444' }}>{language === 'kz' ? 'қара' : language === 'ru' ? 'черный' : 'black'}</span></>}
                  />
                  <MenuItemRowNoSize
                    item={t.items.sencha}
                    nameExtra={<><br /><span style={{ fontSize: '0.9em', color: '#444' }}>{language === 'kz' ? 'жасыл' : language === 'ru' ? 'зеленый' : 'green'}</span></>}
                  />
                  <MenuItemRowNoSize
                    item={t.items.jasmine}
                    nameExtra={<><br /><span style={{ fontSize: '0.9em', color: '#444' }}>{language === 'kz' ? 'кофеинсіз' : language === 'ru' ? 'без кофеина' : 'decaffeinated'}</span></>}
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.additional}</h2>
              <table className="menu-table menu-table-additional">
                <tbody>
                  <MenuItemRowNoSize item={t.items.syrup} />
                  <MenuItemRowNoSize item={t.items.alternativeMilk} />
                  <MenuItemRowNoSize item={t.items.lactoseFree} />
                  <MenuItemRowNoSize item={t.items.decaf} />
                  <MenuItemRowNoSize item={t.items.cottageCream} />
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* {language === 'kz' ? 'егер сізде тағамдық аллергия немесе жеке көтере алмаушылық болса, баристаға алдын ала ескертіңіз.' : language === 'ru' ? 'Если у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.' : 'If you have food allergies or individual intolerance, please inform the barista in advance.'}</p>
          </div>
        </div>
        <div className={`menu-content ${activeTab === 'cold' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{language === 'kz' ? 'Салқын авторлық (L)' : language === 'ru' ? 'Холодный авторский (L)' : 'Cold Signature (L)'}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRowNoSize item={t.items.icedAmericano} />
                  <MenuItemRowNoSize item={t.items.icedLatteCappuccino} />
                  <MenuItemRowNoSize item={t.items.icedSpanishLatte} />
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Фраппе матча арахис' : language === 'ru' ? 'Фраппе матча арахис' : 'Frappe matcha peanut'} <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Фраппучино Белвита' : language === 'ru' ? 'Фраппучино белвита' : 'Frappuccino Belvita'}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2800</div>
                    </td>
                  </tr>
                  <MenuItemRowNoSize
                    item={t.items.icedMatcha}
                    nameExtra={<><br /><span style={{ fontSize: '0.9em', color: '#444' }}>{language === 'kz' ? 'кұлпынай, манго, банан' : language === 'ru' ? 'клубника, манго, банан' : 'strawberry, mango, banana'}</span></>}
                  />
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Эспрессо / Матча тоник' : language === 'ru' ? 'Эспрессо / Матча тоник' : 'Espresso / Matcha Tonic'}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'цитрус, таңкурай' : language === 'ru' ? 'малина, грейпфрут, клубника' : 'raspberry, grapefruit, strawberry'}</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Бамбл' : language === 'ru' ? 'Бамбл' : 'Bumble'}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'шие, апельсин' : language === 'ru' ? 'вишня, апельсин' : 'cherry, orange'}</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2200</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.coldDrink}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRowNoSize item={t.items.mangoPassion} />
                  <MenuItemRowNoSize item={t.items.raspberryStrawberryLime} />
                  <MenuItemRowNoSize item={t.items.cherryPear} />
                  <MenuItemRowNoSize
                    item={t.items.lemonadeAppleCabbage}
                    nameExtra={<><span style={{ color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8 }}>NEW</span></>}
                  />
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.fresh}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRowNoSize item={t.items.orange} />
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.smoothie}</h2>
              <table className="menu-table">
                <tbody>
                  <MenuItemRowNoSize
                    item={t.items.proteinSmoothie}
                    nameExtra={<><img src="/svg/zero.svg" alt="✓" className="inline-icon" /></>}
                  />
                  <MenuItemRowNoSize
                    item={t.items.apple}
                    nameExtra={<><br /><span style={{ fontSize: '0.9em', color: '#444' }}>{language === 'kz' ? 'коллаген' : language === 'ru' ? 'коллаген' : 'collagen'}</span></>}
                  />
                  <MenuItemRowNoSize item={t.items.pineappleMango} />
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.additional}</h2>
              <table className="menu-table menu-table-additional">
                <tbody>
                  <MenuItemRowNoSize item={t.items.syrup} />
                  <MenuItemRowNoSize item={t.items.alternativeMilk} />
                  <MenuItemRowNoSize item={t.items.lactoseFree} />
                  <MenuItemRowNoSize item={t.items.decaf} />
                  <MenuItemRowNoSize item={t.items.cottageCream} />
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* {language === 'kz' ? 'егер сізде тағамдық аллергия немесе жеке көтере алмаушылық болса, баристаға алдын ала ескертіңіз.' : language === 'ru' ? 'Если у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.' : 'If you have food allergies or individual intolerance, please inform the barista in advance.'}</p>
          </div>
        </div>
        <div className={`menu-content ${activeTab === 'seasonal' ? 'active' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{t.seasonal.dateSmoothie.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/seasonal/date-smoothie.png" alt={t.seasonal.dateSmoothie.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size"><div className="menu-cell-size-item">L</div></td>
                    <td className="menu-cell-price"><div className="menu-cell-price-item">{t.seasonal.dateSmoothie.price}</div></td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.seasonal.dateSmoothie.description}</p>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.seasonal.pomegranateLimeTea.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/seasonal/pomegranate-lime-tea.png" alt={t.seasonal.pomegranateLimeTea.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size"><div className="menu-cell-size-item">L</div></td>
                    <td className="menu-cell-price"><div className="menu-cell-price-item">{t.seasonal.pomegranateLimeTea.price}</div></td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.seasonal.pomegranateLimeTea.description}</p>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.seasonal.jasmineGrapeIcedTea.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/seasonal/jasmine-grape-iced-tea.png" alt={t.seasonal.jasmineGrapeIcedTea.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size"><div className="menu-cell-size-item">M</div></td>
                    <td className="menu-cell-price"><div className="menu-cell-price-item">{t.seasonal.jasmineGrapeIcedTea.price}</div></td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.seasonal.jasmineGrapeIcedTea.description}</p>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.seasonal.masalaTea.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/seasonal/masala-tea.png" alt={t.seasonal.masalaTea.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size"><div className="menu-cell-size-item">M</div></td>
                    <td className="menu-cell-price"><div className="menu-cell-price-item">{t.seasonal.masalaTea.price}</div></td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.seasonal.masalaTea.description}</p>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.seasonal.pineappleBananaLemonade.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/seasonal/pineapple-banana-lemonade.png" alt={t.seasonal.pineappleBananaLemonade.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size"><div className="menu-cell-size-item">L</div></td>
                    <td className="menu-cell-price"><div className="menu-cell-price-item">{t.seasonal.pineappleBananaLemonade.price}</div></td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.seasonal.pineappleBananaLemonade.description}</p>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.seasonal.oreoCacaoCheeseFoam.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/seasonal/oreo-cacao-cheese-foam.png" alt={t.seasonal.oreoCacaoCheeseFoam.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size"><div className="menu-cell-size-item">M</div></td>
                    <td className="menu-cell-price"><div className="menu-cell-price-item">{t.seasonal.oreoCacaoCheeseFoam.price}</div></td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.seasonal.oreoCacaoCheeseFoam.description}</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* {language === 'kz' ? 'егер сізде тағамдық аллергия немесе жеке көтере алмаушылық болса, баристаға алдын ала ескертіңіз.' : language === 'ru' ? 'Если у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.' : 'If you have food allergies or individual intolerance, please inform the barista in advance.'}</p>
          </div>
        </div>
        <div className={`menu-content menu-content-breakfasts ${activeTab === 'breakfasts' ? 'active' : ''}`}>
          <p className="breakfasts-schedule">{t.breakfastsSchedule}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{t.breakfasts.ricePorridge.name}</h2>
              <div className="seasonal-image-container">
                <img
                  src="/images/breakfast/rice-porridge.png"
                  alt={t.breakfasts.ricePorridge.name}
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.breakfasts.ricePorridge.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.breakfasts.ricePorridge.description}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{t.breakfasts.oatmeal.name}</h2>
              <div className="seasonal-image-container">
                <img
                  src="/images/breakfast/oatmeal.png"
                  alt={t.breakfasts.oatmeal.name}
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.breakfasts.oatmeal.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.breakfasts.oatmeal.description}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{t.breakfasts.syrniki.name}</h2>
              <div className="seasonal-image-container">
                <img
                  src="/images/breakfast/syrniki.png"
                  alt={t.breakfasts.syrniki.name}
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.breakfasts.syrniki.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.breakfasts.syrniki.description}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{t.breakfasts.hashBrownBreakfast.name}</h2>
              <div className="seasonal-image-container">
                <img
                  src="/images/breakfast/hash-brown-breakfas.png"
                  alt={t.breakfasts.hashBrownBreakfast.name}
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.breakfasts.hashBrownBreakfast.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.breakfasts.hashBrownBreakfast.description}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{t.breakfasts.bavarianBreakfast.name}</h2>
              <div className="seasonal-image-container">
                <img
                  src="/images/breakfast/bavarian-breakfas.png"
                  alt={t.breakfasts.bavarianBreakfast.name}
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.breakfasts.bavarianBreakfast.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.breakfasts.bavarianBreakfast.description}</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* {language === 'kz' ? 'егер сізде тағамдық аллергия немесе жеке көтере алмаушылық болса, баристаға алдын ала ескертіңіз.' : language === 'ru' ? 'Если у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.' : 'If you have food allergies or individual intolerance, please inform the barista in advance.'}</p>
          </div>
        </div>
        <div className={`menu-content menu-content-iftar ${activeTab === 'main' ? 'active' : ''}`}>
          <p className="breakfasts-schedule">{t.iftarSchedule}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 min-[955px]:grid-cols-3 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{t.iftar.redLentilCreamSoup.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/iftar/red-lentil-cream-soup.png" alt={t.iftar.redLentilCreamSoup.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.iftar.redLentilCreamSoup.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.iftar.redLentilCreamSoup.description}</p>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.iftar.mushroomCreamSoup.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/iftar/mushroom-cream-soup.png" alt={t.iftar.mushroomCreamSoup.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.iftar.mushroomCreamSoup.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.iftar.mushroomCreamSoup.description}</p>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.iftar.fettuccineCreamSauce.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/iftar/fettuccine-cream-sauce.png" alt={t.iftar.fettuccineCreamSauce.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.iftar.fettuccineCreamSauce.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.iftar.fettuccineCreamSauce.description}</p>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.iftar.classicLasagnaMeatRagout.name}</h2>
              <div className="seasonal-image-container">
                <img src="/images/iftar/classic-lasagna-meat-ragout.png" alt={t.iftar.classicLasagnaMeatRagout.name} className="seasonal-image" />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">{t.iftar.classicLasagnaMeatRagout.price}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.iftar.classicLasagnaMeatRagout.description}</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* {language === 'kz' ? 'егер сізде тағамдық аллергия немесе жеке көтере алмаушылық болса, баристаға алдын ала ескертіңіз.' : language === 'ru' ? 'Если у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.' : 'If you have food allergies or individual intolerance, please inform the barista in advance.'}</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default function Menu() {
  return (
    <Suspense fallback={
      <main className="menu-section">
        <div className="menu-content-wrapper">
          <div className="menu-tabs">
            <button className="menu-tab">Loading...</button>
          </div>
        </div>
      </main>
    }>
      <MenuContent />
    </Suspense>
  );
} 