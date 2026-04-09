import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="floating-actions">
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="floating-btn floating-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="tel:+917901314488"
        className="floating-btn floating-call"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Call us"
        title="Call Us"
      >
        <Phone size={20} />
      </motion.a>

      <motion.a
        href="https://wa.me/917901314488?text=Hello%2C%20I%20am%20interested%20in%20admission%20at%20Waseela%20English%20Medium%20School."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
      </motion.a>
    </div>
  );
}
