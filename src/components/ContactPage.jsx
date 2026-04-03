import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import { Phone, MessageCircle, MapPin, Clock, Award, Globe, Send, User, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
    return (
        <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
            <SEO 
                title="Contact Prayas Classes | Best SSC Coaching in Patna"
                description="Visit Prayas Classes in Patna or contact us for SSC, Banking & government exam coaching. Located in Boring Road. Call or WhatsApp now."
            />
            {/* 1. HERO SECTION (MINIMAL + CLEAN) */}
            <section className="section-padding bg-mandala" style={{ textAlign: 'center', backgroundColor: 'var(--surface-muted)', paddingTop: '160px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                            Get in <span style={{ color: 'var(--accent-saffron)' }}>Touch</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 32px' }}>
                            We’re here to guide you. Contact us to know more about courses, batches, and admissions.
                        </p>
                        <div style={{ display: 'inline-block', padding: '12px 30px', backgroundColor: 'white', borderRadius: '50px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)', marginBottom: '48px' }}>
                            <span style={{ fontFamily: '"Tiro Devanagari Hindi", serif', fontSize: '1.25rem', color: 'var(--accent-saffron)', fontWeight: '600' }}>
                                “सही मार्गदर्शन ही सफलता की पहली सीढ़ी है”
                            </span>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:09973595162" className="btn" style={{
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                padding: '24px 48px',
                                borderRadius: '24px',
                                fontWeight: '900',
                                fontSize: '1.2rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                boxShadow: 'var(--shadow-lg)'
                            }}>
                                <Phone size={24} /> CALL NOW
                            </a>
                            <a href="https://wa.me/919973595162" className="btn" style={{
                                backgroundColor: 'var(--accent-saffron)',
                                color: 'white',
                                padding: '24px 48px',
                                borderRadius: '24px',
                                fontWeight: '900',
                                fontSize: '1.2rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                boxShadow: '0 20px 40px rgba(194, 65, 12, 0.2)'
                            }}>
                                <MessageCircle size={24} /> WHATSAPP NOW
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. CONTACT INFO CARDS */}
            <section className="section-padding">
                <div className="container">
                    <div className="grid-cols-3" style={{ gap: '30px' }}>
                        {/* Address Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '50px 40px',
                                backgroundColor: 'white',
                                borderRadius: '32px',
                                boxShadow: 'var(--shadow-premium)',
                                border: '1px solid var(--border-light)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
                                <MapPin size={36} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Visit Our Institute</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                Jagdamba Tower,<br />Sahdeo Mahto Marg, Boring Road,<br />Patna, Bihar 800001
                            </p>
                        </motion.div>

                        {/* Call Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                padding: '50px 40px',
                                backgroundColor: 'white',
                                borderRadius: '32px',
                                boxShadow: 'var(--shadow-premium)',
                                border: '1px solid var(--border-light)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--accent-saffron-light)', color: 'var(--accent-saffron)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
                                <Phone size={36} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Call Us</h3>
                            <a href="tel:09973595162" style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--accent-saffron)', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                                099735 95162
                            </a>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Direct Admission Counseling</p>
                        </motion.div>

                        {/* WhatsApp Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                padding: '50px 40px',
                                backgroundColor: 'white',
                                borderRadius: '32px',
                                boxShadow: 'var(--shadow-premium)',
                                border: '1px solid var(--border-light)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ width: '80px', height: '80px', backgroundColor: '#e7f9ee', color: '#25D366', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
                                <MessageCircle size={36} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Chat on WhatsApp</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>Quick response for course inquiries</p>
                            <a href="https://wa.me/919973595162" className="btn" style={{
                                backgroundColor: '#25D366',
                                color: 'white',
                                padding: '14px 30px',
                                borderRadius: '14px',
                                fontWeight: '800',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                START CHAT
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. GOOGLE MAP EMBED */}
            <section style={{ backgroundColor: 'var(--surface-muted)', paddingBottom: '100px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Find Us on Map</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-saffron)', margin: '0 auto' }}></div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            borderRadius: '40px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-2xl)',
                            height: '500px',
                            border: '1px solid var(--border-light)'
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5255306691763!2d85.12239637618991!3d25.613398914441584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58ed93323055%3A0xc319bcc19a9a5a3a!2sBoring%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711900000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>

                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        {[
                            'Easily accessible from Boring Road',
                            'Well-connected location in Patna',
                            'Nearby Boring Road Chauraha'
                        ].map(info => (
                            <div key={info} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', fontSize: '1rem' }}>
                                <CheckCircle2 size={18} color="var(--accent-saffron)" /> {info}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. QUICK ACTION SECTION */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '24px' }}>Talk to Us <span style={{ color: 'var(--accent-gold)' }}>Directly</span></h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto 48px' }}>
                            Get complete details about courses, batches, and admissions instantly from our counseling team.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:09973595162" className="btn" style={{
                                backgroundColor: 'white',
                                color: 'var(--primary)',
                                padding: '18px 40px',
                                borderRadius: '16px',
                                fontWeight: '900',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <Phone size={20} /> CALL ADMISSION OFFICE
                            </a>
                            <a href="https://wa.me/919973595162" className="btn" style={{
                                border: '2px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                padding: '18px 40px',
                                borderRadius: '16px',
                                fontWeight: '900',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <MessageCircle size={20} /> WHATSAPP US
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MOBILE STICKY BAR */}
            <div className="mobile-sticky-bar" style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                padding: '12px 20px',
                boxShadow: '0 -10px 30px rgba(0,0,0,0.1)',
                zIndex: 1000,
                display: 'none',
                gap: '12px'
            }}>
                <a href="tel:09973595162" style={{
                    flex: 1,
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    textDecoration: 'none'
                }}>
                    <Phone size={18} /> CALL
                </a>
                <a href="https://wa.me/919973595162" style={{
                    flex: 1,
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    textDecoration: 'none'
                }}>
                    <MessageCircle size={18} /> WHATSAPP
                </a>
            </div>

            <style>{`
                .bg-mandala {
                    background-image: radial-gradient(circle at 2px 2px, rgba(165, 42, 42, 0.05) 1px, transparent 0);
                    background-size: 40px 40px;
                }

                @media (max-width: 991px) {
                    .grid-cols-3 { grid-template-columns: 1fr !important; gap: 30px !important; }
                    section { padding: 80px 0 !important; }
                    h1 { font-size: 2.75rem !important; }
                    h2 { font-size: 2.25rem !important; }
                    
                    .mobile-sticky-bar { display: flex !important; }
                    
                    div[style*="height: 500px"] { height: 350px !important; }
                }

                @media (max-width: 640px) {
                    .btn { width: 100%; justify-content: center; }
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
