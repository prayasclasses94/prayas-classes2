import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Target, BookOpen, Clock, Users } from 'lucide-react';

const WhyPrayas = () => {
    const features = [
        { icon: <Target size={24} />, title: 'Concept Rooting', desc: 'We focus on "Why" and "How" rather than just providing shortcuts.' },
        { icon: <Zap size={24} />, title: 'Speed & Accuracy', desc: 'Specialized techniques to shave seconds off your exam time.' },
        { icon: <BookOpen size={24} />, title: 'Premium Material', desc: 'Access to MB Publication English and custom-curated GS/Maths content.' },
        { icon: <Clock size={24} />, title: 'Regular Testing', desc: 'Bi-weekly rigorous mock tests designed by exam toppers.' },
        { icon: <Users size={24} />, title: 'Expert Guidance', desc: 'Direct mentorship from Patna\'s most trusted faculty panel.' },
        { icon: <CheckCircle2 size={24} />, title: 'Past Performance', desc: 'Thousands of selected candidates across SSC & Banking sectors.' }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: 'white', marginBottom: '24px' }}>
                            Why Choose <span style={{ color: 'var(--secondary-light)' }}>Prayas Classes</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
                            We don't just teach the syllabus; we prepare you for the competition.
                        </p>
                    </motion.div>
                </div>

                <div className="grid-cols-3" style={{ gap: '40px' }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            style={{
                                display: 'flex',
                                gap: '20px',
                                padding: '32px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <div style={{ color: 'var(--secondary-light)', flexShrink: 0 }}>{feature.icon}</div>
                            <div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '12px' }}>{feature.title}</h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.6', fontSize: '0.95rem' }}>{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .grid-cols-3 { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 640px) {
                    .grid-cols-3 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default WhyPrayas;
