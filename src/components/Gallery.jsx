import React from 'react';

const Gallery = () => (
  <section className="gallery" id="gallery">
    <div className="container">
      <div className="section-title">
        <h2>Our Gallery</h2>
        <p>A glimpse of our recent work and captured moments</p>
      </div>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Wedding Photo" />
          <div className="gallery-overlay">
            <i className="fas fa-search-plus"></i>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Portrait Photo" />
          <div className="gallery-overlay">
            <i className="fas fa-search-plus"></i>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Event Photo" />
          <div className="gallery-overlay">
            <i className="fas fa-search-plus"></i>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Wedding Photo" />
          <div className="gallery-overlay">
            <i className="fas fa-search-plus"></i>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Portrait Photo" />
          <div className="gallery-overlay">
            <i className="fas fa-search-plus"></i>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1529633980627-8fb0a3631161?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Event Photo" />
          <div className="gallery-overlay">
            <i className="fas fa-search-plus"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery; 