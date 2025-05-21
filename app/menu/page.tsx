'use client';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { menuTranslations } from '../translations/menu';

export default function Menu() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('hot');
  const { language } = useLanguage();
  const t = menuTranslations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="menu-section">
      <div className="menu-content-wrapper">
        <div className="menu-tabs">
          <button
            className={`menu-tab ${activeTab === 'hot' ? 'active' : ''}`}
            onClick={() => setActiveTab('hot')}
          >
            {t.categories.hotDrinks}
          </button>
          <button
            className={`menu-tab ${activeTab === 'cold' ? 'active' : ''}`}
            onClick={() => setActiveTab('cold')}
          >
            {t.categories.coldDrinks}
          </button>
          <button
            className={`menu-tab ${activeTab === 'seasonal' ? 'active' : ''}`}
            onClick={() => setActiveTab('seasonal')}
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
                      <div>{t.items.espresso}</div>
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
                      <div>Латте голд</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Испанский латте</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
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
                      <div>Раф Дубайский шоколад <span style={{color: '#2ecc40', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
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
                      <div>V60</div>
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
                      <div>Улун апельсин<br /><span style={{fontSize: '0.9em', color: '#444'}}>зеленый</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
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
                      <div>Ройбуш малина<br /><span style={{fontSize: '0.9em', color: '#444'}}>без кофеина</span></div>
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
                    <td className="menu-cell">
                      <div>+ Альтернативное молоко</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
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
                      <div>Айс латте / капучино</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Айс Испанский латте</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Айс малина раф <span style={{color: '#2ecc40', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Колд брю<br /><span style={{fontSize: '0.9em', color: '#444'}}>вишня, ананас</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2800</div>
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
                      <div>Айс матча <span style={{color: '#2ecc40', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span><br /><span style={{fontSize: '0.9em', color: '#444'}}>клубника, манго, персик, банан</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2700</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Эспрессо тоник <span style={{color: '#2ecc40', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span><br /><span style={{fontSize: '0.9em', color: '#444'}}>цитрус, малина</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Матча тоник <span style={{color: '#2ecc40', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span><br /><span style={{fontSize: '0.9em', color: '#444'}}>грейпфрут, клубника</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
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
                      <div>Айс ти - Вишня-груша</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
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
                      <div>Айс ти - Малина/клубника лайм</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Лимонад - Вишня</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Лимонад - Драгон-груша <span style={{color: '#2ecc40', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Лимонад - Клубника-банан</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">Коктейль (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Тары</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Кит-Кат</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Нутелла банан</div>
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
                      <div>Зеленый ПП <span style={{color: '#2ecc40', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Протеиновый <span style={{color: '#2ecc40', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3400</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Банан-малина</div>
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
                    <td className="menu-cell">
                      <div>+ Альтернативное молоко</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
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
        </div>
        <div className={`menu-content ${activeTab === 'seasonal' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">Милкшейк "Фисташка"</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/pistachio-milkshake.png" 
                  alt="Милкшейк Фисташка" 
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
                      <div className="menu-cell-price-item">3200</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Айс-ти "Смородина-Базилик"</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/blackcurrant-basil-icetea.png" 
                  alt="Айс-ти Смородина-Базилик" 
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
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Лимонад "Ананас-Щавель"</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/pineapple-sorrel-lemonade.png" 
                  alt="Лимонад Ананас-Щавель" 
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
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Смузи "Тропик"</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/tropic-smoothie.png" 
                  alt="Смузи Тропик" 
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
                      <div className="menu-cell-price-item">3200</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Бамбл "Матча арбуз"</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/matcha-watermelon-bumble.png" 
                  alt="Бамбл Матча арбуз" 
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
                      <div className="menu-cell-price-item">3200</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Айс-какао с сырной шапкой</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/ice-cocoa-cheese.png" 
                  alt="Айс-какао с сырной шапкой" 
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
                      <div className="menu-cell-price-item">2000</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 