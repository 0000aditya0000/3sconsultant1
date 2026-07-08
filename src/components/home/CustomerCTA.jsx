import { Phone } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';

export default function CustomerCTA() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-royal via-royal to-soft-green" />
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px',
                }}
              />
            </div>

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <SectionTitle
                subtitle="Get Started"
                title="Need Financial Support? Let Our Experts Help You"
                description="Reach out today for personalized loan and insurance solutions. Our team is ready to guide you every step of the way."
                light
              />
              <div className="flex flex-wrap justify-center gap-4 -mt-6">
                <Button to="/contact" variant="secondary" className="!bg-white !text-royal !border-white hover:!bg-white/90">
                  Apply Now
                </Button>
                <Button
                  href="tel:9810105358"
                  variant="outline"
                  className="!border-white/50"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
