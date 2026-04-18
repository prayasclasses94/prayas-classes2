import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe, Award, ChevronRight, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            {/* Top Bar Alert */}
            <div style={{
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: '10px 0',
                fontSize: '0.7rem',
                fontWeight: '800',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: 'clamp(10px, 3vw, 32px)', alignItems: 'center' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.9 }}>
                            <Award size={14} /> <span className="hide-xs">ADMISSIONS OPEN</span> 2026-27
                        </span>
                        <span className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.9 }}>
                            <Globe size={14} /> PATNA'S MOST TRUSTED FACULTY
                        </span>
                    </div>
                    <div>
                        <a href="tel:09973595162" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                            <Phone size={14} /> 99735 95162
                        </a>
                    </div>
                </div>
            </div>

            {/* Premium Header */}
            <header className="main-header" style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'var(--transition-base)',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : '#fff',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--accent-gold)' : '1px solid var(--border-gold)',
                padding: isScrolled ? '12px 0' : '20px 0',
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Minimalist Logo */}
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img
                            src="/logo.png"
                            alt="Prayas Classes"
                            style={{
                                height: '54px',
                                width: 'auto',
                                filter: 'drop-shadow(var(--shadow-sm))'
                            }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '-0.03em', lineHeight: 1 }}>PRAYAS</span>
                            <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--secondary)', letterSpacing: '0.2em' }}>CLASSES</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hide-mobile" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="nav-link"
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    fontWeight: '800',
                                    color: location.pathname === link.path ? 'var(--accent-saffron)' : 'var(--primary)',
                                    transition: 'var(--transition-base)',
                                    position: 'relative',
                                    opacity: location.pathname === link.path ? 1 : 0.8
                                }}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--accent-saffron)', borderRadius: '2px' }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Button */}
                    <Link to="/contact" className="hide-mobile btn-header" style={{
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        padding: '12px 28px',
                        fontSize: '0.85rem',
                        fontWeight: '800',
                        borderRadius: '14px',
                        textDecoration: 'none',
                        boxShadow: 'var(--shadow-md)',
                        transition: 'var(--transition-base)'
                    }}>
                        GET STARTED
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="show-mobile"
                        onClick={() => setIsMobileMenuOpen(true)}
                        style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', padding: '8px', marginRight: '-8px' }}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* High-End Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100dvh',
                            backgroundColor: 'white',
                            zIndex: 2000,
                            padding: '40px 24px',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <img src="/logo.png" alt="Prayas Classes" style={{ height: '40px', width: 'auto' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '1.25rem', lineHeight: 1 }}>PRAYAS</span>
                                    <span style={{ fontWeight: '800', color: 'var(--secondary)', fontSize: '0.6rem', letterSpacing: '0.1em' }}>CLASSES</span>
                                </div>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ background: 'var(--radius-light)', border: 'none', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        textDecoration: 'none',
                                        fontSize: '2.5rem',
                                        fontWeight: '900',
                                        color: location.pathname === link.path ? 'var(--secondary)' : 'var(--primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    {link.name}
                                    <ChevronRight size={32} opacity={0.2} />
                                </Link>
                            ))}
                        </nav>

                        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <a href="tel:09973595162" className="btn" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '20px', borderRadius: '20px', textAlign: 'center', fontWeight: '900', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                                <Phone size={20} /> CALL ADMISSIONS
                            </a>
                            <a href="https://wa.me/919973595162" className="btn" style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '20px', borderRadius: '20px', textAlign: 'center', fontWeight: '900', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                                <MessageCircle size={20} /> WHATSAPP NOW
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 991px) { 
                    .hide-mobile { display: none !important; } 
                    .main-header { padding: 10px 0 0px !important; }
                }
                @media (min-width: 992px) { .show-mobile { display: none !important; } }
                @media (max-width: 480px) {
                    .hide-xs { display: none !important; }
                }
            `}</style>
        </>
    );
};

export default Header;
