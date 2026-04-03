import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/919973595162"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '64px',
                height: '64px',
                backgroundColor: '#25D366',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)',
                zIndex: 999,
                cursor: 'pointer',
                textDecoration: 'none'
            }}
        >
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.5)' }}
            />
            <MessageCircle size={32} />
        </motion.a>
    );
};

export default WhatsAppButton;
