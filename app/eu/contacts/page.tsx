'use client';

import Footer from '../components/Footer';

export default function Contacts() {
  return (
    <section className="contacts-section">
      <div className="contacts-content">
        <table className="menu-table">
          <tbody>
            <tr className="menu-row">
              <td className="menu-cell">Phone</td>
              <td className="menu-cell">
                <a href="tel:+77070220503">
                  +7 707 022 05 03
                </a>
              </td>
            </tr>
            <tr className="menu-row">
              <td className="menu-cell">Address</td>
              <td className="menu-cell">
                <a 
                  href="https://2gis.kz/astana/search/raul/firm/70000001091828086?m=71.466203%2C51.102622%2F13.66" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Turkestan Street 16, 22nd floor
                </a>
              </td>
            </tr>
            <tr className="menu-row">
              <td className="menu-cell">Email</td>
              <td className="menu-cell">
                <a href="mailto:info@raul.kz">
                  info@raul.kz
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="contacts-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20045.03939428087!2d71.4283003!3d51.09683695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585757a08c143%3A0xb8537f4a696d539!2sRaul!5e0!3m2!1sru!2skz!4v1744466930651!5m2!1sru!2skz"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              filter: 'grayscale(100%) contrast(100%) brightness(95%)',
              border: 'none',
              width: '100%',
              height: '100%',
              borderRadius: '24px'
            }}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

