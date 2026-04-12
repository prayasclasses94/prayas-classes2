import React, { useRef } from 'react';
import { motion } from 'framer-motion';
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
    Zap,
    TrendingUp,
    Trophy,
    GraduationCap,
    Clock,
    ArrowUpRight,
    Search,
    ChevronRight,
    MapPin,
    Quote,
    User,
    ArrowRight
} from 'lucide-react';

const CoursesPage = () => {
    // Scroll refs for quick nav
    const bankingRef = useRef(null);
    const sscRef = useRef(null);
    const railwayRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
            <SEO
                title="SSC, Banking & Railway Coaching in Patna | Prayas Classes"
                description="Join structured coaching for SSC, Banking, Railway & other exams at Prayas Classes, Patna. Expert faculty, mock tests & guidance."
            />
            {/* 1. HERO SECTION (COURSES INTRO) */}
            <section className="bg-mandala" style={{
                position: 'relative',
                padding: '10px 0 100px',
                backgroundColor: 'var(--primary)',
                color: 'white',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div className="grid-cols-2" style={{ gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                backgroundColor: 'rgba(201, 162, 39, 0.15)',
                                color: 'var(--accent-gold)',
                                padding: '10px 24px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.85rem',
                                fontWeight: '800',
                                marginBottom: '32px',
                                border: '1px solid rgba(201, 162, 39, 0.2)'
                            }}>
                                <Trophy size={16} /> PREMIUM COACHING PROGRAMS
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                                fontWeight: '900',
                                color: 'white',
                                lineHeight: '1.1',
                                marginBottom: '24px',
                                letterSpacing: '-0.04em'
                            }}>
                                Courses at <br />
                                <span style={{ color: 'var(--accent-gold)' }}>Prayas Classes Patna</span>
                            </h1>

                            <p style={{
                                fontSize: '1.25rem',
                                color: 'rgba(255,255,255,0.7)',
                                marginBottom: '32px',
                                lineHeight: '1.7',
                                maxWidth: '600px'
                            }}>
                                Structured coaching programs designed to help you succeed in SSC, Banking, Railway, and other competitive exams with specialized focus at our <strong>Patna center</strong>.
                            </p>

                            <div className="font-hindi" style={{
                                fontSize: '1.4rem',
                                color: 'var(--accent-gold)',
                                marginBottom: '48px',
                                fontWeight: '500',
                                borderLeft: '4px solid var(--accent-saffron)',
                                paddingLeft: '24px'
                            }}>
                                “सही दिशा में किया गया प्रयास ही सफलता दिलाता है”
                            </div>

                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href="tel:09973595162" className="btn" style={{
                                    backgroundColor: 'var(--accent-saffron)',
                                    color: 'white',
                                    padding: '20px 40px',
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
                                    padding: '20px 40px',
                                    fontWeight: '800',
                                    borderRadius: '16px',
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
                            <div style={{
                                borderRadius: '60px',
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                                aspectRatio: '4/3',
                                border: '10px solid rgba(255,255,255,0.1)'
                            }}>
                                <img
                                    src="/assets/pictures/webp/g-15.webp"
                                    alt="Prayas Classes Study Environment"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            {/* Decorative badge */}
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                left: '40px',
                                backgroundColor: 'var(--accent-gold)',
                                color: 'var(--primary)',
                                padding: '12px 24px',
                                borderRadius: '14px',
                                fontWeight: '900',
                                boxShadow: 'var(--shadow-md)',
                                zIndex: 2
                            }}>
                                SUCCESS DRIVEN
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. COURSES OVERVIEW (QUICK NAV) */}
            <div style={{
                position: 'sticky',
                top: '80px',
                zIndex: 100,
                backgroundColor: 'white',
                borderBottom: '1px solid var(--border-light)',
                padding: '20px 0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {[
                            { name: 'Banking', ref: bankingRef, icon: <TrendingUp size={18} /> },
                            { name: 'SSC', ref: sscRef, icon: <GraduationCap size={18} /> },
                            { name: 'Railway / State', ref: railwayRef, icon: <Zap size={18} /> }
                        ].map((nav) => (
                            <button
                                key={nav.name}
                                onClick={() => scrollToSection(nav.ref)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '12px 32px',
                                    borderRadius: '14px',
                                    backgroundColor: 'var(--primary-light)',
                                    color: 'var(--primary)',
                                    border: 'none',
                                    fontWeight: '800',
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    transition: '0.3s'
                                }}
                            >
                                {nav.icon} {nav.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. BANKING COURSE (DETAILED BLOCK) */}
            <section ref={bankingRef} className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <div className="grid-cols-2" style={{ gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ color: 'var(--primary)', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '16px' }}>BANKING SPECIALIZATION</div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>Banking Preparation in Patna <br /><span style={{ color: 'var(--accent-saffron)' }}>(IBPS, SBI, RRB)</span></h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '32px' }}>
                                A complete <strong>banking preparation program in Patna</strong> focused on building strong fundamentals, improving speed and accuracy for IBPS and SBI exams.
                            </p>

                            <div style={{ marginBottom: '40px' }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px' }}>What You'll Get:</h4>
                                <div className="grid-cols-2" style={{ gap: '16px', display: 'grid' }}>
                                    {[
                                        'Concept-based classes',
                                        'Practice sessions',
                                        'Regular mock tests',
                                        'Doubt solving support'
                                    ].map(f => (
                                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                                            <CheckCircle2 size={18} color="var(--accent-saffron)" /> {f}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <BookOpen size={18} color="var(--accent-gold)" /> SUBJECTS COVERED
                                </h4>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    {['Quantitative Aptitude', 'Reasoning', 'English', 'General Awareness'].map(s => (
                                        <span key={s} style={{ padding: '6px 16px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '10px', fontSize: '0.85rem', fontWeight: '700' }}>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', aspectRatio: '1/1' }}>
                                <img src="/assets/pictures/webp/g-12.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ position: 'absolute', bottom: '30px', left: '-30px', backgroundColor: 'var(--primary)', color: 'white', padding: '24px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>90% +</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Selection Rate</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. SSC COURSE */}
            <section ref={sscRef} className="section-padding" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="grid-cols-2" style={{ gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ order: window.innerWidth < 991 ? 2 : 1 }}
                        >
                            <div style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', aspectRatio: '1/1' }}>
                                <img src="/assets/pictures/webp/g-18.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ order: window.innerWidth < 991 ? 1 : 2 }}
                        >
                            <div style={{ color: 'var(--accent-saffron)', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '16px' }}>SSC EXCELLENCE</div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>SSC Coaching in Patna <br /><span style={{ color: 'var(--accent-gold)' }}>(CGL, CHSL, MTS, CPO)</span></h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '32px' }}>
                                The <strong>best SSC coaching in Patna</strong> designed to help students master concepts and perform well in CGL and CHSL exams through structured learning.
                            </p>

                            <div className="grid-cols-2" style={{ gap: '20px', marginBottom: '40px', display: 'grid' }}>
                                {[
                                    { title: 'Complete Syllabus', icon: <BookOpen size={20} /> },
                                    { title: 'Shortcut Techniques', icon: <Zap size={20} /> },
                                    { title: 'Mock Analysis', icon: <Target size={20} /> },
                                    { title: 'Faculty Guidance', icon: <Users size={20} /> }
                                ].map((f, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ color: 'var(--accent-gold)' }}>{f.icon}</div>
                                        <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--primary)' }}>{f.title}</div>
                                    </div>
                                ))}
                            </div>

                            <a href="tel:09973595162" className="btn" style={{
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                padding: '18px 36px',
                                borderRadius: '14px',
                                fontWeight: '800',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                GET COURSE DETAILS <ArrowRight size={18} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. RAILWAY / DAROGA / OTHER EXAMS */}
            <section ref={railwayRef} className="section-padding" style={{ backgroundColor: 'var(--accent-warm)' }}>
                <div className="container">
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '40px',
                        padding: '60px',
                        boxShadow: 'var(--shadow-premium)',
                        border: '1px solid var(--border-light)'
                    }}>
                        <div className="grid-cols-2" style={{ gap: '60px', alignItems: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div style={{ color: 'var(--primary)', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '16px' }}>DIVERSE GOVT EXAMS</div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>Railway & Daroga Coaching in Patna</h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
                                    Specialized preparation for <strong>Railway and Bihar Daroga exams in Patna</strong> with focused guidance and exam-oriented practice sessions.
                                </p>
                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                                    {['Targeted Prep', 'Practice Sets', 'Concept Clarity', 'Guidance'].map(item => (
                                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '700' }}>
                                            <CheckCircle2 size={16} color="var(--accent-saffron)" /> {item}
                                        </div>
                                    ))}
                                </div>
                                <a href="https://wa.me/919973595162" className="btn" style={{
                                    border: '1px solid var(--accent-gold)',
                                    color: 'var(--primary)',
                                    padding: '16px 32px',
                                    borderRadius: '12px',
                                    fontWeight: '800',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    CONTACT FOR DETAILS <MessageCircle size={18} />
                                </a>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <img src="/assets/pictures/webp/g-22.webp" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FACULTY SUPPORT (Subject-Teacher Mapping) */}
            <section className="section-padding" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Learn from <span style={{ color: 'var(--accent-saffron)' }}>Experienced Faculty</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>Each subject is taught by specialized faculty with a focus on conceptual clarity and exam performance.</p>
                    </div>

                    <div className="grid-cols-4" style={{ gap: '24px' }}>
                        {[
                            { name: 'Ajay Kr Singh', sub: 'English Mastery', img: '/assets/pictures/webp/t-3.webp' },
                            { name: 'Panna Lal', sub: 'Mathematics Specialist', img: '/assets/pictures/webp/t-2.webp' },
                            { name: 'Bhanu Sir', sub: 'General Studies Guru', img: '/assets/pictures/webp/t-1.webp' },
                            { name: 'Saroj Sir', sub: 'Reasoning Expert', img: '/assets/pictures/webp/t-4.webp' }
                        ].map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    backgroundColor: 'var(--surface)',
                                    borderRadius: '32px',
                                    padding: '12px',
                                    textAlign: 'center',
                                    border: '1px solid var(--border-light)',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                            >
                                <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '20px', aspectRatio: '4/5', backgroundColor: '#ddd' }}>
                                    <img src={m.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '4px' }}>{m.name}</h4>
                                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--accent-saffron)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. OUR TEACHING SYSTEM (PREMIUM FEEL) */}
            <section className="section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative background shapes */}
                <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(201, 162, 39, 0.1) 0%, transparent 70%)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '16px' }}>Our <span style={{ color: 'var(--accent-gold)' }}>Teaching Approach</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>A structured 4-step framework designed for maximum retention and result delivery.</p>
                    </div>

                    <div className="grid-cols-4" style={{ gap: '32px' }}>
                        {[
                            { step: '01', title: 'Concept Building', desc: 'Starting from the scratch to build a rock-solid foundation in every subject.', icon: <BookOpen /> },
                            { step: '02', title: 'Practice & Application', desc: 'Applying concepts to real-world exam problems with speed-optimized techniques.', icon: <Zap /> },
                            { step: '03', title: 'Regular Mock Tests', desc: 'Weekly simulated exams to build endurance and identify weak areas.', icon: <Target /> },
                            { step: '04', title: 'Performance Analysis', desc: 'Detailed 1-on-1 feedback and strategy adjustments based on test results.', icon: <TrendingUp /> }
                        ].map((s, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    padding: '40px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                    borderRadius: '32px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    position: 'relative'
                                }}
                            >
                                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255, 255, 255, 0.05)', position: 'absolute', top: '20px', right: '30px' }}>{s.step}</div>
                                <div style={{ color: 'var(--accent-gold)', marginBottom: '24px' }}>{React.cloneElement(s.icon, { size: 40 })}</div>
                                <h4 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '16px' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }}>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. WHY OUR COURSES WORK */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>Why Our <span style={{ color: 'var(--accent-saffron)' }}>Courses Work</span></h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
                                At Prayas Classes, we don't just teach subjects; we build careers. Our success metrics are driven by a student-first philosophy.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { label: 'Experienced Faculty', icon: <Users size={20} /> },
                                    { label: 'Structured Learning', icon: <GraduationCap size={20} /> },
                                    { label: 'Regular Testing', icon: <Target size={20} /> },
                                    { label: 'Personal Attention', icon: <Award size={20} /> }
                                ].map(p => (
                                    <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', backgroundColor: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                                        <div style={{ color: 'var(--accent-saffron)' }}>{p.icon}</div>
                                        <div style={{ fontWeight: '800', color: 'var(--primary)' }}>{p.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid-cols-2" style={{ gap: '24px', display: 'grid' }}>
                            {[
                                { val: '15+', label: 'Years of Legacy', color: 'var(--primary)' },
                                { val: '5k+', label: 'Successful Selections', color: 'var(--accent-saffron)' },
                                { val: '50+', label: 'Mock Tests/Course', color: 'var(--accent-gold)' },
                                { val: '24/7', label: 'Doubt Support', color: 'var(--primary)' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        padding: '40px',
                                        backgroundColor: 'white',
                                        borderRadius: '32px',
                                        boxShadow: 'var(--shadow-md)',
                                        textAlign: 'center',
                                        border: `1px solid var(--border-light)`
                                    }}
                                >
                                    <div style={{ fontSize: '2.5rem', fontWeight: '900', color: stat.color, marginBottom: '8px' }}>{stat.val}</div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: '800', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CLASSROOM / COURSE EXPERIENCE GALLERY */}
            <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Learning Experience</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A disciplined, focused, and supportive environment that makes learning effective and result-oriented.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', gridAutoRows: '280px' }}>
                        <div style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <img src="/assets/pictures/webp/g-1.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ gridColumn: 'span 2', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <img src="/assets/pictures/webp/g-5.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <img src="/assets/pictures/webp/g-8.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <img src="/assets/pictures/webp/g-11.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. TESTIMONIALS (COURSE-SPECIFIC) */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Student <span style={{ color: 'var(--accent-saffron)' }}>Feedback</span></h2>
                    </div>

                    <div className="grid-cols-3" style={{ gap: '30px' }}>
                        {[
                            { quote: "Best coaching for SSC preparation in Patna. The strategy for English by Ajay Sir is unmatched.", author: "Rahul Kumar", course: "SSC CGL Batch" },
                            { quote: "The banking concepts are taught with so much clarity. My speed in Quant improved significantly.", author: "Priya Singh", course: "Banking Mastery" },
                            { quote: "Excellent environment for serious students. The regular mock tests keep you on track.", author: "Amit Verma", course: "Railway Prep" }
                        ].map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    padding: '40px',
                                    backgroundColor: 'white',
                                    borderRadius: '32px',
                                    border: '1px solid var(--border-light)',
                                    boxShadow: 'var(--shadow-premium)',
                                    position: 'relative'
                                }}
                            >
                                <Quote size={40} color="var(--accent-saffron)" style={{ opacity: 0.1, position: 'absolute', top: '30px', left: '30px' }} />
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '32px', fontStyle: 'italic', position: 'relative' }}>
                                    "{t.quote}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '900', color: 'var(--primary)' }}>{t.author}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--accent-saffron)', fontWeight: '700' }}>{t.course}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. FINAL CTA (HIGH CONVERSION) */}
            <section className="section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            backgroundColor: 'var(--accent-saffron)',
                            borderRadius: '48px',
                            padding: '100px 60px',
                            textAlign: 'center',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(194, 65, 12, 0.3)'
                        }}
                    >
                        <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}></div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', marginBottom: '24px', lineHeight: '1.1' }}>
                                Choose the Right Course and <br />Start Preparing Today
                            </h2>
                            <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 48px' }}>
                                Get guidance from experienced faculty and stay on the right track to achieve your government job dream.
                            </p>
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="tel:09973595162" className="btn" style={{
                                    backgroundColor: 'white',
                                    color: 'var(--accent-saffron)',
                                    padding: '20px 40px',
                                    borderRadius: '16px',
                                    fontWeight: '900',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <Phone size={20} /> CALL NOW
                                </a>
                                <a href="https://wa.me/919973595162" className="btn" style={{
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    padding: '20px 40px',
                                    borderRadius: '16px',
                                    fontWeight: '900',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <MessageCircle size={20} /> WHATSAPP
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STICKY BOTTOM BAR (MOBILE ONLY) */}
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
                    .grid-cols-2, .grid-cols-3, .grid-cols-4 { grid-template-columns: 1fr !important; gap: 40px !important; }
                    section { padding: 80px 0 !important; }
                    h1 { font-size: 2.75rem !important; }
                    h2 { font-size: 2.25rem !important; }
                    
                    div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    div[style*="height: 400px"] { display: none; }
                    
                    .mobile-sticky-bar { display: flex !important; }
                    
                    /* Adjust sticky nav top for mobile */
                    div[style*="top: 80px"] { top: 70px !important; }
                }

                @media (max-width: 640px) {
                    div[style*="gridTemplateColumns: repeat(4, 1fr)"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default CoursesPage;
