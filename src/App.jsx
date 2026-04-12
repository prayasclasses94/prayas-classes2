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
import AboutShort from './components/AboutShort';
import RecentResultsBanner from './components/RecentResultsBanner';
import ContactPreview from './components/ContactPreview';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import AjaySinghPage from './components/AjaySinghPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import AreaNavigation from './components/AreaNavigation';
import DynamicServicePage from './components/DynamicServicePage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <TrustStrip />
    <AboutShort />
    <RecentResultsBanner />
    <Courses />
    <WhyPrayas />
    <AreaNavigation />
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
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* Main Service Pages */}
            <Route path="/ssc-coaching-patna" element={<DynamicServicePage type="ssc" locationName="Patna" />} />
            <Route path="/banking-coaching-patna" element={<DynamicServicePage type="banking" locationName="Patna" />} />
            <Route path="/railway-coaching-patna" element={<DynamicServicePage type="railway" locationName="Patna" />} />

            {/* Hyperlocal Location Pages (SSC Focus) */}
            <Route path="/ssc-coaching-boring-road" element={<DynamicServicePage type="ssc" isHyperlocal={true} areaName="Boring Road" />} />
            <Route path="/ssc-coaching-mithapur" element={<DynamicServicePage type="ssc" isHyperlocal={true} areaName="Mithapur" />} />
            <Route path="/ssc-coaching-anisabad" element={<DynamicServicePage type="ssc" isHyperlocal={true} areaName="Anisabad" />} />
            <Route path="/ssc-coaching-musallahpur-hat" element={<DynamicServicePage type="ssc" isHyperlocal={true} areaName="Musallahpur Hat" />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
