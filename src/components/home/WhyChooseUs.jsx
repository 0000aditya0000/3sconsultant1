import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/homeData';
import SectionTitle from '../ui/SectionTitle';
import ScrollReveal from '../ui/ScrollReveal';
import DynamicIcon from '../ui/DynamicIcon';

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Why Choose Us"
          title="Your Financial Success Is Our Priority"
          description="We combine expertise, speed, and transparency to deliver the best financial solutions tailored to your needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <motion.div
                className="group p-6 md:p-8 rounded-2xl bg-light-grey border border-navy/5 card-shadow hover:card-shadow-hover transition-all duration-300 h-full"
                whileHover={{ y: -6 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-royal/10 flex items-center justify-center mb-5 group-hover:bg-royal group-hover:scale-110 transition-all duration-300">
                  <DynamicIcon
                    name={item.icon}
                    className="w-7 h-7 text-royal group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.4} className="sm:col-span-2 lg:col-span-1">
            <motion.div
              className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-navy to-navy/90 text-white h-full flex flex-col justify-center"
              whileHover={{ y: -6 }}
            >
              <p className="text-royal text-sm font-semibold uppercase tracking-wider mb-3">
                Ready to Start?
              </p>
              <h3 className="text-2xl font-bold mb-3">
                Get Expert Financial Advice Today
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Connect with our team for personalized loan and insurance solutions.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
