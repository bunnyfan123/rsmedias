import React from 'react';

const Testimonial = () => (
  <section className="about" id="knowus" style={{background: '#f9f9f9'}}>
    <div className="container">
      <div className="section-title">
        <h2>Get to Know Us</h2>
        <p>What our clients say about working with RS Medias</p>
      </div>
      <div className="testimonial">
        <p>We were so impressed and thrilled with the quality of the content Rs Medias produced for our wedding celebration. Booking with them was very easy. Everything was primarily communicated through email. Rs Medias was familiar and has experience capturing traditional ceremonies so that really drew me to book with them.</p>
        <p>They were very nice and professional. After the wedding, they sent the videos in a VERY timely manner. Faster turnaround than we anticipated. Our wedding day was kind of cloudy and rainy but they edited the photos so well that it looked like a bright and sunny day. We had a very positive experience working with Rs Medias.</p>
        <div className="testimonial-author">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Happy Client" />
          <div className="author-info">
            <h4>Priya Sharma</h4>
            <p>Wedding Client</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial; 