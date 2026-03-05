'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Footer from '../components/Footer';
import { menuTranslations } from '../../translations/menu';

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const t = menuTranslations.ru;
  
  // Get active tab from URL or default to 'hot'
  const tabFromUrl = searchParams.get('tab');
  const validTabs = ['hot', 'cold', 'seasonal', 'breakfasts', 'iftar'];
  const initialTab = tabFromUrl && validTabs.includes(tabFromUrl) ? tabFromUrl : 'hot';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    // Update active tab from URL on mount
    const tab = searchParams.get('tab');
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  useEffect(() => {
    if (activeTab !== 'hot') return;
    if (typeof window !== 'undefined' && window.location.hash === '#menu-classic') {
      const el = document.getElementById('menu-classic');
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
    }
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Update URL with tab parameter
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`?${params.toString()}`, { scroll: false });
  };

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
            className={`menu-tab ${activeTab === 'iftar' ? 'active' : ''}`}
            onClick={() => handleTabChange('iftar')}
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
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.espresso}<br /><span style={{fontSize: '0.9em', color: '#444'}}>Бразилия, Кения</span></div>
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
                      <div>{t.items.matchaLatte}<br /><span style={{fontSize: '0.9em', color: '#444'}}>зеленая, голубая</span></div>
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
              <h2 className="menu-category-title">Авторский кофе (M)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.moccaccino} <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Испанский Латте</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2400</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Раф фисташка-малина</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.blueLatte} <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Раф орео</div>
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
              <h2 className="menu-category-title">Авторский чай</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Карак чай</div>
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
                      <div>Облепиха-маракуйя</div>
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
                      <div>Тары чай</div>
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
                      <div>Малина-имбирь</div>
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
              <h2 className="menu-category-title">Листовой чай (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Английский завтрак<br /><span style={{fontSize: '0.9em', color: '#444'}}>черный</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Улун<br /><span style={{fontSize: '0.9em', color: '#444'}}>зеленый</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Ройбуш<br /><span style={{fontSize: '0.9em', color: '#444'}}>без кофеина</span></div>
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
              <h2 className="menu-category-title">Дополнительно</h2>
              <table className="menu-table menu-table-additional">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Сироп</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Альтернативное молоко</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Безлактозное</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Без кофеина</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Сырная шапка</div>
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
            <p className="menu-allergy-notice">* eсли у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.</p>
          </div>
        </div>
        <div className={`menu-content ${activeTab === 'cold' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">Холодный авторский (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Айс Американо</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1700</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Айс Латте / Капучино</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Айс Испанский Латте</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Фраппе матча арахис <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Фраппучино белвита</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2800</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Айс Матча<br /><span style={{fontSize: '0.9em', color: '#444'}}>клубника, манго, банан</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2700</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Эспрессо / Матча тоник<br /><span style={{fontSize: '0.9em', color: '#444'}}>малина, грейпфрут, клубника</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Бамбл<br /><span style={{fontSize: '0.9em', color: '#444'}}>вишня, апельсин</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2200</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">Прохладительные напитки (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Айс ти - Манго-маракуйя</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Айс ти - Малина / Клубника лайм</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Лимонад - Ананас-щавель</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>{t.items.lemonadeAppleCabbage} <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">Фреш (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Апельсин</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">Смузи (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Протеиновый <img src="/svg/zero.svg" alt="✓" className="inline-icon" /></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3400</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Малина-яблоко<br /><span style={{fontSize: '0.9em', color: '#444'}}>коллаген</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Ананас-манго</div>
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
              <h2 className="menu-category-title">Дополнительно</h2>
              <table className="menu-table menu-table-additional">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Сироп</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Альтернативное молоко</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Безлактозное</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Без кофеина</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Сырная шапка</div>
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
            <p className="menu-allergy-notice">* если у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.</p>
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
                    <td className="menu-cell-price"><div className="menu-cell-price-item">3200</div></td>
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
                    <td className="menu-cell-price"><div className="menu-cell-price-item">2300</div></td>
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
                    <td className="menu-cell-price"><div className="menu-cell-price-item">2300</div></td>
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
                    <td className="menu-cell-price"><div className="menu-cell-price-item">2100</div></td>
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
                    <td className="menu-cell-price"><div className="menu-cell-price-item">2300</div></td>
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
                    <td className="menu-cell-price"><div className="menu-cell-price-item">2300</div></td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.seasonal.oreoCacaoCheeseFoam.description}</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* eсли у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.</p>
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
                      <div className="menu-cell-price-item">2800</div>
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
                      <div className="menu-cell-price-item">2600</div>
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
                      <div className="menu-cell-price-item">3100</div>
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
                      <div className="menu-cell-price-item">4900</div>
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
                      <div className="menu-cell-price-item">4400</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.breakfasts.bavarianBreakfast.description}</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* eсли у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.</p>
          </div>
        </div>
        <div className={`menu-content menu-content-iftar ${activeTab === 'iftar' ? 'active' : ''}`}>
          <p className="breakfasts-schedule">{t.iftarSchedule}</p>
          <p className="breakfasts-schedule">{t.iftarPromoBefore}<Link href={`${pathname}?tab=hot#menu-classic`} className="iftar-promo-link">{t.iftarPromoLink}</Link>{t.iftarPromoAfter}</p>
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
                      <div className="menu-cell-price-item">2800</div>
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
                      <div className="menu-cell-price-item">2600</div>
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
                      <div className="menu-cell-price-item">4400</div>
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
                      <div className="menu-cell-price-item">4900</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">{t.iftar.classicLasagnaMeatRagout.description}</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* eсли у вас есть пищевая аллергия или индивидуальная непереносимость, пожалуйста, сообщите об этом бариста заранее.</p>
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
            <button className="menu-tab">Загрузка...</button>
          </div>
        </div>
      </main>
    }>
      <MenuContent />
    </Suspense>
  );
} 