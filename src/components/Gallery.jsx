import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const images = [
        '/assets/pictures/webp/g-1.webp',
        '/assets/pictures/webp/g-5.webp',
        '/assets/pictures/webp/g-10.webp',
        '/assets/pictures/webp/g-15.webp',
        '/assets/pictures/webp/g-20.webp',
        '/assets/pictures/webp/g-25.webp'
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: '#fcfcfc' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>
                            Life At <span className="text-gradient">Prayas</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '500px' }}>
                            A visual journey through our classrooms, interactive sessions, and student celebrations.
                        </p>
                    </motion.div>
                    <Link to="/gallery" className="hide-mobile" style={{
                        color: 'var(--primary)',
                        fontWeight: '800',
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        letterSpacing: '0.05em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        paddingBottom: '10px',
                        borderBottom: '2px solid var(--primary)'
                    }}>
                        GO TO GALLERY <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="gallery-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px'
                }}>
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '24px',
                                aspectRatio: '1/1',
                                group: 'hover'
                            }}
                            className="gallery-card"
                        >
                            <img
                                src={img}
                                alt={`Life at Prayas ${i}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0, 35, 71, 0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }} className="overlay">
                                <Eye size={32} color="white" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Link to="/gallery" className="show-mobile" style={{
                    marginTop: '40px',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    fontWeight: '800',
                    textDecoration: 'none',
                    display: 'block'
                }}>
                    VIEW FULL GALLERY
                </Link>
            </div>

            <style>{`
                .gallery-card:hover img { transform: scale(1.1); }
                .gallery-card:hover .overlay { opacity: 1 !important; }
                @media (max-width: 991px) {
                    .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 480px) {
                    .gallery-grid { grid-template-columns: 1fr !important; }
                    .show-mobile { display: block !important; }
                }
            `}</style>
        </section>
    );
};

export default Gallery;
