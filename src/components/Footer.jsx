import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { Facebook, Instagram, Twitter } from './SocialIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                <img src="/logo.png" alt="Prayas Classes" style={{ height: '60px', width: 'auto', display: 'block' }} />
                <span style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'white' }}>PRAYAS <span style={{ color: 'var(--accent-gold)' }}>CLASSES</span></span>
              </Link>
            </div>
            <p>
              Patna's most trusted name in government exam preparation. We focus on concept-based learning to turn aspirants into successful officers.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-pill"><Facebook size={18} /></a>
              <a href="#" className="social-pill"><Instagram size={18} /></a>
              <a href="#" className="social-pill"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>NAVIGATE</h4>
            <ul className="footer-links">
              {['Home', 'About', 'Courses', 'Gallery', 'Contact', 'Blog'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                    <ArrowRight size={14} opacity={0.3} /> {link}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Areas We Serve</span>
              </li>
              {['Boring Road', 'Mithapur', 'Anisabad'].map(loc => (
                <li key={loc}>
                  <Link to={`/ssc-coaching-${loc.toLowerCase().replace(' ', '-')}`} style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                    <MapPin size={12} opacity={0.3} /> {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-column">
            <h4>PROGRAMS</h4>
            <ul className="footer-links">
              {[
                { name: 'SSC Coaching', path: '/ssc-coaching-patna' },
                { name: 'Banking Exams', path: '/banking-coaching-patna' },
                { name: 'Railway Special', path: '/railway-coaching-patna' },
                { name: 'English Booster', path: '/ajay-singh' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path}>
                    <ArrowRight size={14} opacity={0.3} /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>CONTACT US</h4>
            <div className="footer-contact-list">
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span className="contact-text">
                  JAGDAMBA TOWER, SAHDEO MAHTO MARG,<br />
                  BORING ROAD, PATNA, BIHAR
                </span>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="tel:09973595162" className="contact-link">99735 95162</a>
                  <a href="tel:09031005011" className="contact-link">90310 05011</a>
                </div>
              </div>
              <div className="contact-item">
                <MessageCircle size={20} className="contact-icon" />
                <a href="https://wa.me/919973595162" className="contact-link">WhatsApp Support</a>
              </div>
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <a href="mailto:prayasclassespatna@gmail.com" className="contact-text" style={{ textDecoration: 'none' }}>prayasclasses@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2024 Prayas Classes Patna. All Rights Reserved.</p>
          <p>Designed and Developed by <a href="https://brandorbitt.in" target="_blank" rel="noopener noreferrer">BrandOrbit</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
