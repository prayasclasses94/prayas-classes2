import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';
import SEO from './SEO';
import { 
    Calendar, 
    User, 
    ArrowLeft, 
    Clock, 
    Share2, 
    Bookmark, 
    ChevronRight,
    MessageCircle,
    Phone
} from 'lucide-react';

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogData.find(p => p.slug === slug);

    if (!post) {
        return (
            <div style={{ padding: '160px 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)' }}>Post Not Found</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>The article you are looking for does not exist.</p>
                <Link to="/blog" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowLeft size={20} /> BACK TO JOURNAL
                </Link>
            </div>
        );
    }

    const renderContent = (item, index) => {
        switch (item.type) {
            case 'h1':
                return <h1 key={index} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: 'var(--primary)', marginBottom: '32px', lineHeight: '1.1', letterSpacing: '-0.04em' }}>{item.text}</h1>;
            case 'h2':
                return <h2 key={index} style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary)', marginTop: '60px', marginBottom: '24px' }}>{item.text}</h2>;
            case 'h3':
                return <h3 key={index} style={{ fontSize: '1.7rem', fontWeight: '800', color: 'var(--primary)', marginTop: '40px', marginBottom: '20px' }}>{item.text}</h3>;
            case 'p':
                return <p key={index} style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '24px', opacity: 0.9 }}>{item.text}</p>;
            case 'list':
                return (
                    <ul key={index} style={{ marginBottom: '32px', listStyle: 'none', padding: 0 }}>
                        {item.items.map((li, i) => (
                            <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                                <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                                <span>{li}</span>
                            </li>
                        ))}
                    </ul>
                );
            case 'cta':
                return (
                    <Link key={index} to={item.link} style={{ 
                        display: 'block', 
                        padding: '32px', 
                        backgroundColor: 'var(--accent-warm)', 
                        borderRadius: '24px', 
                        border: '1px solid var(--border-gold)',
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        fontWeight: '800',
                        fontSize: '1.2rem',
                        textAlign: 'center',
                        margin: '48px 0',
                        boxShadow: '0 10px 20px rgba(201, 162, 39, 0.1)',
                        transition: '0.3s'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.backgroundColor = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = 'var(--accent-warm)';
                    }}
                    >
                        {item.text}
                    </Link>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            <SEO 
                title={post.title}
                description={post.metaDescription}
            />

            {/* Reading Progress Bar Placeholder (can be implemented with JS) */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '4px', backgroundColor: 'var(--accent-gold)', zIndex: 2000 }}></div>

            {/* Post Hero */}
            <header style={{ padding: '80px 0 40px', backgroundColor: '#fcfcfd' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-saffron)', fontWeight: '800', fontSize: '0.9rem', marginBottom: '32px', letterSpacing: '0.05em' }}>
                            <ArrowLeft size={18} /> THE PRAYAS JOURNAL
                        </Link>
                        
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                            <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase' }}>{post.category}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}><Clock size={14} /> {post.readTime}</span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '900', color: 'var(--primary)', lineHeight: '1.1', letterSpacing: '-0.04em', marginBottom: '32px' }}>
                            {post.title.split('|')[0].trim()}
                        </h1>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', paddingBottom: '32px', borderBottom: '1px solid var(--border-light)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid var(--border-gold)' }}>
                                    <User size={24} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '1rem' }}>{post.author}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>Official Education Insights</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-muted)' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: '700' }}><Calendar size={18} /> {post.publishedDate}</span>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}><Share2 size={20} /></button>
                                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}><Bookmark size={20} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Post Full Image */}
            <section className="container" style={{ marginTop: '-40px', marginBottom: '80px' }}>
                <div style={{ 
                    width: '100%', 
                    height: 'clamp(300px, 60vh, 600px)', 
                    borderRadius: '40px', 
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-premium)'
                }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </section>

            {/* Content Body */}
            <article className="container" style={{ paddingBottom: '120px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '80px', maxWidth: '1200px', margin: '0 auto' }}>
                    
                    {/* Main Content */}
                    <div>
                        {post.content.map((item, i) => renderContent(item, i))}
                        
                        {/* Author Bio Footer */}
                        <div style={{ marginTop: '80px', padding: '48px', backgroundColor: 'var(--surface)', borderRadius: '32px', border: '1px solid var(--border-light)' }}>
                            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid var(--border-gold)', flexShrink: 0 }}>
                                    <User size={40} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '8px' }}>About {post.author}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                        Prayas Classes is Patna's premier coaching institute for SSC, Banking, and Railway exams. We are committed to providing structured guidance and expert mentorship to help students achieve their government career goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="hide-mobile">
                        <div style={{ position: 'sticky', top: '120px' }}>
                            {/* Newsletter Mini */}
                            <div style={{ padding: '32px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '24px', marginBottom: '32px' }}>
                                <h4 style={{ fontWeight: '800', marginBottom: '16px' }}>Exam Alerts</h4>
                                <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '24px' }}>Get the latest CGL 2026 notifications directly.</p>
                                <input type="email" placeholder="Your email" style={{ width: '100%', padding: '12px 16px', marginBottom: '16px', borderRadius: '12px', border: 'none', fontSize: '0.9rem' }} />
                                <button className="btn" style={{ width: '100%', backgroundColor: 'var(--accent-gold)', color: 'var(--primary)', fontWeight: '800', padding: '12px' }}>SUBSCRIBE</button>
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <a href="tel:09973595162" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', borderRadius: '16px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--primary)', fontWeight: '800' }}>
                                    <Phone size={20} color="var(--accent-saffron)" /> Admission Helplines
                                </a>
                                <a href="https://wa.me/919973595162" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', borderRadius: '16px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--primary)', fontWeight: '800' }}>
                                    <MessageCircle size={20} color="#25D366" /> WhatsApp Support
                                </a>
                            </div>
                        </div>
                    </aside>

                </div>
            </article>

            <style>{`
                @media (max-width: 991px) {
                    [style*="gridTemplateColumns: 1fr 300px"] { grid-template-columns: 1fr !important; }
                    .hide-mobile { display: none !important; }
                    header { padding: 120px 0 60px !important; }
                }
            `}</style>
        </div>
    );
};

export default BlogPostPage;
