import { statistics } from '../../data/homeData';
import AnimatedCounter from '../ui/AnimatedCounter';
import ScrollReveal from '../ui/ScrollReveal';

export default function Statistics() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-royal" />
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

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.15}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/60 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
