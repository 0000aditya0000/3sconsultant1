import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-navy text-white shadow-lg shadow-navy/30 flex items-center justify-center hover:bg-royal transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="tel:9810105358"
        className="w-12 h-12 rounded-full bg-royal text-white shadow-lg shadow-royal/30 flex items-center justify-center hover:bg-royal-dark transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </motion.a>

      <motion.a
        href="https://wa.me/919810105358"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
