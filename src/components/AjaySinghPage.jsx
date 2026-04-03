import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import {
    BookOpen,
    Users,
    Award,
    Star,
    CheckCircle2,
    ArrowRight,
    PlayCircle,
    MapPin,
    Quote,
    Download,
    Eye,
    ShieldCheck
} from 'lucide-react';

const AjaySinghPage = () => {
    const authorityStats = [
        { label: 'Books Authored', value: '200+', icon: <BookOpen /> },
        { label: 'Success Stories', value: '50,000+', icon: <Users /> },
        { label: 'Years Experience', value: '20+', icon: <Award /> },
        { label: 'Ex-Chief Editor', value: 'Arihant', icon: <ShieldCheck /> }
    ];

    const trinityBooks = [
        {
            title: 'English for SSC',
            desc: 'The complete guide with detailed grammar, comprehension, and extensive practice sets.',
            tag: 'Bestseller'
        },
        {
            title: 'Word World',
            desc: 'Powerful vocabulary building using advanced memory techniques and root word analysis.',
            tag: 'Essential'
        },
        {
            title: 'Errors & Improvements',
            desc: 'Master rule-based grammar with thousands of solved examples and real exam patterns.',
            tag: 'Exam Ready'
        }
    ];

    return (
        <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
            <SEO 
                title="Ajay Kumar Singh | Expert English Mentor in Patna"
                description="Learn from Ajay Kumar Singh, the renowned English mentor and author of 200+ books. Expert guidance for SSC, Banking & competitive exams in Patna."
            />
            {/* 1. HERO SECTION */}
            <section className="bg-mandala" style={{
                padding: '180px 0 100px',
                backgroundColor: 'var(--accent-warm)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-saffron)' }}></div>
                                <span style={{ fontWeight: '800', letterSpacing: '0.2em', color: 'var(--accent-saffron)', fontSize: '0.85rem' }}>LEGENDARY MENTOR</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '900', color: 'var(--primary)', lineHeight: '1.1', marginBottom: '24px' }}>
                                The Master of English for <br />
                                <span style={{ color: 'var(--accent-saffron)' }}>Competitive Exams</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '40px', maxWidth: '600px' }}>
                                Trusted by thousands of aspirants across India. If English is your challenge, Ajay Kumar Singh is your definitive solution.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <a href="#learning" className="btn" style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    padding: '18px 40px',
                                    borderRadius: '16px',
                                    fontWeight: '900',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    START LEARNING <ArrowRight size={20} />
                                </a>
                                <a href="#books" className="btn" style={{
                                    backgroundColor: 'white',
                                    color: 'var(--primary)',
                                    padding: '18px 40px',
                                    borderRadius: '16px',
                                    fontWeight: '900',
                                    border: '1.5px solid var(--border-gold)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    VIEW BOOKS <BookOpen size={20} />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                borderRadius: '60px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-premium)',
                                border: '1px solid var(--border-gold)',
                                aspectRatio: '4/5',
                                backgroundColor: 'white'
                            }}>
                                <img
                                    src="/assets/pictures/webp/ajay-sir.webp"
                                    alt="Ajay Kumar Singh"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'white',
                                padding: '24px 48px',
                                borderRadius: '24px',
                                boxShadow: 'var(--shadow-lg)',
                                border: '1px solid var(--border-gold)',
                                width: 'max-content',
                                zIndex: 10
                            }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '4px' }}>Ajay Kumar Singh</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--accent-saffron)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Founder - MB Books Pvt. Ltd.</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. AUTHORITY STRIP */}
            <section style={{ backgroundColor: 'white', borderBottom: '1px solid var(--border-light)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '20px',
                        padding: '60px 0'
                    }}>
                        {authorityStats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: 'var(--accent-warm)',
                                    color: 'var(--accent-saffron)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                    border: '1px solid rgba(194, 65, 12, 0.1)'
                                }}>
                                    {React.cloneElement(stat.icon, { size: 28 })}
                                </div>
                                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '4px' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. INTRO SECTION */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '600', lineHeight: '1.6', marginBottom: '32px' }}>
                            "If English is your challenge, Ajay Kumar Singh is your solution."
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            With over 200 books and 50,000+ successful students, he has established himself as one of the most trusted names in competitive English preparation. His mission is to simplify complex linguistic rules into practical exam-clearing strategies.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. BOOKS SECTION (LEGENDARY SERIES) */}
            <section id="books" className="section-padding" style={{ backgroundColor: 'var(--accent-warm)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span style={{ color: 'var(--accent-saffron)', fontWeight: '900', letterSpacing: '0.1em', fontSize: '0.9rem' }}>THE PUBLISHING LEGACY</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginTop: '16px' }}>His Legendary English Book Series</h2>
                    </div>

                    <div style={{ marginBottom: '60px' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Star size={24} fill="var(--accent-gold)" color="var(--accent-gold)" /> The Golden Trinity
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                            {trinityBooks.map((book, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    style={{
                                        backgroundColor: 'white',
                                        padding: '40px',
                                        borderRadius: '32px',
                                        boxShadow: 'var(--shadow-md)',
                                        border: '1.5px solid var(--border-gold)',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        backgroundColor: 'var(--accent-saffron)',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: '100px',
                                        fontSize: '0.7rem',
                                        fontWeight: '900'
                                    }}>
                                        {book.tag}
                                    </div>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>{book.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>{book.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        <div style={{ backgroundColor: 'white', padding: '48px', borderRadius: '40px', border: '1px solid var(--border-light)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>Other Popular Titles</h3>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                {[
                                    'Objective Word Selection', 'Idioms & Phrases', 'Spelling Test',
                                    'Collocate Your Word', 'Corrective Grammar', 'Voice & Narration'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)', fontWeight: '600', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={16} color="var(--accent-saffron)" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ backgroundColor: 'var(--primary)', padding: '48px', borderRadius: '40px', color: 'white' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '24px' }}>Exam-Specific Guides</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {['Bank PO', 'SSC CGL', 'NDA', 'CDS', 'MBA Entrance', 'UPSC CSAT'].map((exam, idx) => (
                                    <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', fontWeight: '700' }}>
                                        {exam} English
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LEARNING OPTIONS */}
            <section id="learning" className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)' }}>Flexible Learning Options</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '16px' }}>Direct mentorship tailored to your location and schedule.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                        {/* Offline */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            style={{
                                padding: '60px',
                                borderRadius: '48px',
                                backgroundColor: 'white',
                                border: '1.5px solid var(--border-gold)',
                                boxShadow: 'var(--shadow-premium)',
                                textAlign: 'center'
                            }}
                        >
                            <MapPin size={48} color="var(--accent-saffron)" style={{ margin: '0 auto 24px' }} />
                            <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Offline Classes</h3>
                            <p style={{ color: 'var(--accent-saffron)', fontWeight: '800', marginBottom: '24px' }}>Prayas Classes, Patna</p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '40px' }}>Direct face-to-face mentorship and structured classroom training for intense preparation.</p>
                            <a href="tel:09973595162" className="btn" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '16px 32px', borderRadius: '14px', fontWeight: '800' }}>JOIN AT PATNA</a>
                        </motion.div>

                        {/* Online */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            style={{
                                padding: '60px',
                                borderRadius: '48px',
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >
                            <PlayCircle size={48} color="var(--accent-gold)" style={{ margin: '0 auto 24px' }} />
                            <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '16px' }}>Online Learning</h3>
                            <p style={{ color: 'var(--accent-gold)', fontWeight: '800', marginBottom: '24px' }}>MB Books Tutorials App</p>
                            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '40px' }}>Learn anytime, anywhere with high-quality video lectures, test series, and doubt sessions.</p>
                            <a href="#" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '16px 32px', borderRadius: '14px', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                <Download size={18} /> GET THE APP
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. QUOTE BLOCK */}
            <section style={{ backgroundColor: 'var(--accent-warm)', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <Quote size={80} color="var(--accent-saffron)" opacity={0.1} style={{ margin: '0 auto 20px' }} />
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary)', fontWeight: '900', fontStyle: 'italic', maxWidth: '900px', margin: '0 auto' }}>
                            "Success is earned – with the right books and the right teacher."
                        </h2>
                        <div style={{ marginTop: '32px', fontWeight: '800', color: 'var(--accent-saffron)', fontSize: '1.25rem' }}>— Ajay Kumar Singh</div>
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="section-padding">
                <div className="container">
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '40px',
                        padding: '100px 40px',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-premium)',
                        border: '1.5px solid var(--border-gold)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>Learn Directly from Ajay Kumar Singh</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '48px' }}>Take the first step towards your dream government job with the country's leading English mentor.</p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:09973595162" className="btn" style={{
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                padding: '20px 48px',
                                borderRadius: '18px',
                                fontWeight: '900',
                                fontSize: '1.1rem'
                            }}>
                                JOIN OFFLINE BATCHES
                            </a>
                            <a href="https://wa.me/919973595162" className="btn" style={{
                                backgroundColor: 'var(--accent-saffron)',
                                color: 'white',
                                padding: '20px 48px',
                                borderRadius: '18px',
                                fontWeight: '900',
                                fontSize: '1.1rem'
                            }}>
                                START ONLINE LEARNING
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 991px) {
                    div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; gap: 40px !important; }
                    h1 { font-size: 2.75rem !important; }
                    h2 { font-size: 2.25rem !important; }
                    section { padding: 60px 0 !important; }
                    .btn { width: 100%; justify-content: center; }
                    div[style*="aspectRatio"] { border-radius: 40px !important; }
                    div[style*="padding: 60px"] { padding: 40px 30px !important; }
                }
            `}</style>
        </div>
    );
};

export default AjaySinghPage;
