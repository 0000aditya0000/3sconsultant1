import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { insuranceServices } from '../data/insuranceData';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import DynamicIcon from '../components/ui/DynamicIcon';
import Button from '../components/ui/Button';

export default function Insurance() {
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
            Insurance Services
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive protection for you, your family, and your assets
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-light-grey">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Protection Plans"
            title="Secure What Matters Most"
            description="Choose from our range of insurance products designed to provide complete peace of mind."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {insuranceServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  className="group bg-white rounded-2xl border border-navy/5 card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden h-full"
                  whileHover={{ y: -8 }}
                >
                  <div className={`h-32 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <DynamicIcon
                        name={service.icon}
                        className="w-16 h-16 text-white/30"
                      />
                    </div>
                    <div className="absolute bottom-4 left-6">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                        <DynamicIcon name={service.icon} className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-royal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-navy/80">
                          <Check className="w-4 h-4 text-soft-green shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button to="/contact" variant="primary" className="!py-2.5 !text-sm">
                      Get Quote
                    </Button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
