import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';

const AreaNavigation = () => {
    const locations = [
        { name: 'Patna Center', path: '/ssc-coaching-patna' },
        { name: 'Boring Road', path: '/ssc-coaching-boring-road' },
        { name: 'Mithapur', path: '/ssc-coaching-mithapur' },
        { name: 'Anisabad', path: '/ssc-coaching-anisabad' },
        { name: 'Musallahpur Hat', path: '/ssc-coaching-musallahpur-hat' }
    ];

    const services = [
        { name: 'SSC Coaching', path: '/ssc-coaching-patna' },
        { name: 'Banking Coaching', path: '/banking-coaching-patna' },
        { name: 'Railway Coaching', path: '/railway-coaching-patna' }
    ];

    return (
        <section style={{ padding: '60px 0', backgroundColor: 'var(--surface)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    
                    {/* Areas Wrapped */}
                    <div style={{ padding: '40px', backgroundColor: 'white', borderRadius: '32px', boxShadow: 'var(--shadow-sm)' }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <MapPin size={20} color="var(--accent-saffron)" /> AREAS WE SERVE
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {locations.map((loc) => (
                                <Link 
                                    key={loc.name} 
                                    to={loc.path} 
                                    style={{ 
                                        padding: '10px 20px', 
                                        backgroundColor: 'var(--primary-light)', 
                                        color: 'var(--primary)', 
                                        borderRadius: '12px', 
                                        fontSize: '0.85rem', 
                                        fontWeight: '700',
                                        transition: '0.3s',
                                        border: '1px solid transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--primary)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--primary-light)';
                                        e.currentTarget.style.color = 'var(--primary)';
                                    }}
                                >
                                    {loc.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Programs */}
                    <div style={{ padding: '40px', backgroundColor: 'white', borderRadius: '32px', boxShadow: 'var(--shadow-sm)' }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>EXAM PREPARATION</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {services.map((ser) => (
                                <Link 
                                    key={ser.name} 
                                    to={ser.path} 
                                    style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center', 
                                        padding: '16px 24px', 
                                        borderRadius: '16px', 
                                        border: '1px solid var(--border-light)', 
                                        fontWeight: '700',
                                        color: 'var(--text-main)',
                                        transition: '0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-gold)';
                                        e.currentTarget.style.backgroundColor = 'var(--accent-warm)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-light)';
                                        e.currentTarget.style.backgroundColor = 'white';
                                    }}
                                >
                                    {ser.name} <ChevronRight size={18} color="var(--accent-gold)" />
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AreaNavigation;
