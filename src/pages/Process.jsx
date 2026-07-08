import { motion } from 'framer-motion';
import { processSteps, requiredDocuments } from '../data/processData';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import DynamicIcon from '../components/ui/DynamicIcon';
import Button from '../components/ui/Button';

export default function Process() {
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
            Application Process
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            A simple, transparent 5-step journey to your financial solution
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="How It Works"
            title="Your Path to Financial Solutions"
            description="We've simplified the process so you can focus on what matters while we handle the rest."
          />

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal via-soft-green to-royal md:-translate-x-px" />

            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.15}>
                <div
                  className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <motion.div
                    className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-royal text-white flex items-center justify-center font-bold text-lg z-10 shadow-lg shadow-royal/30"
                    whileInView={{ scale: [0.5, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {step.step}
                  </motion.div>

                  <div className="ml-16 md:ml-0 md:w-1/2">
                    <motion.div
                      className="p-6 rounded-2xl bg-light-grey border border-navy/5 card-shadow"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-royal/10 flex items-center justify-center">
                          <DynamicIcon name={step.icon} className="w-5 h-5 text-royal" />
                        </div>
                        <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Button to="/contact" variant="primary">
              Start Your Application
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-light-grey">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Documentation"
            title="Documents Required"
            description="Keep these documents ready to ensure a smooth and quick processing experience."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocuments.map((doc, index) => (
              <ScrollReveal key={doc.title} delay={index * 0.1}>
                <motion.div
                  className="p-6 rounded-2xl bg-white border border-navy/5 card-shadow text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-royal/10 flex items-center justify-center mb-4">
                    <DynamicIcon name={doc.icon} className="w-7 h-7 text-royal" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{doc.title}</h3>
                  <p className="text-muted text-sm">{doc.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
