import React from 'react';

const Services = () => (
  <section className="services" id="services">
    <div className="container">
      <div className="section-title">
        <h2>Our Services</h2>
        <p>Comprehensive media services for all your special occasions</p>
      </div>
      <div className="features">
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-camera-retro"></i>
          </div>
          <h3>Wedding Photography</h3>
          <p>Beautiful, timeless images that capture the emotion and joy of your special day with both traditional and candid styles.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-video"></i>
          </div>
          <h3>Videography</h3>
          <p>Cinematic wedding films that tell your love story through highlight reels and full-length films you'll treasure forever.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-photo-film"></i>
          </div>
          <h3>Design Services</h3>
          <p>Custom posters, banners, and invitations to make your event stand out with designs that match your unique vision.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <i className="fas fa-broadcast-tower"></i>
          </div>
          <h3>Live Streaming</h3>
          <p>Professional live streaming services so your loved ones can be part of your special day from anywhere in the world.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services; 