'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Footer from '../components/Footer';

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get active tab from URL or default to 'hot'
  const tabFromUrl = searchParams.get('tab');
  const validTabs = ['hot', 'cold', 'seasonal'];
  const initialTab = tabFromUrl && validTabs.includes(tabFromUrl) ? tabFromUrl : 'hot';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
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

  return (
    <main className="menu-section">
      <div className="menu-content-wrapper">
        <div className="menu-tabs">
          <button
            className={`menu-tab ${activeTab === 'hot' ? 'active' : ''}`}
            onClick={() => handleTabChange('hot')}
          >
            Hot Drinks
          </button>
          <button
            className={`menu-tab ${activeTab === 'cold' ? 'active' : ''}`}
            onClick={() => handleTabChange('cold')}
          >
            Cold Drinks
          </button>
          <button
            className={`menu-tab ${activeTab === 'seasonal' ? 'active' : ''}`}
            onClick={() => handleTabChange('seasonal')}
          >
            Seasonal Menu
          </button>
        </div>
        <div className={`menu-content ${activeTab === 'hot' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">Classic</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Espresso<br /><span style={{fontSize: '0.9em', color: '#444'}}>Brazil, Kenya</span></div>
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
                      <div>Americano</div>
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
                      <div>Cappuccino</div>
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
                      <div>Latte</div>
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
                      <div>Flat White</div>
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
                      <div>Cocoa</div>
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
                      <div>Hot Chocolate</div>
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
                      <div>Matcha Latte<br /><span style={{fontSize: '0.9em', color: '#444'}}>green, blue</span></div>
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
              <h2 className="menu-category-title">Signature Coffee (M)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Moccaccino Gold</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Spanish Latte</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2400</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Raf Pistachio-Raspberry</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Mandarin Coffee <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2000</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Oreo Raf <span style={{color: '#e74c3c', fontWeight: 700, fontSize: '0.9em', marginLeft: 8}}>NEW</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">Alternative Coffee</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Batch</div>
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
                      <div>Filter</div>
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
              <h2 className="menu-category-title">Signature Tea</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Karak Tea</div>
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
                      <div>Sea Buckthorn-Passion Fruit</div>
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
                      <div>Tary Tea</div>
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
                      <div>Raspberry-Ginger</div>
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
              <h2 className="menu-category-title">Leaf Tea (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>English Breakfast<br /><span style={{fontSize: '0.9em', color: '#444'}}>black</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Oolong<br /><span style={{fontSize: '0.9em', color: '#444'}}>green</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Rooibos<br /><span style={{fontSize: '0.9em', color: '#444'}}>decaffeinated</span></div>
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
              <h2 className="menu-category-title">Additions</h2>
              <table className="menu-table menu-table-additional">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Syrup</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Alternative Milk</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Lactose-Free</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Decaffeinated</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Cheese Foam</div>
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
            <p className="menu-allergy-notice">* if you have food allergies or individual intolerance, please inform the barista in advance.</p>
          </div>
        </div>
        <div className={`menu-content ${activeTab === 'cold' ? 'active' : ''}`}>
          <div className="grid grid-cols-2 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">Cold Signature (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Iced Americano</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1700</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Iced Latte / Cappuccino</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">1900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Iced Spanish Latte</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Frappe Matcha</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2900</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Frappuccino Belvita</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2800</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Iced Matcha<br /><span style={{fontSize: '0.9em', color: '#444'}}>strawberry, mango, banana</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2700</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Espresso / Matcha Tonic<br /><span style={{fontSize: '0.9em', color: '#444'}}>raspberry, grapefruit, strawberry</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Bumble<br /><span style={{fontSize: '0.9em', color: '#444'}}>cherry, peach, orange</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2200</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">Refreshing Drinks (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Iced Tea - Mango-Passion Fruit</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Iced Tea - Raspberry / Strawberry Lime</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Lemonade - Pineapple-Sorrel</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Lemonade - Strawberry-Banana</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">2100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">Fresh (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Orange</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="menu-category">
              <h2 className="menu-category-title">Smoothies (L)</h2>
              <table className="menu-table">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Protein <img src="/svg/zero.svg" alt="✓" className="inline-icon" /></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3400</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Raspberry-Apple<br /><span style={{fontSize: '0.9em', color: '#444'}}>collagen</span></div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">3100</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>Pineapple-Mango</div>
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
              <h2 className="menu-category-title">Additions</h2>
              <table className="menu-table menu-table-additional">
                <tbody>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Syrup</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">300</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Alternative Milk</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Lactose-Free</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">500</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Decaffeinated</div>
                    </td>
                    <td className="menu-cell-price">
                      <div className="menu-cell-price-item">600</div>
                    </td>
                  </tr>
                  <tr className="menu-row">
                    <td className="menu-cell">
                      <div>+ Cheese Foam</div>
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
            <p className="menu-allergy-notice">* if you have food allergies or individual intolerance, please inform the barista in advance.</p>
          </div>
        </div>
        <div className={`menu-content ${activeTab === 'seasonal' ? 'active' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="menu-category">
              <h2 className="menu-category-title">Popcorn Raf</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/popcorn-raf.png" 
                  alt="Popcorn Raf" 
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
              <p className="seasonal-description">Creamy raf with popcorn flavor, milk and cream, with signature cheese foam and popcorn on top.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Mandarin-Pear Tea</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/mandarin-pear-tea.png" 
                  alt="Mandarin-Pear Tea" 
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
              <p className="seasonal-description">Warm fruit drink with mandarin and pear puree, spices and rosemary based on green tea.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Matcha Cocoa</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/matcha-cocoa.png" 
                  alt="Matcha Cocoa" 
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
              <p className="seasonal-description">Delicate mix of matcha and white cocoa with milk, decorated with marshmallow.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Sea Buckthorn-Orange Bumble</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/sea-buckthorn-orange-bumble.png" 
                  alt="Sea Buckthorn-Orange Bumble" 
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
              <p className="seasonal-description">Citrus mix of orange and sea buckthorn. Available with choice: espresso or matcha shot.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Lotus Latte</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/lotus-latte.png" 
                  alt="Lotus Latte" 
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
              <p className="seasonal-description">Classic latte with caramel and vanilla, cheese foam and Lotus cookie.</p>
            </div>

            <div className="menu-category">
              <h2 className="menu-category-title">Pomegranate Tea</h2>
              <div className="seasonal-image-container">
                <img 
                  src="/images/seasonal/pomegranate-tea.png" 
                  alt="Pomegranate Tea" 
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
              <p className="seasonal-description">Spicy black tea with pomegranate puree, cinnamon, anise and pomegranate pieces.</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="menu-allergy-notice">* if you have food allergies or individual intolerance, please inform the barista in advance.</p>
            <p className="menu-allergy-notice">* drink images are generated using AI and may differ slightly from the actual appearance of the drinks.</p>
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

