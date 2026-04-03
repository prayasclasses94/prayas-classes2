import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './SEO';
import { X, ZoomIn, Play, Phone, MessageCircle, ChevronRight, ChevronLeft, Image as ImageIcon, Video } from 'lucide-react';

const GalleryPage = () => {
    const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'videos'
    const [selectedMedia, setSelectedMedia] = useState(null); // { url, type, index }

    // Flattened g-series images
    const allImages = Array.from({ length: 36 }, (_, i) => ({
        url: `/assets/pictures/webp/g-${i + 1}.webp`,
        alt: `Prayas Classes Patna - Gallery Image ${i + 1}`
    }));

    const handleNext = (e) => {
        e.stopPropagation();
        if (!selectedMedia) return;
        const nextIdx = (selectedMedia.index + 1) % allImages.length;
        setSelectedMedia({ url: allImages[nextIdx].url, type: 'photo', index: nextIdx });
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        if (!selectedMedia) return;
        const prevIdx = (selectedMedia.index - 1 + allImages.length) % allImages.length;
        setSelectedMedia({ url: allImages[prevIdx].url, type: 'photo', index: prevIdx });
    };

    return (
        <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
            <SEO 
                title="Gallery | Prayas Classes Patna"
                description="Explore classrooms, faculty, and student life at Prayas Classes, a leading coaching institute in Patna for SSC & Banking."
            />
            {/* 1. HERO SECTION */}
            <section className="section-padding bg-mandala" style={{ textAlign: 'center', backgroundColor: 'var(--surface-muted)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                            Life at <span style={{ color: 'var(--accent-saffron)' }}>Prayas Classes</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 32px' }}>
                            Explore our classrooms, teaching environment, and student moments in Patna. Witness the preparation for success.
                        </p>
                        <div style={{ display: 'inline-block', padding: '12px 30px', backgroundColor: 'white', borderRadius: '50px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
                            <span style={{ fontFamily: '"Tiro Devanagari Hindi", serif', fontSize: '1.25rem', color: 'var(--accent-saffron)', fontWeight: '600' }}>
                                “सफलता की तैयारी यहीं से शुरू होती है”
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. TAB SWITCHER */}
            <section style={{ backgroundColor: 'white', borderBottom: '1px solid var(--border-light)', position: 'sticky', top: '80px', zIndex: 100 }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0' }}>
                        <div style={{ backgroundColor: 'var(--primary-light)', padding: '6px', borderRadius: '100px', display: 'flex', gap: '4px' }}>
                            <button
                                onClick={() => setActiveTab('photos')}
                                style={{
                                    padding: '12px 40px',
                                    borderRadius: '100px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    fontWeight: '800',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: activeTab === 'photos' ? 'var(--primary)' : 'transparent',
                                    color: activeTab === 'photos' ? 'white' : 'var(--primary)'
                                }}
                            >
                                <ImageIcon size={18} /> PHOTOS
                            </button>
                            <button
                                onClick={() => setActiveTab('videos')}
                                style={{
                                    padding: '12px 40px',
                                    borderRadius: '100px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    fontWeight: '800',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: activeTab === 'videos' ? 'var(--primary)' : 'transparent',
                                    color: activeTab === 'videos' ? 'white' : 'var(--primary)'
                                }}
                            >
                                <Video size={18} /> VIDEOS
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MAIN CONTENT (PHOTOS / VIDEOS) */}
            <AnimatePresence mode="wait">
                {activeTab === 'photos' ? (
                    <motion.div
                        key="photos"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="section-padding"
                    >
                        <div className="container">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                                {allImages.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setSelectedMedia({ url: img.url, type: 'photo', index: idx })}
                                        style={{
                                            borderRadius: '24px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            aspectRatio: '4/3',
                                            boxShadow: 'var(--shadow-md)',
                                            position: 'relative'
                                        }}
                                        className="gallery-image-card"
                                    >
                                        <img src={img.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={img.alt} />
                                        <div className="gallery-card-overlay">
                                            <ZoomIn size={32} color="white" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="videos"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="section-padding"
                    >
                        <div className="container">
                            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                                <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Our Teaching <span style={{ color: 'var(--accent-saffron)' }}>Environment</span></h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Get a glimpse of our study environment at Prayas Classes Patna center.</p>
                            </div>

                            <div style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '48px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', border: '1px solid var(--border-light)', backgroundColor: 'black' }}>
                                <video 
                                    controls 
                                    playsInline 
                                    style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
                                >
                                    <source src="/assets/videos/vid-1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 4. VISUAL FLOW BREAK */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '24px' }}>A focused environment for <span style={{ color: 'var(--accent-gold)' }}>serious aspirants</span></h2>
                            <p style={{ fontSize: '1.15rem', opacity: 0.7, lineHeight: '1.8', marginBottom: '32px' }}>
                                Every corner of Prayas Classes is designed to foster concentration, discipline, and the drive to excel in competitive government exams.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--accent-gold)' }}></div>
                                <span style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: '800', fontSize: '0.85rem' }}>VISIT US TODAY</span>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.3)' }}
                        >
                            <img src="/assets/pictures/webp/g-30.webp" style={{ width: '100%', display: 'block' }} alt="Focused aspirants" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. CTA SECTION */}
            <section className="section-padding">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'white',
                            padding: '80px 40px',
                            borderRadius: '48px',
                            boxShadow: 'var(--shadow-premium)',
                            border: '1px solid var(--border-light)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(194, 65, 12, 0.05) 0%, transparent 70%)' }}></div>

                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Visit Prayas Classes and <span style={{ color: 'var(--accent-saffron)' }}>Experience It Yourself</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 48px' }}>
                            Connect with us to take a tour of our centers and get personalized career counseling from Ajay Sir.
                        </p>

                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:09973595162" className="btn" style={{
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                padding: '18px 40px',
                                borderRadius: '16px',
                                fontWeight: '900',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <Phone size={20} /> CALL NOW
                            </a>
                            <a href="https://wa.me/919973595162" className="btn" style={{
                                backgroundColor: 'var(--accent-saffron)',
                                color: 'white',
                                padding: '18px 40px',
                                borderRadius: '16px',
                                fontWeight: '900',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                boxShadow: '0 15px 30px rgba(194, 65, 12, 0.2)'
                            }}>
                                <MessageCircle size={20} /> WHATSAPP
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMedia(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.95)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px'
                        }}
                    >
                        <button style={{ position: 'absolute', top: '40px', right: '40px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10 }}>
                            <X size={40} />
                        </button>

                        <button
                            className="nav-btn"
                            onClick={handlePrev}
                            style={{ position: 'absolute', left: '40px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            className="nav-btn"
                            onClick={handleNext}
                            style={{ position: 'absolute', right: '40px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', width: '60px', height: '60px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
                        >
                            <ChevronRight size={32} />
                        </button>

                        <motion.img
                            key={selectedMedia.url}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            src={selectedMedia.url}
                            style={{ maxHeight: '85vh', maxWidth: '85vw', borderRadius: '12px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .gallery-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 35, 71, 0.4);
                    display: flex;
                    alignItems: center;
                    justifyContent: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .gallery-image-card:hover .gallery-card-overlay {
                    opacity: 1;
                }
                .nav-btn:hover {
                    background-color: var(--accent-saffron) !important;
                }
                
                @media (max-width: 991px) {
                    .grid-cols-2, .grid-cols-3 { grid-template-columns: 1fr !important; gap: 40px !important; }
                    section { padding: 80px 0 !important; }
                    h1 { font-size: 2.75rem !important; }
                    h2 { font-size: 2.25rem !important; }
                    
                    div[style*="gridTemplateColumns: 1.2fr 1fr"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default GalleryPage;
