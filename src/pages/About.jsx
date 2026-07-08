import { motion } from 'framer-motion';
import { Target, Eye, Users, Handshake } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';

const values = [
  {
    icon: Target,
    title: 'Company Mission',
    description:
      'To empower individuals and businesses with accessible, transparent, and reliable financial solutions that drive growth and security.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To become the most trusted financial consulting firm in Noida, known for integrity, expertise, and customer-first approach.',
  },
  {
    icon: Users,
    title: 'Customer First Approach',
    description:
      'Every decision we make is guided by what\'s best for our customers. We listen, understand, and deliver solutions that truly fit.',
  },
  {
    icon: Handshake,
    title: 'Professional Financial Assistance',
    description:
      'Our team of experienced consultants provides end-to-end support from requirement analysis to loan disbursement and beyond.',
  },
];

export default function About() {
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
            About 3S Consultant
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Your trusted financial partner in Noida
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-royal/10 to-soft-green/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-navy flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">3S</span>
                    </div>
                    <p className="text-2xl font-bold text-navy">3S Consultant</p>
                    <p className="text-muted mt-2">Sector 49, Noida</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-soft-green/20 rounded-3xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-royal/20 rounded-3xl -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <SectionTitle
                subtitle="Who We Are"
                title="Complete Financial Solutions for Everyone"
                align="left"
              />
              <p className="text-muted text-lg leading-relaxed -mt-8">
                3S Consultant is a Noida-based financial consulting firm providing
                complete financial solutions for individuals, professionals, and
                businesses. We help customers find suitable loan and insurance
                products based on their requirements.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                With deep industry knowledge and strong banking relationships, we
                simplify the complex world of finance, making it accessible and
                transparent for everyone we serve.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light-grey">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Values"
            title="What Drives Us Forward"
            description="Built on trust, expertise, and an unwavering commitment to our customers."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  className="p-8 rounded-2xl bg-white border border-navy/5 card-shadow h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-royal/10 flex items-center justify-center mb-5">
                    <value.icon className="w-7 h-7 text-royal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-muted leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
