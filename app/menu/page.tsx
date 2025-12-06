'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { menuTranslations } from '../translations/menu';

function MenuContent() {
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { language } = useLanguage();
  const t = menuTranslations[language];
  
  // Get active tab from URL or default to 'hot'
  const tabFromUrl = searchParams.get('tab');
  const validTabs = ['hot', 'cold', 'seasonal'];
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
        </div>
        <div className={`menu-content ${activeTab === 'hot' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.coffee}</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.espresso}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'Бразилия, Кения' : language === 'ru' ? 'Бразилия, Кения' : 'Brazil, Kenya'}</span></div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">-</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1000</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.americano}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">S</div>
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1300</div>
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.cappuccino}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">S</div>
                      <div className="menu-cell-size-item">M</div>
                      <div className="menu-cell-size-item">L</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                      <div className="menu-cell-price-item">1700</div>
                      <div className="menu-cell-price-item">1900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.latte}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                      <div className="menu-cell-size-item">L</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1700</div>
                      <div className="menu-cell-price-item">1900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.flatWhite}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">S</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1700</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.cocoa}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.hotChocolate}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">S</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.matchaLatte}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'жасыл, как' : language === 'ru' ? 'зеленая, голубая' : 'green, blue'}</span></div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.signatureCoffee}</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Моккачино голд' : language === 'ru' ? 'Моккачино голд' : 'Moccaccino Gold'}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
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
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Мандарин кофесі' : language === 'ru' ? 'Мандариновый кофе' : 'Mandarin Coffee'} <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2000</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Раф орео' : language === 'ru' ? 'Раф орео' : 'Oreo Raf'} <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
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
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Батч</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">S</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Фильтр</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2800</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.authorTea}</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.karakTea}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2000</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.seaBuckthorn}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">L</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.raspberryMint}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">L</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.gingerLemonHoney}</div>
                    </td>
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">L</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.leafTea}</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.earlGrey}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'қара' : language === 'ru' ? 'черный' : 'black'}</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.sencha}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'жасыл' : language === 'ru' ? 'зеленый' : 'green'}</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.jasmine}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'кофеинсіз' : language === 'ru' ? 'без кофеина' : 'decaffeinated'}</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.additional}</h2>
              <table className="menu-table menu-table-additional">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.syrup}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.alternativeMilk}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.lactoseFree}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.decaf}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.cottageCream}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">300</div>
                    </td>
                  </tr>
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
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.icedAmericano}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1700</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.icedLatteCappuccino}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.icedSpanishLatte}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Фраппе Матча' : language === 'ru' ? 'Фраппе Матча' : 'Frappe Matcha'}</div>
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
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.icedMatcha}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'кұлпынай, манго, банан' : language === 'ru' ? 'клубника, манго, банан' : 'strawberry, mango, banana'}</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2700</div>
                    </td>
                  </tr>
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
                      <div>{language === 'kz' ? 'Бамбл' : language === 'ru' ? 'Бамбл' : 'Bumble'}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'шие, шабдалы, апельсин' : language === 'ru' ? 'вишня, персик, апельсин' : 'cherry, peach, orange'}</span></div>
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
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.mangoPassion}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.raspberryStrawberryLime}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.cherryPear}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{language === 'kz' ? 'Лимонад - Кұлпынай-банан' : language === 'ru' ? 'Лимонад - Клубника-банан' : 'Lemonade - Strawberry-Banana'}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.fresh}</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.orange}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.smoothie}</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.proteinSmoothie} <img src="/svg/zero.svg" alt="✓" className="inline-icon" /></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3400</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.apple}<br /><span style={{fontSize: '0.9em', color: '#444'}}>{language === 'kz' ? 'коллаген' : language === 'ru' ? 'коллаген' : 'collagen'}</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.pineappleMango}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <div className="menu-category">
              <h2 className="menu-category-title">{t.categories.additional}</h2>
              <table className="menu-table menu-table-additional">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.syrup}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.alternativeMilk}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.lactoseFree}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.decaf}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.cottageCream}</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">300</div>
                    </td>
                  </tr>
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
              <h2 className="menu-category-title">{language === 'kz' ? 'Раф попкорн' : language === 'ru' ? 'Раф попкорн' : 'Popcorn Raf'}</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/popcorn-raf.png" 
                  alt={language === 'kz' ? 'Раф попкорн' : language === 'ru' ? 'Раф попкорн' : 'Popcorn Raf'} 
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{language === 'kz' ? 'Попкорн дәмі бар кремді раф: сүт, кілегей және нәзік ірімшік көбігі. Попкорнмен әрленген.' : language === 'ru' ? 'Кремовый раф с попкорновым вкусом, молоком и сливками, с фирменной сырной пенкой и попкорном сверху.' : 'Creamy raf with popcorn flavor, milk and cream, with signature cheese foam and popcorn on top.'}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{language === 'kz' ? 'Шай мандарин-алмұрт' : language === 'ru' ? 'Чай мандариновый-груша' : 'Mandarin-Pear Tea'}</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/mandarin-pear-tea.png" 
                  alt={language === 'kz' ? 'Шай мандарин-алмұрт' : language === 'ru' ? 'Чай мандариновый-груша' : 'Mandarin-Pear Tea'} 
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">L</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2200</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{language === 'kz' ? 'Мандарин мен алмұрт пюресіне дәмдеуіштер мен розмарин үйлескен жылы жемісті шай. Негізі жасыл шай.' : language === 'ru' ? 'Теплый фруктовый напиток с мандариновым и грушевым пюре, специями и розмарином на основе зеленого чая.' : 'Warm fruit drink with mandarin and pear puree, spices and rosemary based on green tea.'}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{language === 'kz' ? 'Матча какао' : language === 'ru' ? 'Матча какао' : 'Matcha Cocoa'}</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/matcha-cocoa.png" 
                  alt={language === 'kz' ? 'Матча какао' : language === 'ru' ? 'Матча какао' : 'Matcha Cocoa'} 
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{language === 'kz' ? 'Матча мен ақ какаоның сүтке негізделген жұмсақ қоспасы. Маршмеллоумен әрленген.' : language === 'ru' ? 'Нежный микс матчи и белого какао на молоке, украшенный маршмеллоу.' : 'Delicate mix of matcha and white cocoa with milk, decorated with marshmallow.'}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{language === 'kz' ? 'Бамбл апельсин-шырғанақ' : language === 'ru' ? 'Бамбл облепиха-апельсин' : 'Sea Buckthorn-Orange Bumble'}</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/sea-buckthorn-orange-bumble.png" 
                  alt={language === 'kz' ? 'Бамбл апельсин-шырғанақ' : language === 'ru' ? 'Бамбл облепиха-апельсин' : 'Sea Buckthorn-Orange Bumble'} 
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{language === 'kz' ? 'Апельсин мен шырғанақтың сергіткіш цитрусты миксі. Таңдауыңызға қарай эспрессо немесе матча-шот.' : language === 'ru' ? 'Цитрусовый микс апельсина и облепихи. Доступно на выбор: эспрессо или матча-шот.' : 'Citrus mix of orange and sea buckthorn. Available with choice: espresso or matcha shot.'}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{language === 'kz' ? 'Латте Lotus' : language === 'ru' ? 'Латте Lotus' : 'Lotus Latte'}</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/lotus-latte.png" 
                  alt={language === 'kz' ? 'Латте Lotus' : language === 'ru' ? 'Латте Lotus' : 'Lotus Latte'} 
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">M</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{language === 'kz' ? 'Карамель мен ваниль реңктері бар классикалық латте, ірімшік көбігімен және Lotus печеньесімен безендірілген.' : language === 'ru' ? 'Классический латте с карамелью и ванилью, сырной пенкой и печеньем Lotus.' : 'Classic latte with caramel and vanilla, cheese foam and Lotus cookie.'}</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">{language === 'kz' ? 'Анар шайы' : language === 'ru' ? 'Чай гранатовый' : 'Pomegranate Tea'}</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/pomegranate-tea.png" 
                  alt={language === 'kz' ? 'Анар шайы' : language === 'ru' ? 'Чай гранатовый' : 'Pomegranate Tea'} 
                  className="seasonal-image"
                />
              </div>
              <table className="seasonal-menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell-size">
                      <div className="menu-cell-size-item">L</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2200</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{language === 'kz' ? 'Анар пюресі, даршын, анис және анар дәндері қосылған хош иісті қара шай.' : language === 'ru' ? 'Пряный черный чай с гранатовым пюре, корицей, анисом и кусочками граната.' : 'Spicy black tea with pomegranate puree, cinnamon, anise and pomegranate pieces.'}</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* {language === 'kz' ? 'егер сізде тағамдық аллергия немесе жеке көтере алмаушылық болса, баристаға алдын ала ескертіңіз.' : language === 'ru' ? 'Если у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.' : 'If you have food allergies or individual intolerance, please inform the barista in advance.'}</p>
            <p className="menu-allergy-notice">* {language === 'kz' ? 'сусындардың суреттері ЖИ көмегімен жасалған және шынайы түрінен сәл ерекшеленуі мүмкін.' : language === 'ru' ? 'изображения напитков сгенерированы с помощью ИИ и могут немного отличаться от реального вида напитков.' : 'drink images are generated using AI and may differ slightly from the actual appearance of the drinks.'}</p>
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