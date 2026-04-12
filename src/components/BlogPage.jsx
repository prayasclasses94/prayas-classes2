import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import SEO from './SEO';
import { 
    Calendar, 
    User, 
    ArrowRight, 
    BookOpen, 
    TrendingUp, 
    Clock,
    Search
} from 'lucide-react';

const BlogPage = () => {
    const blogs = blogData;

    return (
        <div style={{ backgroundColor: '#fcfcfd', minHeight: '100vh' }}>
            <SEO 
                title="Blog | Prayas Classes Patna - Exam Prep Insights"
                description="Read latest articles, strategies, and tips for SSC, Banking, and Railway exam preparation from the expert faculty at Prayas Classes Patna."
            />

            {/* Premium Blog Hero */}
            <section style={{ 
                padding: '100px 0 60px', 
                backgroundColor: 'var(--primary)', 
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative background elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(234, 179, 8, 0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '8px', 
                                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                                padding: '8px 20px', 
                                borderRadius: '100px', 
                                fontSize: '0.85rem', 
                                fontWeight: '700',
                                letterSpacing: '0.05em',
                                marginBottom: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}>
                                <TrendingUp size={16} color="var(--accent-gold)" /> INSIGHTS & STRATEGIES
                            </span>
                            <h1 style={{ 
                                fontSize: 'clamp(3rem, 7vw, 5rem)', 
                                fontWeight: '900', 
                                lineHeight: '1', 
                                marginBottom: '24px',
                                letterSpacing: '-0.04em'
                            }}>
                                The <span style={{ color: 'var(--accent-gold)' }}>Prayas</span> Journal
                            </h1>
                            <p style={{ 
                                fontSize: '1.25rem', 
                                color: 'rgba(255, 255, 255, 0.7)', 
                                lineHeight: '1.6',
                                marginBottom: '48px'
                            }}>
                                Expert advice, exam strategies, and deep dives into subjects to help you crack government exams with confidence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Post / Filter Section */}
            <section style={{ marginTop: '-40px' }}>
                <div className="container">
                    <div style={{ 
                        backgroundColor: 'white', 
                        padding: '30px 40px', 
                        borderRadius: '24px', 
                        boxShadow: 'var(--shadow-premium)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '20px'
                    }}>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {['All Posts', 'SSC', 'Banking', 'Railway', 'English', 'Mathematics'].map((cat, i) => (
                                <button key={i} style={{
                                    padding: '10px 20px',
                                    borderRadius: '12px',
                                    border: i === 0 ? 'none' : '1px solid var(--border-light)',
                                    backgroundColor: i === 0 ? 'var(--primary)' : 'white',
                                    color: i === 0 ? 'white' : 'var(--text-main)',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                    transition: '0.3s'
                                }}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input 
                                type="text" 
                                placeholder="Search articles..." 
                                style={{
                                    padding: '12px 20px 12px 48px',
                                    borderRadius: '14px',
                                    border: '1px solid var(--border-light)',
                                    fontSize: '0.9rem',
                                    width: '280px',
                                    outline: 'none',
                                    transition: '0.3s'
                                }}
                            />
                            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section style={{ padding: '80px 0 120px' }}>
                <div className="container">
                    <div className="blog-grid" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                        gap: '40px' 
                    }}>
                        {blogs.map((blog, idx) => (
                            <motion.article
                                key={blog.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '32px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '1px solid var(--border-light)',
                                    transition: '0.4s',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
                            >
                                <Link to={`/blog/${blog.slug}`} style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                    <img 
                                        src={blog.image} 
                                        alt={blog.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{ 
                                        position: 'absolute', 
                                        top: '20px', 
                                        left: '20px', 
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                                        backdropFilter: 'blur(10px)',
                                        padding: '6px 16px', 
                                        borderRadius: '100px', 
                                        fontSize: '0.75rem', 
                                        fontWeight: '800', 
                                        color: 'var(--primary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {blog.category}
                                    </div>
                                </Link>
                                
                                <div style={{ padding: '32px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {blog.publishedDate}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {blog.readTime}</span>
                                    </div>
                                    
                                    <Link to={`/blog/${blog.slug}`} style={{ textDecoration: 'none' }}>
                                        <h3 style={{ 
                                            fontSize: '1.5rem', 
                                            fontWeight: '800', 
                                            color: 'var(--primary)', 
                                            lineHeight: '1.3', 
                                            marginBottom: '16px',
                                            flex: '1'
                                        }}>
                                            {blog.title.split('|')[0].trim()}
                                        </h3>
                                    </Link>
                                    
                                    <p style={{ 
                                        color: 'var(--text-muted)', 
                                        lineHeight: '1.6', 
                                        fontSize: '0.95rem', 
                                        marginBottom: '24px',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '3',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {blog.metaDescription}
                                    </p>
                                    
                                    <div style={{ 
                                        paddingTop: '24px', 
                                        borderTop: '1px solid var(--border-light)', 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center' 
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-warm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                                <User size={16} />
                                            </div>
                                            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--primary)' }}>{blog.author}</span>
                                        </div>
                                        <Link to={`/blog/${blog.slug}`} style={{ 
                                            color: 'var(--accent-saffron)', 
                                            fontWeight: '800', 
                                            fontSize: '0.85rem', 
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            READ MORE <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Empty State if no blogs */}
                    {blogs.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '100px 0' }}>
                            <h2 style={{ color: 'var(--primary)', fontWeight: '800' }}>Coming Soon</h2>
                            <p style={{ color: 'var(--text-muted)' }}>We are preparing exclusive strategies for you.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="container" style={{ marginBottom: '120px' }}>
                <div style={{ 
                    backgroundColor: 'var(--accent-warm)', 
                    borderRadius: '40px', 
                    padding: '80px 40px', 
                    textAlign: 'center',
                    border: '1px solid var(--border-gold)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <BookOpen size={120} style={{ position: 'absolute', top: '-20px', right: '-20px', color: 'var(--accent-gold)', opacity: 0.1 }} />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '16px' }}>Never Miss an Update</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 40px' }}>
                            Get the latest exam notifications, strategy guides, and motivational content delivered straight to your inbox.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto' }}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                style={{ 
                                    padding: '18px 24px', 
                                    borderRadius: '16px', 
                                    border: '1px solid var(--border-gold)', 
                                    flex: '1', 
                                    minWidth: '280px',
                                    outline: 'none',
                                    fontSize: '1rem'
                                }} 
                            />
                            <button className="btn" style={{ 
                                backgroundColor: 'var(--primary)', 
                                color: 'white', 
                                padding: '18px 32px', 
                                borderRadius: '16px', 
                                fontWeight: '800',
                                fontSize: '1rem'
                            }}>
                                SUBSCRIBE
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) {
                    .blog-grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important; gap: 30px !important; }
                }
                @media (max-width: 768px) {
                    .blog-grid { grid-template-columns: 1fr !important; }
                    [style*="padding: 100px 0 60px"] { padding: 80px 0 40px !important; }
                    [style*="justifyContent: space-between"] { justify-content: center !important; }
                }
            `}</style>
        </div>
    );
};

export default BlogPage;
