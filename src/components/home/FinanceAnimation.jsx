import { motion } from 'framer-motion';
import {
  TrendingUp,
  Shield,
  PieChart,
  DollarSign,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';

function FloatingCard({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute glass rounded-2xl p-4 card-shadow ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default function FinanceAnimation() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      <div className="absolute inset-0 bg-gradient-to-br from-royal/10 via-soft-green/5 to-royal/10 rounded-3xl" />

      <motion.div
        className="absolute inset-8 rounded-3xl bg-gradient-to-br from-navy to-navy/90 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={50 * i}
                y1="0"
                x2={50 * i + 100}
                y2="400"
                stroke="#2563EB"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 text-center p-8">
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-royal/20 flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <TrendingUp className="w-10 h-10 text-royal" />
          </motion.div>

          <motion.div
            className="flex items-end justify-center gap-2 h-24 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <motion.div
                key={i}
                className="w-6 bg-gradient-to-t from-royal to-soft-green rounded-t-md"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
              />
            ))}
          </motion.div>

          <motion.p
            className="text-white/80 text-sm font-medium"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Financial Growth
          </motion.p>
        </div>
      </motion.div>

      <FloatingCard className="top-4 -left-4 lg:-left-8" delay={0}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-soft-green/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-soft-green" />
          </div>
          <div>
            <p className="text-xs text-muted">Secure</p>
            <p className="text-sm font-bold text-navy">100% Trusted</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="top-1/4 -right-4 lg:-right-8" delay={0.5}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-royal/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-royal" />
          </div>
          <div>
            <p className="text-xs text-muted">Loans</p>
            <p className="text-sm font-bold text-navy">Approved</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-soft-green" />
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-8 -left-2 lg:-left-6" delay={1}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-royal/10 flex items-center justify-center">
            <PieChart className="w-5 h-5 text-royal" />
          </div>
          <div>
            <p className="text-xs text-muted">Portfolio</p>
            <p className="text-sm font-bold text-navy">+24.5%</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-4 -right-2 lg:-right-6" delay={1.5}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-soft-green/10 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-soft-green" />
          </div>
          <div>
            <p className="text-xs text-muted">Growth</p>
            <p className="text-sm font-bold text-navy">Steady Rise</p>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}
