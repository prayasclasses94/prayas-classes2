import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--surface)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ marginBottom: '32px' }}
          >
            <div style={{
              width: '120px',
              height: '120px',
              backgroundColor: 'white',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden'
            }}>
              <img src="/logo.png" alt="Prayas Classes Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: 'var(--text-main)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              Prayas Classes
            </h2>
            <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '0.02em' }}>Preparing Future Officers</p>
          </motion.div>

          {/* Progress Bar */}
          <div style={{
            width: '200px',
            height: '4px',
            backgroundColor: 'var(--surface-muted)',
            borderRadius: '2px',
            marginTop: '32px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                backgroundColor: 'var(--primary)',
                boxShadow: '0 0 10px var(--primary-light)'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
