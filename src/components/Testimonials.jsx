import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { name: 'Rahul Kumar', role: 'SSC CGL Inspector', text: 'Prayas Classes gave me the strategic roadmap I needed. Ajay Sir\'s English classes were the game-changer for me.' },
        { name: 'Anjali Sharma', role: 'SBI PO Officer', text: 'The focus on basic concepts before diving into shortcuts is what sets Prayas apart. Truly the best in Patna.' },
        { name: 'Vikash Singh', role: 'Income Tax Officer', text: 'I tried many places, but the personal attention and rigorous testing at Prayas were unparalleled.' }
    ];

    return (
        <section className="section-padding bg-mandala" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>
                            What <span style={{ color: 'var(--accent-saffron)' }}>Students Say</span>
                        </h2>
                        <div className="ornamental-divider" style={{ marginBottom: '32px' }}></div>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Real stories from students who transformed their hard work into government careers.
                        </p>
                    </motion.div>
                </div>

                <div className="grid-cols-3" style={{ gap: '32px' }}>
                    {[
                        { name: 'Rahul Kumar', role: 'SSC CGL Inspector', text: 'Prayas Classes gave me the strategic roadmap I needed. अजय सर की क्लासेस ने मेरा नजरिया बदल दिया।' },
                        { name: 'Anjali Sharma', role: 'SBI PO Officer', text: 'The focus on basic concepts is what sets Prayas apart. Truly the best in Patna for banking aspirants.' },
                        { name: 'Vikash Singh', role: 'Income Tax Officer', text: 'सफलता के लिए सही मार्गदर्शन जरूरी है, और प्रयास क्लासेज वही प्रदान करता है। Unmatched attention to detail.' }
                    ].map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                padding: '48px',
                                backgroundColor: 'var(--surface-muted)',
                                borderRadius: '32px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid var(--border-gold)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                            }}
                        >
                            <Quote size={60} color="var(--accent-saffron)" opacity={0.08} style={{ position: 'absolute', top: '24px', left: '24px' }} />

                            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px', position: 'relative' }}>
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />)}
                            </div>

                            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '40px', fontStyle: 'italic', flexGrow: 1, position: 'relative' }}>
                                "{review.text}"
                            </p>

                            <div style={{ position: 'relative' }}>
                                <h4 className="font-script" style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '4px' }}>{review.name}</h4>
                                <p style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--accent-saffron)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    .grid-cols-3 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
