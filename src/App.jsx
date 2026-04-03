import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Courses from './components/Courses';
import WhyPrayas from './components/WhyPrayas';
import Faculty from './components/Faculty';
import AjayHighlight from './components/AjayHighlight';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactPreview from './components/ContactPreview';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import AjaySinghPage from './components/AjaySinghPage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Coming Soon Page Component
const ComingSoon = ({ title }) => (
  <div style={{
    padding: '100px 20px',
    textAlign: 'center',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', fontWeight: '800', color: 'var(--primary)' }}>{title}</h1>
    <div style={{ backgroundColor: 'var(--primary-light)', border: '1px solid var(--border)', padding: '40px', borderRadius: '30px', maxWidth: '600px', boxShadow: 'var(--shadow-lg)' }}>
      <h2 style={{ color: 'var(--primary)', marginBottom: '12px', fontWeight: '800' }}>🚀 Coming Soon</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.6' }}>We are crafting a premium experience for this section. Stay tuned!</p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <a href="tel:09973595162" className="btn btn-primary" style={{ padding: '14px 28px' }}>Call Now</a>
        <a href="https://wa.me/919973595162" className="btn btn-secondary" style={{ padding: '14px 28px' }}>WhatsApp</a>
      </div>
    </div>
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <TrustStrip />
    <Courses />
    <WhyPrayas />
    <Faculty />
    <AjayHighlight />
    <Gallery />
    <Testimonials />
    <CTASection />
    <ContactPreview />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ajay-singh" element={<AjaySinghPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
