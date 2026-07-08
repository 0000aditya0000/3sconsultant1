import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';
import { loans } from '../data/loansData';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import DynamicIcon from '../components/ui/DynamicIcon';
import Button from '../components/ui/Button';

export default function LoanServices() {
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
            Loan Services
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive loan solutions tailored to your financial needs
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-light-grey">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Products"
            title="Explore Our Loan Solutions"
            description="From personal needs to business growth, we offer a wide range of loan products with competitive rates."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {loans.map((loan, index) => (
              <ScrollReveal key={loan.id} delay={index * 0.08}>
                <motion.div
                  className="group bg-white rounded-2xl border border-navy/5 card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -6 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${loan.color}`} />
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${loan.color} flex items-center justify-center shrink-0`}
                      >
                        <DynamicIcon name={loan.icon} className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy group-hover:text-royal transition-colors">
                          {loan.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted text-sm leading-relaxed mb-5">
                      {loan.description}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {loan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-navy/80">
                          <Check className="w-4 h-4 text-soft-green shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button to="/contact" variant="primary" className="!py-2.5 !text-sm w-full sm:w-auto">
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 p-6 md:p-8 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-amber-900 mb-1">Important Note</h4>
                <p className="text-amber-800 leading-relaxed">
                  Applicants with CIBIL score below 650 may also be considered in
                  selected cases. Our team evaluates each profile individually to
                  find the best possible solution.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
