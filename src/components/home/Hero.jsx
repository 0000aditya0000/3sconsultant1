import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import FinanceAnimation from './FinanceAnimation';

const highlights = [
  'Expert Financial Guidance',
  'Multiple Banking Partners',
  'Quick & Transparent Process',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-light-grey via-white to-royal/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-soft-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-royal mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-soft-green animate-pulse" />
              Trusted Financial Partner in Noida
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Your Trusted Partner for{' '}
              <span className="gradient-text">Complete Financial Solutions</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              3S Consultant helps individuals and businesses access the right loans
              and insurance solutions with simple, transparent, and reliable
              financial guidance.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button to="/contact">
                Apply For Loan
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button to="/loans" variant="secondary">
                Explore Services
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-navy/70">
                  <CheckCircle2 className="w-4 h-4 text-soft-green shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FinanceAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
