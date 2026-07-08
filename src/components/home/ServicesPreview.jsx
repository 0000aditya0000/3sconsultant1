import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { popularServices } from '../../data/homeData';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';
import DynamicIcon from '../ui/DynamicIcon';
import Button from '../ui/Button';

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-light-grey">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Our Services"
          title="Popular Financial Solutions"
          description="Explore our most sought-after loan and insurance products designed to meet diverse financial needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Link to={service.path}>
                <motion.div
                  className="group p-6 md:p-8 rounded-2xl bg-white border border-navy/5 card-shadow hover:card-shadow-hover transition-all duration-300 h-full"
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal/10 to-soft-green/10 flex items-center justify-center group-hover:from-royal group-hover:to-royal-dark transition-all duration-300">
                      <DynamicIcon
                        name={service.icon}
                        className="w-7 h-7 text-royal group-hover:text-white transition-colors"
                      />
                    </div>
                    <ArrowRight className="w-5 h-5 text-navy/20 group-hover:text-royal group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-royal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Button to="/loans" variant="secondary">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
