import React from 'react';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <div className="section-title">
        <h2>Contact Us</h2>
        <p>Get in touch to discuss your photography and videography needs</p>
      </div>
      <div className="contact-form">
        <form id="contactForm">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="contact-card">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>Our Location</h3>
          <p>123 Studio Street, City</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3>Phone Numbers</h3>
          <p>+91 83098 24588</p>
          <p>+91 63045 87410</p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Email Address</h3>
          <a href="mailto:rscreativitystudio@gmail.com">rscreativitystudio@gmail.com</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 