import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqData';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-navy/5 rounded-2xl bg-white overflow-hidden card-shadow">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer hover:bg-light-grey/50 transition-colors"
      >
        <span className="text-base md:text-lg font-semibold text-navy pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-8 h-8 rounded-lg bg-royal/10 flex items-center justify-center"
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-royal" />
          ) : (
            <Plus className="w-4 h-4 text-royal" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy to-royal/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Find answers to common questions about our services
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-light-grey">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            subtitle="FAQ"
            title="Got Questions? We Have Answers"
            description="Browse through our most commonly asked questions. Can't find what you're looking for? Contact us directly."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <FAQItem
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <p className="text-muted mb-4">Still have questions?</p>
            <Button to="/contact" variant="primary">
              Contact Our Team
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
