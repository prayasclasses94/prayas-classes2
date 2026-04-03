import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-mandala"
                    style={{
                        background: 'linear-gradient(135deg, var(--accent-saffron) 0%, #a3330b 100%)',
                        padding: '100px 40px',
                        borderRadius: '60px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        color: 'white',
                        boxShadow: '0 40px 100px rgba(194, 65, 12, 0.3)'
                    }}
                >
                    {/* Background Accents */}
                    <div style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                        zIndex: 0
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            backgroundColor: 'white',
                            color: 'var(--accent-saffron)',
                            padding: '10px 24px',
                            borderRadius: '99px',
                            fontSize: '0.85rem',
                            fontWeight: '900',
                            marginBottom: '40px',
                            letterSpacing: '0.05em'
                        }}>
                            <Sparkles size={16} /> ADMISSIONS OPEN FOR 2024
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: '900',
                            marginBottom: '24px',
                            lineHeight: '1.1',
                            letterSpacing: '-0.04em'
                        }}>
                            Your Ambition Needs <br />
                            Professional <span style={{ color: 'var(--accent-gold)' }}>Strategy.</span>
                        </h2>

                        <div className="font-hindi" style={{
                            fontSize: '1.8rem',
                            color: 'rgba(255,255,255,0.95)',
                            marginBottom: '48px',
                            fontWeight: '500'
                        }}>
                            “सफलता की शुरुआत सही मार्गदर्शन से होती है”
                        </div>

                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:09973595162" className="btn" style={{
                                backgroundColor: 'white',
                                color: 'var(--accent-saffron)',
                                padding: '24px 60px',
                                borderRadius: '24px',
                                fontWeight: '900',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                fontSize: '1.1rem',
                                boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                            }}>
                                <Phone size={22} /> CALL NOW
                            </a>
                            <a href="https://wa.me/919973595162" className="btn" style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                padding: '24px 60px',
                                borderRadius: '24px',
                                fontWeight: '900',
                                textDecoration: 'none',
                                border: '2px solid rgba(255, 255, 255, 0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                fontSize: '1.1rem'
                            }}>
                                <MessageCircle size={22} /> WHATSAPP
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    section { padding: 40px 16px !important; }
                    [style*="padding: 100px 40px"] { padding: 80px 24px !important; border-radius: 40px !important; }
                }
            `}</style>
        </section>
    );
};

export default CTASection;
