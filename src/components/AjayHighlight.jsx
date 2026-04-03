import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ChevronRight, Star, Quote } from 'lucide-react';

const AjayHighlight = () => {
    return (
        <section className="section-padding bg-mandala" style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '80px', alignItems: 'center' }}>

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-saffron)' }}></div>
                            <span style={{ fontWeight: '800', letterSpacing: '0.2em', color: 'var(--accent-saffron)', fontSize: '0.85rem' }}>FACULTY SPOTLIGHT</span>
                        </div>

                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: '900', color: 'var(--primary)', lineHeight: '1.1', marginBottom: '32px', letterSpacing: '-0.02em' }}>
                            Learn from One of India’s <br />
                            <span style={{ color: 'var(--accent-saffron)' }}>Most Trusted</span> English Mentors
                        </h2>

                        <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '8px' }}>Ajay Kumar Singh</h3>
                            <p style={{ color: 'var(--accent-saffron)', fontWeight: '800', fontSize: '1.1rem', marginBottom: '16px' }}>
                                Founder – MB Books Pvt. Ltd. | Ex-Chief Editor – Arihant
                            </p>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px' }}>
                                With over 20 years of experience, Ajay Kumar Singh has guided thousands of students towards success in SSC, Banking, NDA, CDS, and other competitive exams.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                Author of 200+ books and mentor to 50,000+ selections, his teaching focuses on clarity, accuracy, and real exam performance.
                            </p>
                        </div>

                        {/* Authority Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px', marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '54px', height: '54px', borderRadius: '16px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '900', fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '2px' }}>200+</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>Books Authored</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '54px', height: '54px', borderRadius: '16px', backgroundColor: 'var(--accent-saffron-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-saffron)' }}>
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '900', fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '2px' }}>50,000+</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>Student Selections</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/ajay-singh" className="btn" style={{
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                            padding: '20px 48px',
                            borderRadius: '16px',
                            fontWeight: '900',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '1rem',
                            boxShadow: 'var(--shadow-lg)'
                        }}>
                            READ FULL PROFILE <ChevronRight size={20} />
                        </Link>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            borderRadius: '48px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-premium)',
                            border: '1px solid var(--border-light)',
                            aspectRatio: '4/5'
                        }}>
                            <img
                                src="/assets/pictures/webp/ajay-sir.webp"
                                alt="Ajay Kumar Singh"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', backgroundColor: 'white', padding: '24px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                    <Award color="var(--accent-gold)" size={20} />
                                    <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '0.9rem' }}>Legendary English Educator</span>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>"Success is earned with the right books and the right teacher."</p>
                            </div>
                        </div>

                        {/* Decorative Background Element */}
                        <div style={{
                            position: 'absolute',
                            top: '-40px',
                            right: '-40px',
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(165, 42, 42, 0.05) 0%, transparent 70%)',
                            zIndex: 1
                        }}></div>
                    </motion.div>

                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; gap: 60px !important; }
                    h2 { font-size: 2.25rem !important; }
                    .btn { width: 100%; justify-content: center; }
                }
            `}</style>
        </section>
    );
};

export default AjayHighlight;
