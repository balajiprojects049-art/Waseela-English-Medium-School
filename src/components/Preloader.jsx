import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated rings */}
      <div style={{ position: 'relative', width: 80, height: 80, marginBottom: 24 }}>
        <motion.div
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: '#C8A951',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          style={{
            position: 'absolute', inset: 10, borderRadius: '50%',
            border: '3px solid transparent',
            borderTopColor: 'rgba(200,169,81,0.4)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <div style={{
          position: 'absolute', inset: 20, borderRadius: '50%',
          background: 'rgba(200,169,81,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ fontSize: 22 }}>📚</span>
        </div>
      </div>

      <div className="preloader-logo">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Waseela
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'Poppins', fontWeight: 400 }}
        >
          English Medium School
        </motion.div>
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
    </motion.div>
  );
}
