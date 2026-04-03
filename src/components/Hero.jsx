import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-mandala" style={{
            position: 'relative',
            padding: '120px 0 100px',
            backgroundColor: 'var(--background)',
            overflow: 'hidden'
        }}>
            {/* Ambient Background - Warm Saffron */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(194, 65, 12, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid-cols-2" style={{ gap: '80px', alignItems: 'center' }}>

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: 'rgba(194, 65, 12, 0.08)',
                            color: 'var(--accent-saffron)',
                            padding: '10px 24px',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.85rem',
                            fontWeight: '800',
                            marginBottom: '32px',
                            letterSpacing: '0.05em',
                            border: '1px solid rgba(194, 65, 12, 0.1)'
                        }}>
                            <Award size={16} /> PATNA'S ELITE COACHING HUB
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(3rem, 7vw, 5rem)',
                            fontWeight: '900',
                            color: 'var(--primary)',
                            lineHeight: '1.05',
                            letterSpacing: '-0.04em',
                            marginBottom: '24px'
                        }}>
                            Best Coaching for <span style={{ color: 'var(--accent-saffron)' }}>SSC & Banking</span> in Patna.
                        </h1>

                        <div className="font-hindi" style={{
                            fontSize: '1.4rem',
                            color: 'var(--accent-gold)',
                            marginBottom: '32px',
                            opacity: 0.9,
                            fontWeight: '500'
                        }}>
                            सफलता की शुरुआत सही मार्गदर्शन से होती है
                        </div>

                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-muted)',
                            marginBottom: '48px',
                            lineHeight: '1.7',
                            maxWidth: '560px'
                        }}>
                            Strategic coaching for SSC, Banking, and Government exams by Bihar's most distinguished faculty. We deliver results, not just lectures.
                        </p>

                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a href="/courses" className="btn" style={{
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                padding: '20px 48px',
                                fontWeight: '800',
                                borderRadius: '20px',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                boxShadow: '0 20px 40px rgba(30, 58, 138, 0.2)'
                            }}>
                                VIEW PROGRAMS <ArrowUpRight size={20} />
                            </a>
                            <a href="https://wa.me/919973595162" className="btn" style={{
                                backgroundColor: 'white',
                                color: 'var(--primary)',
                                padding: '20px 48px',
                                fontWeight: '800',
                                borderRadius: '20px',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                border: '1px solid var(--border-gold)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                WHATSAPP NOW <ChevronRight size={20} />
                            </a>
                        </div>

                        <div style={{ marginTop: '64px', display: 'flex', gap: '48px', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>15k+</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Selected</div>
                            </div>
                            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border)' }}></div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>4.9/5</div>
                                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Trust Score</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Immersive Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'relative',
                            borderRadius: '48px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-premium)',
                            aspectRatio: '4/5',
                            backgroundColor: 'black'
                        }}>
                            <video 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            >
                                <source src="/assets/videos/vid-1.webm" type="video/webm" />
                                <source src="/assets/videos/vid-1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* Floating Stats Card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    bottom: '40px',
                                    left: '40px',
                                    right: '40px',
                                    padding: '32px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                                    border: '1px solid var(--border-gold)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                    <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-saffron)', borderRadius: '50%' }}></div>
                                    <span style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Live from Patna Center</span>
                                </div>
                                <h4 style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '1.25rem' }}>Next Batch: SSC CGL Special</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '4px' }}>Starting Monday, 8:00 AM</p>
                            </motion.div>
                        </div>

                        {/* Aesthetic Overlays */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--primary)',
                            borderRadius: '24px',
                            zIndex: -1,
                            opacity: 0.1
                        }}></div>
                    </motion.div>

                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    .grid-cols-2 { grid-template-columns: 1fr !important; }
                    section { padding: 80px 0 60px !important; }
                    h1 { font-size: 2.8rem !important; margin-bottom: 24px !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
