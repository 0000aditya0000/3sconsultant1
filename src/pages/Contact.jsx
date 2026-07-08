import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, User, Mail, Send, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['3S Consultant', 'Sector 49, Noida'],
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['9810105358', '9625905358', '9315767815'],
    links: ['tel:9810105358', 'tel:9625905358', 'tel:9315767815'],
  },
  {
    icon: User,
    title: 'Contact Person',
    details: ['Ankit Kaushik'],
  },
];

const serviceOptions = [
  'Loan Against Property',
  'Business Loan',
  'Personal Loan',
  'Home Loan',
  'Working Capital Loan',
  'Insurance Services',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', mobile: '', email: '', service: '', message: '' });
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Get in touch with our financial experts today
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-light-grey">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <SectionTitle
                subtitle="Get In Touch"
                title="We're Here to Help"
                description="Reach out to us for personalized financial guidance and support."
                align="left"
              />

              {contactInfo.map((info, index) => (
                <ScrollReveal key={info.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-navy/5 card-shadow">
                    <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-royal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        info.links ? (
                          <a
                            key={detail}
                            href={info.links[i]}
                            className="block text-muted text-sm hover:text-royal transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={detail} className="text-muted text-sm">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2} className="lg:col-span-3">
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-navy/5 card-shadow">
                <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>

                {submitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-soft-green mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-navy mb-2">Message Sent!</h4>
                    <p className="text-muted">We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-light-grey focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-light-grey focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all text-sm"
                          placeholder="Your mobile number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-light-grey focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Required Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-light-grey focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all text-sm"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-light-grey focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal transition-all text-sm resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button type="submit" variant="primary" className="w-full sm:w-auto">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} className="mt-12">
            <div className="rounded-2xl overflow-hidden border border-navy/5 card-shadow h-80 bg-navy/5 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-royal mx-auto mb-4" />
                <h4 className="text-xl font-bold text-navy mb-2">Find Us Here</h4>
                <p className="text-muted">Sector 49, Noida, Uttar Pradesh</p>
                <a
                  href="https://maps.google.com/?q=Sector+49+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-royal font-medium text-sm hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
