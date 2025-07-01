import React from 'react';

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="section-title">
        <h2>About Us</h2>
        <p>Professional photography and videography services for your most precious moments</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>Capturing Your Special Moments</h3>
          <p>We are a professional team of two photographers and two videographers. Your Wedding Day is one of the most special moments of your life and we are here to ensure every moment is captured beautifully.</p>
          <p>Our passion is telling your unique love story through beautiful, cinematic and photo visuals that you'll cherish for a lifetime.</p>
          <a href="#services" className="btn btn-outline" style={{marginTop: 20}}>Our Services</a>
        </div>
        <div className="about-image">
          <img src="/Rs.jpg" alt="Our Team" />
        </div>
      </div>
      <div className="section-title" style={{marginTop: 80}}>
        <h2>Why RS Medias?</h2>
        <p>What makes us different from other media companies</p>
      </div>
      <div className="features">
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-handshake"></i>
          </div>
          <h3>Honest Business</h3>
          <p>Our clients never pay more than the prices listed for each package, no additional travel fees or taxes after we sign the contract.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>Perfect Partnership</h3>
          <p>Our photographers and videographers work seamlessly together with you, respecting your schedule and never missing any moments.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-search"></i>
          </div>
          <h3>Attention to Details</h3>
          <p>We understand your needs as a client and make sure to capture all from intimate moments to grand celebrations to make your day unforgettable.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-user-cog"></i>
          </div>
          <h3>Personalized Approach</h3>
          <p>We take the time to understand your style and vision, and we can even help you plan the wedding day for a flawless experience.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
