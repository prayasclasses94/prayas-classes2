import React from 'react';
import { motion } from 'framer-motion';
import { 
    Phone, 
    MessageCircle, 
    CheckCircle2, 
    Award, 
    BookOpen, 
    Users, 
    Target, 
    Clock, 
    Zap, 
    MapPin, 
    ArrowRight,
    Star,
    ShieldCheck,
    ChevronRight,
    HelpCircle
} from 'lucide-react';
import SEO from './SEO';

const DynamicServicePage = ({ 
    type, // 'ssc', 'banking', 'railway'
    locationName = 'Patna', 
    isHyperlocal = false,
    areaName = '' 
}) => {
    const primaryKeyword = `${type.toUpperCase()} coaching ${isHyperlocal ? 'near' : 'in'} ${areaName || locationName}`;
    const secondaryLocation = isHyperlocal ? 'Patna' : 'nearby areas like Boring Road, Mithapur, and Anisabad';
    
    // Schema data
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Prayas Classes",
        "image": "/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jagdamba Tower, Sahdeo Mahto Marg, Boring Road",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "postalCode": "800001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.6186",
            "longitude": "85.1245"
        },
        "url": window.location.href,
        "telephone": "+919973595162",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "07:00",
                "closes": "20:00"
            }
        ]
    };

    const faqs = [
        {
            q: `Which is the best ${type.toUpperCase()} coaching ${isHyperlocal ? 'near' : 'in'} ${areaName || locationName}?`,
            a: `Prayas Classes is widely recognized as the best ${type.toUpperCase()} coaching ${isHyperlocal ? 'near' : 'in'} ${areaName || locationName}, known for its experienced faculty led by Ajay Kr Singh and a track record of thousands of successful selections.`
        },
        {
            q: `How do I start my ${type.toUpperCase()} preparation ${isHyperlocal ? 'near' : 'in'} ${areaName || locationName}?`,
            a: `You can start by visiting our Patna center at Boring Road. We offer foundation batches for beginners that cover concepts from basic to advanced levels, specifically designed for students from ${areaName || locationName} and surrounding areas.`
        },
        {
            q: `What is the fee structure for ${type.toUpperCase()} courses?`,
            a: `Our fee structure is very affordable and designed to be accessible to all students. Please call us at +91-9973595162 for the current batch details and scholarship offers.`
        },
        {
            q: `Do you provide mock tests for ${type.toUpperCase()}?`,
            a: `Yes, we provide regular weekly mock tests based on the latest exam patterns. Our testing methodology helps students from ${areaName || locationName} improve their speed and accuracy significantly.`
        }
    ];

    return (
        <div style={{ backgroundColor: 'white' }}>
            <SEO 
                title={`${primaryKeyword} | Best Institute | Prayas Classes`}
                description={`Looking for ${primaryKeyword}? Prayas Classes offers expert guidance for ${type.toUpperCase()} exams in Patna ${areaName ? `near ${areaName}` : ''}. Join the most trusted coaching today.`}
                schema={schema}
            />

            {/* Hero Section */}
            <section style={{ 
                padding: '10px 0 100px', 
                backgroundColor: 'var(--accent-warm)', 
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '8px', 
                                backgroundColor: 'rgba(194, 65, 12, 0.08)', 
                                color: 'var(--accent-saffron)', 
                                padding: '10px 24px', 
                                borderRadius: '100px', 
                                fontSize: '0.85rem', 
                                fontWeight: '800',
                                marginBottom: '32px'
                            }}>
                                <Award size={16} /> #1 RANKED IN PATNA
                            </span>
                            <h1 style={{ 
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                                fontWeight: '900', 
                                color: 'var(--primary)', 
                                lineHeight: '1.1',
                                marginBottom: '24px',
                                letterSpacing: '-0.04em'
                            }}>
                                {type.toUpperCase()} Coaching <span style={{ color: 'var(--accent-saffron)' }}>{isHyperlocal ? 'Near' : 'In'} {areaName || locationName}</span>
                            </h1>
                            <p style={{ 
                                fontSize: '1.25rem', 
                                color: 'var(--text-muted)', 
                                lineHeight: '1.7',
                                marginBottom: '40px'
                            }}>
                                Achieve your dream government job with strategic preparation. Prayas Classes provides the most comprehensive {type.toUpperCase()} coaching {isHyperlocal ? 'near' : 'in'} {areaName || locationName}, combining conceptual clarity with rigorous practice.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <a href="tel:09973595162" className="btn btn-primary" style={{ padding: '18px 36px', borderRadius: '16px' }}>
                                    <Phone size={20} style={{ marginRight: '10px' }} /> CALL ADMISSIONS
                                </a>
                                <a href="https://wa.me/919973595162" className="btn btn-secondary" style={{ padding: '18px 36px', borderRadius: '16px', backgroundColor: 'white' }}>
                                    <MessageCircle size={20} style={{ marginRight: '10px', color: '#25D366' }} /> WHATSAPP NOW
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Result Image Section */}
            <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ 
                            borderRadius: '32px', 
                            overflow: 'hidden', 
                            boxShadow: 'var(--shadow-premium)',
                            border: '1px solid var(--border-gold)'
                        }}
                    >
                        <img 
                            src="/assets/images/results-banner.jpg" 
                            alt="Prayas Classes Results - Successful Students" 
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Long Form Content Section (800+ Words Strategy) */}
            <section className="section-padding" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="grid-cols-1" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        
                        {/* 1. Introduction */}
                        <div style={{ marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>
                                Premier {type.toUpperCase()} Exam Preparation in Patna
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '20px' }}>
                                If you are searching for the <strong>best {type.toUpperCase()} coaching {isHyperlocal ? 'near' : 'in'} {areaName || locationName}</strong>, your search ends at Prayas Classes. Located in the heart of Patna at Boring Road, our institute has served thousands of aspirants from {areaName || locationName}, Mithapur, Anisabad, and Musallahpur Hat. Our mission is to bridge the gap between hard work and success through a scientifically designed curriculum.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                The competitive landscape for government exams in Bihar is intense. Whether you are aiming for SSC CGL, Banking PO, or Railway NTPC, you need more than just books; you need a mentor who understands the pattern shifts and helps you master time management. At Prayas Classes, we focus on foundation building, ensuring that every student from {areaName || locationName} gets personalized attention.
                            </p>
                        </div>

                        {/* 2. Exams Covered */}
                        <div style={{ marginBottom: '60px', padding: '48px', backgroundColor: 'var(--surface)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '32px' }}>Comprehensive Exams Coverage</h3>
                            <div className="grid-cols-2" style={{ gap: '24px' }}>
                                {[
                                    { title: 'SSC Exams', desc: 'Focus on CGL, CHSL, MTS, CPO, and Stenographer with special emphasis on English and Quantitative Aptitude.' },
                                    { title: 'Banking Career', desc: 'Master IBPS PO/Clerk, SBI PO, and RRB patterns with our speed-math and banking awareness modules.' },
                                    { title: 'Railway Recruitment', desc: 'Detailed coverage of NTPC, Group D, and ALP exams with scientific-level General Studies preparation.' },
                                    { title: 'State Exams', desc: 'Preparation for BSSC and other Bihar state-level competitive exams with local context.' }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                        <div style={{ color: 'var(--accent-saffron)', flexShrink: 0 }}><CheckCircle2 size={24} /></div>
                                        <div>
                                            <div style={{ fontWeight: '800', color: 'var(--primary)', marginBottom: '4px' }}>{item.title}</div>
                                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Why Choose Prayas Classes */}
                        <div style={{ marginBottom: '60px' }}>
                            <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '32px' }}>Why Prayas is the Top Choice {isHyperlocal ? 'near' : 'in'} {areaName || locationName}</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '32px' }}>
                                Choosing the right coaching institute is the first step toward your success. At Prayas Classes, we don't just teach; we prepare you for the battle. Our methodology is refined over decades of experience, making us the most trusted name for <strong>{type.toUpperCase()} coaching near Boring Road</strong>.
                            </p>
                            
                            <div className="grid-cols-1" style={{ gap: '20px' }}>
                                {[
                                    { icon: <Users />, title: 'Expert Mentorship', text: 'Learn under the guidance of Ajay Kr Singh, whose unique English teaching techniques have changed the lives of over 50,000 students.' },
                                    { icon: <BookOpen />, title: 'Latest Study Material', text: 'Our content is updated monthly to reflect the changing patterns of SSC, IBPS, and Railway exams.' },
                                    { icon: <Target />, title: 'Real-Time Mock Tests', desc: 'Simulate the actual exam environment with our periodic testing system that ranks you among thousands of peers.' },
                                    { icon: <Clock />, title: 'Doubt Clearing Sessions', text: 'Specific sessions dedicated to solving individual doubts, ensuring no student from Mithapur or Anisabad feels left behind.' }
                                ].map((feat, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '24px', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
                                        <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                            {feat.icon}
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '800', color: 'var(--primary)', marginBottom: '8px' }}>{feat.title}</h4>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{feat.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Strategic Location Advantage */}
                        <div style={{ marginBottom: '60px', backgroundColor: 'var(--primary)', color: 'white', padding: '60px', borderRadius: '40px' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '24px' }}>Strategic Location Advantage</h2>
                            <p style={{ opacity: 0.8, fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.8' }}>
                                Our center at <strong>Jagdamba Tower, Boring Road</strong> is the most accessible hub for students across Patna. Whether you are living in Mithapur, traveling from Anisabad, or coming from the Musallahpur Hat area, our center is easily reachable via public transport.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                {['Boring Road', 'Mithapur', 'Anisabad', 'Musallahpur Hat'].map((loc) => (
                                    <div key={loc} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <MapPin size={18} color="var(--accent-gold)" />
                                        <span style={{ fontWeight: '700' }}>{loc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 5. The Prayas Methodology */}
                        <div style={{ marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>Our Proven Teaching Methodology</h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                                We follow a four-tier preparation strategy. First, we focus on <strong>Concept Clarity</strong>. Many students from {areaName || locationName} struggle with basics; we address that by starting from scratch. Second is <strong>Speed and Accuracy</strong>. In exams like banking, speed is the key. We teach shortcuts and mental math techniques.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                                Third is <strong>Revision and Consolidation</strong>. We provide specific notes and summaries for quick revision. Finally, our <strong>Psychological Mentorship</strong> helps students stay motivated throughout the long preparation cycle. This is why we are considered the best {type.toUpperCase()} coaching center in Patna.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                Join Prayas Classes today and experience the difference between generic coaching and expert mentorship. Your future in the government sector begins here.
                            </p>
                        </div>

                        {/* 6. FAQ Section */}
                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '80px' }}>
                            <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--primary)', textAlign: 'center', marginBottom: '48px' }}>Frequently Asked Questions</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {faqs.map((faq, i) => (
                                    <div key={i} style={{ padding: '32px', backgroundColor: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--border-light)' }}>
                                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <HelpCircle size={24} color="var(--accent-saffron)" style={{ flexShrink: 0 }} />
                                            <h4 style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '1.1rem' }}>{faq.q}</h4>
                                        </div>
                                        <p style={{ color: 'var(--text-muted)', paddingLeft: '40px', lineHeight: '1.6' }}>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <div style={{ 
                        backgroundColor: 'var(--primary)', 
                        borderRadius: '40px', 
                        padding: '80px 40px', 
                        textAlign: 'center',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }}></div>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '24px' }}>Ready to Start Your Journey?</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 48px' }}>
                            Join the next batch at Prayas Classes. New batches starting every Monday. Call us today to book your seat!
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:09973595162" className="btn btn-accent" style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--primary)', padding: '20px 48px', fontSize: '1.1rem', fontWeight: '800' }}>
                                <Phone size={24} style={{ marginRight: '12px' }} /> CALL 99735 95162
                            </a>
                            <a href="https://wa.me/919973595162" className="btn btn-secondary" style={{ padding: '20px 48px', fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)' }}>
                                <MessageCircle size={24} style={{ marginRight: '12px', color: '#25D366' }} /> WHATSAPP US
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 991px) {
                    .grid-cols-2 { grid-template-columns: 1fr !important; }
                    section { padding: 60px 0 !important; }
                    h1 { font-size: 2.5rem !important; }
                    h2 { font-size: 1.8rem !important; }
                    .container { padding: 0 20px !important; }
                }
            `}</style>
        </div>
    );
};

export default DynamicServicePage;
