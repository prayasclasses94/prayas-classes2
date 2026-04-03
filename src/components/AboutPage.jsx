import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import {
    Phone,
    MessageCircle,
    CheckCircle2,
    Award,
    Star,
    BookOpen,
    Users,
    Target,
    Eye,
    Compass,
    ChevronRight,
    ArrowUpRight,
    Clock,
    Zap,
    MapPin,
    Quote,
    User,
    ShieldCheck
} from 'lucide-react';

const AboutPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const facultyImages = [
        '/assets/pictures/webp/t-1.webp',
        '/assets/pictures/webp/t-2.webp',
        '/assets/pictures/webp/t-3.webp',
        '/assets/pictures/webp/t-4.webp'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % facultyImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
            <SEO 
                title="About Prayas Classes | SSC & Banking Coaching in Patna"
                description="Know more about Prayas Classes, a trusted coaching institute in Patna with experienced faculty and a strong track record in SSC & Banking preparation."
            />
            {/* 1. Hero Section (About Intro) */}
            <section className="bg-mandala" style={{
                position: 'relative',
                padding: '160px 0 100px',
                backgroundColor: 'var(--accent-warm)',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div className="grid-cols-2 hero-grid" style={{ gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                backgroundColor: 'rgba(194, 65, 12, 0.08)',
                                color: 'var(--accent-saffron)',
                                padding: '10px 24px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.85rem',
                                fontWeight: '800',
                                marginBottom: '32px',
                                border: '1px solid rgba(194, 65, 12, 0.1)'
                            }}>
                                <Award size={16} /> ESTABLISHED LEGACY
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                fontWeight: '900',
                                color: 'var(--primary)',
                                lineHeight: '1.1',
                                marginBottom: '24px',
                                letterSpacing: '-0.04em'
                            }}>
                                About <span style={{ color: 'var(--accent-saffron)' }}>Prayas</span> Classes
                            </h1>

                            <p style={{
                                fontSize: '1.15rem',
                                color: 'var(--text-muted)',
                                marginBottom: '32px',
                                lineHeight: '1.7',
                                maxWidth: '600px'
                            }}>
                                Prayas Classes is a <strong>trusted institute in Patna</strong> dedicated to <strong>SSC and Banking preparation</strong>. We provide expert guidance with an <strong>experienced faculty</strong> team to help students clear government exams.
                            </p>

                            <div className="font-hindi" style={{
                                fontSize: '1.25rem',
                                color: 'var(--accent-gold)',
                                marginBottom: '48px',
                                fontWeight: '500',
                                borderLeft: '4px solid var(--accent-saffron)',
                                paddingLeft: '24px'
                            }}>
                                “जहां मिलता है सही मार्गदर्शन, वहीं से शुरू होती है सफलता की कहानी”
                            </div>

                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <a href="tel:09973595162" className="btn" style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    padding: '16px 32px',
                                    fontWeight: '800',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <Phone size={20} /> CALL NOW
                                </a>
                                <a href="https://wa.me/919973595162" className="btn" style={{
                                    backgroundColor: 'white',
                                    color: 'var(--primary)',
                                    padding: '16px 32px',
                                    fontWeight: '800',
                                    borderRadius: '16px',
                                    border: '1px solid var(--border-gold)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <MessageCircle size={20} /> WHATSAPP
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            <div className="portrait-wrapper" style={{
                                position: 'relative',
                                zIndex: 1,
                                borderRadius: '60px',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-premium)',
                                aspectRatio: '4/5',
                                filter: 'sepia(0.05) saturate(1.1)',
                                backgroundColor: '#f0f0f0'
                            }}>
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentImageIndex}
                                        src={facultyImages[currentImageIndex]}
                                        initial={{ x: 300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        alt={`Faculty Member ${currentImageIndex + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                                    />
                                </AnimatePresence>
                            </div>
                            <div className="experience-badge" style={{
                                position: 'absolute',
                                bottom: '-20px',
                                left: '-20px',
                                backgroundColor: 'white',
                                padding: '24px',
                                borderRadius: '24px',
                                boxShadow: 'var(--shadow-lg)',
                                border: '1px solid var(--border-gold)',
                                zIndex: 2
                            }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--accent-saffron)', lineHeight: 1 }}>15+</div>
                                <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Excellence</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. OUR JOURNEY (STORY SECTION) */}
            <section className="section-padding bg-mandala" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '32px' }}>Our Journey</h2>
                            <div className="ornamental-divider" style={{ marginBottom: '48px' }}></div>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '24px' }}>
                                Prayas Classes was built with a simple vision — to provide the right guidance to students preparing for competitive exams.
                            </p>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '24px' }}>
                                Over the years, we have helped hundreds of aspirants strengthen their concepts, improve their performance, and move closer to their goals.
                            </p>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                Our focus has always been on disciplined preparation, conceptual clarity, and continuous support.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. MISSION & VISION (PREMIUM BLOCK) */}
            <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <div className="grid-cols-2" style={{ gap: '32px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '60px 48px',
                                backgroundColor: 'white',
                                borderRadius: '40px',
                                boxShadow: 'var(--shadow-premium)',
                                border: '1px solid var(--border-light)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05 }}>
                                <Target size={150} color="var(--primary)" />
                            </div>
                            <div style={{ color: 'var(--accent-saffron)', marginBottom: '32px' }}><Target size={40} /></div>
                            <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>Our Mission</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.15rem' }}>
                                To provide structured, concept-based coaching that helps students confidently clear competitive exams.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                padding: '60px 48px',
                                backgroundColor: 'white',
                                borderRadius: '40px',
                                boxShadow: 'var(--shadow-premium)',
                                border: '1px solid var(--border-light)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05 }}>
                                <Eye size={150} color="var(--primary)" />
                            </div>
                            <div style={{ color: 'var(--accent-gold)', marginBottom: '32px' }}><Eye size={40} /></div>
                            <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>Our Vision</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.15rem' }}>
                                To become a trusted name in government exam preparation by consistently guiding students towards success.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. WHY STUDENTS TRUST US */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Why Students Trust Us</h2>
                        <div className="ornamental-divider" style={{ margin: '0 auto', width: '200px' }}></div>
                    </div>

                    <div className="grid-cols-4" style={{ gap: '24px' }}>
                        {[
                            { icon: <Users />, title: 'Experienced Faculty', desc: 'Guidance from teachers with decades of expertise.' },
                            { icon: <BookOpen />, title: 'Structured Prep', desc: 'Well-planned curriculum covering every exam aspect.' },
                            { icon: <Target />, title: 'Regular Mock Tests', desc: 'Frequent testing to track and improve performance.' },
                            { icon: <Star />, title: 'Personal Guidance', desc: 'Individual attention to solve every student doubt.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '40px 32px',
                                    backgroundColor: 'white',
                                    borderRadius: '30px',
                                    textAlign: 'center',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                    border: '1px solid var(--border-light)',
                                    transition: 'var(--transition-base)'
                                }}
                                whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    backgroundColor: 'var(--primary-light)',
                                    color: 'var(--primary)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 24px'
                                }}>
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FACULTY SECTION (CORE OF THIS PAGE) */}
            <section className="section-padding" style={{ backgroundColor: 'var(--accent-warm)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Meet Our Elite Faculty</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The pillars of Prayas Classes committed to your excellence.</p>
                    </div>

                    <div className="grid-cols-4" style={{ gap: '30px' }}>
                        {[
                            { name: 'Ajay Kr Singh', subject: 'English', desc: 'Known for simplifying English concepts', img: '/assets/pictures/webp/t-3.webp' },
                            { name: 'Panna Lal', subject: 'Mathematics', desc: 'Strong foundation in mathematics', img: '/assets/pictures/webp/t-2.webp' },
                            { name: 'Bhanu Sir', subject: 'General Studies', desc: 'Practical approach to general studies', img: '/assets/pictures/webp/t-1.webp' },
                            { name: 'Saroj Sir', subject: 'Reasoning', desc: 'Clear and logical reasoning methods', img: '/assets/pictures/webp/t-4.webp' }
                        ].map((faculty, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '32px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '1px solid var(--border-light)'
                                }}
                            >
                                <div style={{ height: '320px', overflow: 'hidden' }}>
                                    <img
                                        src={faculty.img}
                                        alt={faculty.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.6s' }}
                                    />
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <div className="font-script" style={{ fontSize: '1.75rem', color: 'var(--accent-saffron)', marginBottom: '4px' }}>{faculty.name}</div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{faculty.subject}</div>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{faculty.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SPECIAL SPOTLIGHT (AJAY SIR) */}
            <section className="section-padding overflow-hidden" style={{ position: 'relative', backgroundColor: 'var(--accent-warm)' }}>
                <div className="container">
                    <div className="grid-cols-2" style={{ gap: '100px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    borderRadius: '48px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-premium)',
                                    aspectRatio: '4/5',
                                    border: '1px solid var(--border-gold)',
                                    backgroundColor: 'white'
                                }}>
                                    <img
                                        src="/assets/pictures/webp/ajay-sir.webp"
                                        alt="Ajay Kumar Singh teaching"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    top: '40px',
                                    right: '-40px',
                                    backgroundColor: 'var(--accent-saffron)',
                                    color: 'white',
                                    padding: '20px 30px',
                                    borderRadius: '24px',
                                    boxShadow: 'var(--shadow-lg)',
                                    zIndex: 2
                                }}>
                                    <Quote size={32} opacity={0.5} />
                                    <div style={{ fontSize: '1.25rem', fontWeight: '900', marginTop: '10px' }}>Ex-Chief Editor <br /> Arihant</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{ color: 'var(--accent-saffron)', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '16px' }}>MASTER MENTOR</div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '32px', lineHeight: '1.1' }}>
                                A Legacy of Excellence in <br />
                                <span style={{ color: 'var(--accent-saffron)' }}>Competitive English</span>
                            </h2>
                            
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '32px' }}>
                                Ajay Kumar Singh is a renowned English mentor for competitive exams, with a legacy spanning over two decades. As the Founder & Managing Director of MB Books Pvt. Ltd. and former Chief Editor at Arihant Publications, he has played a key role in shaping English preparation for thousands of aspirants across India.
                            </p>

                            {/* Authority Block Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
                                {[
                                    { icon: <BookOpen />, title: '200+', label: 'Books Authored' },
                                    { icon: <Users />, title: '50k+', label: 'Student Selections' },
                                    { icon: <Award />, title: '20+', label: 'Years Experience' },
                                    { icon: <ShieldCheck />, title: 'Arihant', label: 'Ex-Chief Editor' }
                                ].map((stat, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-saffron)', boxShadow: 'var(--shadow-sm)' }}>
                                            {React.cloneElement(stat.icon, { size: 20 })}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '1.1rem' }}>{stat.title}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '40px' }}>
                                His approach focuses on simplifying complex grammar, improving accuracy, and building confidence for real exams. Students across SSC, Banking, NDA, CDS, and MBA exams have benefited from his structured and practical teaching style.
                            </p>

                            <Link to="/ajay-singh" className="btn" style={{
                                border: '1.5px solid var(--accent-saffron)',
                                color: 'var(--accent-saffron)',
                                padding: '16px 40px',
                                fontWeight: '900',
                                borderRadius: '16px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                textDecoration: 'none',
                                transition: '0.3s'
                            }}>
                                FULL PROFILE & BOOKS <ArrowUpRight size={18} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. TEACHING APPROACH */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'white', marginBottom: '16px' }}>Our Teaching Approach</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>A scientific methodology designed for maximum results.</p>
                    </div>

                    <div className="grid-cols-4" style={{ gap: '24px' }}>
                        {[
                            { step: '01', title: 'Concept Clarity', desc: 'Starting from the basics to ensure a rock-solid foundation.' },
                            { step: '02', title: 'Practice & Application', desc: 'Extensive problem-solving sessions for real-world exam patterns.' },
                            { step: '03', title: 'Regular Testing', desc: 'Weekly mock tests to gauge progress and improve speed.' },
                            { step: '04', title: 'Performance Improvement', desc: 'One-on-one analysis to fix recurring mistakes.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '40px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    borderRadius: '30px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ fontSize: '4rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '10px', lineHeight: 1 }}>{item.step}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '16px', position: 'relative', zIndex: 1 }}>{item.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CLASSROOM / ENVIRONMENT PREVIEW */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Learning Environment</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A focused and supportive environment that helps students stay disciplined and motivated.</p>
                    </div>

                    <div className="classroom-grid">
                        <div className="classroom-item main">
                            <img src="/assets/pictures/webp/g-5.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Classroom view" />
                        </div>
                        <div className="classroom-item">
                            <img src="/assets/pictures/webp/g-8.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Study environment" />
                        </div>
                        <div className="classroom-item">
                            <img src="/assets/pictures/webp/g-12.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Interactive session" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. TESTIMONIAL HIGHLIGHT */}
            <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>What Students Say</h2>
                        <div className="ornamental-divider" style={{ margin: '0 auto', width: '150px' }}></div>
                    </div>

                    <div className="grid-cols-3" style={{ gap: '30px' }}>
                        {[
                            { name: 'Rahul Kumar', text: 'Best coaching for SSC & Banking in Patna. The conceptual clarity I got here is unmatched.' },
                            { name: 'Suman Kumari', text: 'English faculty is excellent. Ajay Sir makes even the most difficult grammar rules feel easy.' },
                            { name: 'Amit Singh', text: 'Supportive teachers and a very disciplined environment. Highly recommended for serious aspirants.' }
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '40px',
                                    backgroundColor: 'white',
                                    borderRadius: '30px',
                                    boxShadow: 'var(--shadow-md)',
                                    position: 'relative'
                                }}
                            >
                                <Quote size={40} style={{ color: 'var(--accent-gold)', opacity: 0.2, position: 'absolute', top: '20px', left: '20px' }} />
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                                    "{testimonial.text}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                        <User size={20} />
                                    </div>
                                    <div style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '0.95rem' }}>{testimonial.name}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FINAL CTA (IMPORTANT) */}
            <section className="section-padding bg-mandala" style={{ backgroundColor: 'var(--accent-warm)', borderTop: '1px solid var(--border-gold)' }}>
                <div className="container">
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '40px',
                        padding: '80px 40px',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-premium)',
                        border: '1px solid var(--border-gold)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative background element */}
                        <div style={{ position: 'absolute', top: '-100px', left: '-100px', opacity: 0.03 }}>
                            <Award size={300} color="var(--accent-gold)" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>
                                Start Your Preparation with the <br />
                                <span style={{ color: 'var(--accent-saffron)' }}>Right Guidance</span>
                            </h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 48px', lineHeight: '1.7' }}>
                                Connect with us today and take the next step towards your goal. Join the hundreds of successful aspirants who started their journey at Prayas Classes.
                            </p>

                            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="tel:09973595162" className="btn" style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    padding: '20px 48px',
                                    fontWeight: '800',
                                    borderRadius: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '1.1rem'
                                }}>
                                    <Phone size={24} /> CALL ADMISSIONS
                                </a>
                                <a href="https://wa.me/919973595162" className="btn" style={{
                                    backgroundColor: 'var(--secondary)',
                                    color: 'white',
                                    padding: '20px 48px',
                                    fontWeight: '800',
                                    borderRadius: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontSize: '1.1rem'
                                }}>
                                    <MessageCircle size={24} /> WHATSAPP NOW
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                .classroom-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    grid-auto-rows: 250px;
                }
                .classroom-item {
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                }
                .classroom-item.main {
                    grid-column: span 2;
                    grid-row: span 2;
                }

                @media (max-width: 991px) {
                    .grid-cols-2, .grid-cols-3, .grid-cols-4 { grid-template-columns: 1fr !important; gap: 32px !important; }
                    section { padding: 60px 0 !important; }
                    h1 { font-size: 2.75rem !important; }
                    h2 { font-size: 2rem !important; }
                    
                    .hero-grid { gap: 48px !important; }
                    .portrait-wrapper { border-radius: 40px !important; }
                    .experience-badge { left: 10px !important; bottom: 10px !important; padding: 16px !important; zoom: 0.8; }
                    
                    .classroom-grid {
                        grid-template-columns: 1fr !important;
                        grid-auto-rows: 250px !important;
                    }
                    .classroom-item.main {
                        grid-column: span 1 !important;
                        grid-row: span 1 !important;
                    }

                    /* Special handlers for specific absolute elements */
                    div[style*="right: -40px"] {
                        right: 10px !important;
                        top: 20px !important;
                        zoom: 0.8;
                    }

                    /* Hide large decorative circles on mobile to prevent overflow */
                    div[style*="width: 600px"] {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
