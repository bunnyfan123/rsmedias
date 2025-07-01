import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Gallery />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
