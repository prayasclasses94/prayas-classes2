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
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                <img src="/logo.png" alt="Prayas Classes" style={{ height: '60px', width: 'auto', display: 'block' }} />
                <span style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'white' }}>PRAYAS <span style={{ color: 'var(--accent-gold)' }}>CLASSES</span></span>
              </Link>
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
              {['Home', 'About', 'Courses', 'Gallery', 'Contact', 'Blog'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', transition: 'var(--transition-base)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowRight size={14} opacity={0.3} /> {link}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Areas We Serve</span>
              </li>
              {['Boring Road', 'Mithapur', 'Anisabad'].map(loc => (
                <li key={loc}>
                  <Link to={`/ssc-coaching-${loc.toLowerCase().replace(' ', '-')}`} style={{ color: 'rgba(255, 255, 255, 0.4)', textDecoration: 'none', transition: 'var(--transition-base)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                    <MapPin size={12} opacity={0.3} /> {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontWeight: '900', marginBottom: '32px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>PROGRAMS</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'SSC Coaching', path: '/ssc-coaching-patna' },
                { name: 'Banking Exams', path: '/banking-coaching-patna' },
                { name: 'Railway Special', path: '/railway-coaching-patna' },
                { name: 'English Booster', path: '/ajay-singh' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', transition: 'var(--transition-base)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowRight size={14} opacity={0.3} /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: '900', marginBottom: '32px', fontSize: '1.1rem', letterSpacing: '0.05em' }}>CONTACT US</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                  JAGDAMBA TOWER, SAHDEO MAHTO MARG,<br />
                  BORING ROAD, PATNA, BIHAR
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="tel:09973595162" style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>99735 95162</a>
                  <a href="tel:09031005011" style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>90310 05011</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <MessageCircle size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/919973595162" style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>WhatsApp Support</a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <a href="mailto:prayasclassespatna@gmail.com" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>prayasclasses@gmail.com</a>
              </div>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{
          padding: '40px 0 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '0.85rem'
        }}>
          <p>© 2024 Prayas Classes Patna. All Rights Reserved.</p>
          <p>Designed and Developed by <a href="https://brandorbitt.in" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: '700', textDecoration: 'none' }}>BrandOrbit</a></p>
        </div>
      </div>

      <style>{`
                footer a:hover { color: white !important; transform: translateX(5px); }
                @media (max-width: 1024px) {
                    [style*="gridTemplateColumns: 1.5fr 1fr 1fr 1.2fr"] { 
                        gap: 30px !important;
                    }
                }
                @media (max-width: 991px) {
                    [style*="gridTemplateColumns: 1.5fr 1fr 1fr 1.2fr"] { 
                        grid-template-columns: 1fr 1fr !important;
                        gap: 40px !important;
                    }
                    .footer-bottom {
                        flex-direction: column !important;
                        text-align: center !important;
                        gap: 16px !important;
                    }
                    footer { padding: 80px 0 120px !important; }
                }
                @media (max-width: 640px) {
                    [style*="gridTemplateColumns: 1fr 1fr"] { 
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
    </footer>
  );
};

export default Footer;
