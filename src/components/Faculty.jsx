import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, CheckCircle2, ChevronRight, User } from 'lucide-react';

const Faculty = () => {
    const facultyList = [
        { name: 'Ajay Kr Singh', subject: 'English Language', exp: '20+ Years', role: 'Chief Mentor', image: '/assets/pictures/webp/t-3.webp' },
        { name: 'Panna Lal', subject: 'Mathematics', exp: '15+ Years', role: 'Senior Faculty', image: '/assets/pictures/webp/t-2.webp' },
        { name: 'Bhanu Sir', subject: 'General Studies', exp: '12+ Years', role: 'GS Expert', image: '/assets/pictures/webp/t-1.webp' },
        { name: 'Saroj Sir', subject: 'Reasoning', exp: '10+ Years', role: 'Logical Specialist', image: '/assets/pictures/webp/t-4.webp' },
    ];

    return (
        <section id="faculty" className="section-padding bg-mandala" style={{ backgroundColor: 'var(--accent-warm)' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'white',
                            color: 'var(--accent-saffron)',
                            padding: '10px 24px',
                            borderRadius: '99px',
                            fontSize: '0.8rem',
                            fontWeight: '800',
                            marginBottom: '20px',
                            border: '1px solid var(--border-gold)',
                            letterSpacing: '0.1em'
                        }}>
                            <Star size={14} fill="var(--accent-gold)" color="var(--accent-gold)" /> ELITE GURUS
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>
                            Learn from <span style={{ color: 'var(--accent-saffron)' }}>Expert Faculty</span>
                        </h2>
                        <div className="ornamental-divider" style={{ marginBottom: '32px' }}></div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                            Our educators aren't just teachers; they are results-obsessed mentors with decades of experience in government exam preparation.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid-cols-4" style={{ gap: '32px' }}>
                    {facultyList.map((faculty, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                border: '1px solid var(--border-gold)',
                                position: 'relative',
                                backgroundColor: 'white',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{
                                aspectRatio: '1/1.2',
                                backgroundColor: 'var(--accent-warm)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div className="bg-mandala" style={{ position: 'absolute', inset: 0, opacity: 0.2 }}></div>
                                <img 
                                    src={faculty.image} 
                                    alt={faculty.name} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    fontSize: '0.7rem',
                                    fontWeight: '900',
                                    color: 'var(--accent-saffron)',
                                    boxShadow: 'var(--shadow-sm)',
                                    border: '1px solid var(--border-gold)'
                                }}>
                                    {faculty.exp}
                                </div>
                            </div>

                            <div style={{ padding: '32px' }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>
                                    {faculty.subject}
                                </div>
                                <h3 className="font-script" style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '8px', lineHeight: 1 }}>
                                    {faculty.name}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>{faculty.role}</p>

                                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: '800', color: 'var(--accent-saffron)' }}>
                                        <Award size={14} /> Certified Mentor
                                    </span>
                                    <ChevronRight size={20} color="var(--accent-gold)" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 640px) {
                    .grid-cols-4 { grid-template-columns: 1fr !important; }
                    .card { padding-bottom: 0 !important; }
                }
            `}</style>
        </section>
    );
};

export default Faculty;
