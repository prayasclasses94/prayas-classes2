import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, GraduationCap } from 'lucide-react';
import { Facebook, Instagram, Twitter } from './SocialIcons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '100px 0 40px' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '60px',
          marginBottom: '80px'
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '44px', height: '44px', backgroundColor: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                <span style={{ fontWeight: '900', fontSize: '1.25rem' }}>P</span>
              </div>
              <span style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '-0.02em' }}>PRAYAS <span style={{ color: 'var(--secondary-light)' }}>CLASSES</span></span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.95rem' }}>
              Patna's most trusted name in government exam preparation. We focus on concept-based learning to turn aspirants into successful officers.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ width: '44px', height: '44px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}><Facebook size={18} /></a>
              <a href="#" style={{ width: '44px', height: '44px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}><Instagram size={18} /></a>
              <a href="#" style={{ width: '44px', height: '44px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: '900', marginBottom: '32px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>NAVIGATE</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Home', 'About', 'Courses', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', transition: 'var(--transition-base)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowRight size={14} opacity={0.3} /> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontWeight: '900', marginBottom: '32px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>PROGRAMS</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['SSC Special', 'Banking Mastery', 'Railway Prep', 'English Booster', 'GS Research'].map(link => (
                <li key={link}>
                  <a href="/courses" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', transition: 'var(--transition-base)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowRight size={14} opacity={0.3} /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: '900', marginBottom: '32px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--secondary-light)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6', fontSize: '0.9rem' }}>Jagdamba Tower, Boring Road, Patna, Bihar</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={20} color="var(--secondary-light)" style={{ flexShrink: 0 }} />
                <a href="tel:09973595162" style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>99735 95162</a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <MessageCircle size={20} color="var(--secondary-light)" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/919973595162" style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>WhatsApp Support</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ padding: '40px 0 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.8rem' }}>
          <p>© 2024 Prayas Classes Patna. All Rights Reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>

      <style>{`
                a:hover { color: white !important; transform: translateX(5px); }
                @media (max-width: 991px) {
                    [style*="gridTemplateColumns: 1.5fr 1fr 1fr 1.2fr"] { 
                        grid-template-columns: 1fr 1fr !important;
                        gap: 48px !important;
                    }
                }
                @media (max-width: 640px) {
                    [style*="gridTemplateColumns: 1fr 1fr"] { 
                        grid-template-columns: 1fr !important;
                    }
                    footer { padding: 80px 0 40px !important; }
                }
            `}</style>
    </footer>
  );
};

export default Footer;
