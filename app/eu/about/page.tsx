'use client';

import Footer from '../components/Footer';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-video-desktop">
          <video 
            src="/videos/about-video-vertical.webm"
            autoPlay
            loop
            muted
            playsInline
            className="about-video"
          />
        </div>
        <div className="about-video-mobile">
          <video 
            src="/videos/about-video-horizontal.webm"
            autoPlay
            loop
            muted
            playsInline
            className="about-video"
          />
        </div>

        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <div className="about-text about-jetbrains">
            <p>
              Raul is a coffee house with a panoramic view of the botanical garden in Astana.
            </p>
            <p>
              From the very first day, you — our dear guests, residents and visitors of the capital — have supported us. Thanks to you, Raul has been talked about throughout Kazakhstan and beyond. Your stories, reviews, and warm recommendations have become the most powerful support for us.
            </p>
            <p>
              We sincerely thank everyone who shares with us a love for coffee and atmosphere.
            </p>
            <p>
              Raul continues to grow, change, and become better — every day.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

