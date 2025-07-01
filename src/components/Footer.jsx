import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>RS Medias</h3>
          <p>Art You Can Feel, Moments You Can Keep. Professional photography and videography services for your most precious moments.</p>
          <div className="social-links">
            <a href="https://wa.me/message/AQTF2FYEVSZEO1" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/rs_medias_?igsh=MTVsdHdsdGhwazdmdA==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://youtube.com/@rs_medias?si=tGFAzRl3Vl64MFym" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#knowus">Get to Know Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#services">Wedding Photography</a></li>
            <li><a href="#services">Videography</a></li>
            <li><a href="#services">Poster & Banner Design</a></li>
            <li><a href="#services">Live Streaming</a></li>
            <li><a href="#services">Event Coverage</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li><i className="fas fa-map-marker-alt"></i> 123 Studio Street, City</li>
            <li><i className="fas fa-phone"></i> +91 83098 24588</li>
            <li><i className="fas fa-phone"></i> +91 63045 87410</li>
            <li><i className="fas fa-envelope"></i> rscreativitystudio@gmail.com</li>
            <li><i className="fas fa-clock"></i> Mon-Fri: 9AM - 6PM</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; <span id="year"></span> RS Medias. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 