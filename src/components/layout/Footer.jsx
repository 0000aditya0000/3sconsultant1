import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/loans' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Loans', path: '/loans' },
  { name: 'Insurance', path: '/insurance' },
  { name: 'Business Finance', path: '/loans' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-royal flex items-center justify-center">
                <span className="text-white font-bold text-sm">3S</span>
              </div>
              <span className="text-lg font-bold">3S Consultant</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted partner for complete financial solutions in Noida.
              Loans, insurance, and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-royal text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/80">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-royal text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/80">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-royal" />
                Sector 49, Noida
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-royal" />
                <a href="tel:9810105358" className="hover:text-white transition-colors">
                  9810105358
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-royal" />
                <a href="tel:9625905358" className="hover:text-white transition-colors">
                  9625905358
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-royal" />
                <a href="tel:9315767815" className="hover:text-white transition-colors">
                  9315767815
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-royal" />
                <span>Ankit Kaushik</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; 2026 3S Consultant. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
