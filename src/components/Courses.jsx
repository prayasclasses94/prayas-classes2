import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const courseTypes = [
        {
            title: 'SSC Exams',
            desc: 'Comprehensive prep for CGL, CHSL, CPO, and MTS with specialized strategy modules.',
            icon: <GraduationCap size={40} />,
            color: 'var(--primary)'
        },
        {
            title: 'Banking Exams',
            desc: 'Precision training for IBPS PO/Clerk, SBI, and RBI Grade B with focus on speed & accuracy.',
            icon: <Building2 size={40} />,
            color: 'var(--secondary)'
        },
        {
            title: 'Railway & Daroga',
            desc: 'Targeted batches for RRB NTPC, Group D, and Bihar State Police sub-inspector exams.',
            icon: <BookOpen size={40} />,
            color: 'var(--primary)'
        }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>
                            Courses We <span className="text-gradient">Offer</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Curated curricula designed to transform your dedication into a government career.
                        </p>
                    </motion.div>
                </div>

                <div className="grid-cols-3" style={{ gap: '32px' }}>
                    {courseTypes.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card"
                            style={{
                                padding: '48px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                height: '100%'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'var(--surface-muted)',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: course.color,
                                marginBottom: '32px'
                            }}>
                                {course.icon}
                            </div>

                            <h3 style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>{course.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px', flexGrow: 1 }}>{course.desc}</p>

                            <Link to="/courses" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--primary)',
                                fontWeight: '800',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                letterSpacing: '0.05em'
                            }}>
                                VIEW DETAILS <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    .grid-cols-3 { grid-template-columns: 1fr !important; }
                    .card { padding: 40px !important; }
                }
            `}</style>
        </section>
    );
};

export default Courses;
