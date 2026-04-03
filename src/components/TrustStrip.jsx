import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award, Landmark } from 'lucide-react';

const TrustStrip = () => {
    const stats = [
        { icon: <Landmark size={20} />, label: 'ESTABLISHED AUTHORITY', value: '15+ YEARS' },
        { icon: <Users size={20} />, label: 'STUDENTS TRAINED', value: '10,000+' },
        { icon: <Award size={20} />, label: 'OFFICERS CREATED', value: '5,000+' },
        { icon: <ShieldCheck size={20} />, label: 'SUCCESS RATE', value: '95%' },
    ];

    return (
        <section style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '48px 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div className="container">
                <div className="grid-cols-4" style={{ gap: '40px', alignItems: 'center' }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '12px',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ color: 'var(--secondary-light)', opacity: 0.8 }}>{stat.icon}</div>
                            <div>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '900',
                                    letterSpacing: '0.05em',
                                    color: 'white',
                                    lineHeight: 1
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: '0.65rem',
                                    fontWeight: '800',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    marginTop: '8px'
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 991px) {
                    .grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
                }
                @media (max-width: 640px) {
                    .grid-cols-4 { grid-template-columns: 1fr !important; gap: 40px !important; }
                }
            `}</style>
        </section>
    );
};

export default TrustStrip;
