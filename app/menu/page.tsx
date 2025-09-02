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
                      <div>Моккачино голд <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Испанский Латте <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
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
                      <div>Раф Дубайский шоколад</div>
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
                      <div>Айс Испанский Латте <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Фраппе Матча <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
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
                      <div>Бамбл<br /><span style={{fontSize: '0.9em', color: '#444'}}>вишня, персик, апельсин</span></div>
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
                      <div>Малина-яблоко <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span><br /><span style={{fontSize: '0.9em', color: '#444'}}>коллаген</span></div>
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
        </div>
        <div className={`menu-content ${activeTab === 'seasonal' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">Пряная матча</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/spicy-matcha.png" 
                  alt="Пряная матча" 
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
              <p className="seasonal-description">Мягкий латте на матче с мёдом и цветочной посыпкой.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Раф кленовый</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/maple-raf.png" 
                  alt="Раф кленовый" 
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
              <p className="seasonal-description">Нежный кофейный напиток на сливках с кленовым сиропом и лёгким ароматом осени.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Каркаде витамин</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/karkade-vitamin.png" 
                  alt="Каркаде витамин" 
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
              <p className="seasonal-description">Ягодный чай с клубничным пюре, мятой и лёгкой кислинкой.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Имбирный тоник</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/ginger-tonic.png" 
                  alt="Имбирный тоник" 
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
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">Освежающий коктейль на основе эспрессо с имбирным тоником и ароматом пандана.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Глинтвейн</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/mulled-wine.png" 
                  alt="Глинтвейн" 
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
              <p className="seasonal-description">Пряный согревающий чай с вишнёвым соком, грушей и специями.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Кофейный Каркаде</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/coffee-karkade.png" 
                  alt="Кофейный Каркаде" 
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
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="seasonal-description">Насыщенный эспрессо с яркой кислинкой каркаде.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 