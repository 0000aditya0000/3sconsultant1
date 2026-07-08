import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/homeData';
import Button from '../ui/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const overDarkHero = !isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const headerBg = scrolled
    ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-navy/5 py-3'
    : overDarkHero
      ? 'bg-navy/40 backdrop-blur-xl border-b border-white/10 py-5'
      : 'bg-transparent py-5';

  const logoTitleClass = overDarkHero ? 'text-white' : 'text-navy';
  const logoSubtitleClass = overDarkHero ? 'text-white/60' : 'text-muted';

  const navLinkClass = (isActive) => {
    if (scrolled) {
      return isActive
        ? 'text-royal bg-royal/5'
        : 'text-navy/70 hover:text-royal hover:bg-royal/5';
    }
    if (overDarkHero) {
      return isActive
        ? 'text-white bg-white/15'
        : 'text-white/80 hover:text-white hover:bg-white/10';
    }
    return isActive
      ? 'text-royal bg-royal/5'
      : 'text-navy/70 hover:text-royal hover:bg-royal/5';
  };

  const menuIconClass = overDarkHero ? 'text-white' : 'text-navy';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-royal flex items-center justify-center group-hover:bg-royal-dark transition-colors duration-300">
              <span className="text-white font-bold text-sm">3S</span>
            </div>
            <div>
              <span className={`text-lg font-bold leading-none block transition-colors duration-300 ${logoTitleClass}`}>
                3S Consultant
              </span>
              <span className={`text-[10px] tracking-wider uppercase transition-colors duration-300 ${logoSubtitleClass}`}>
                Financial Solutions
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${navLinkClass(location.pathname === link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              to="/contact"
              variant={overDarkHero ? 'outline' : 'primary'}
              className="!px-5 !py-2.5 !text-sm"
            >
              Apply Now
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              overDarkHero ? 'hover:bg-white/10' : 'hover:bg-navy/5'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${menuIconClass}`} />
            ) : (
              <Menu className={`w-6 h-6 ${menuIconClass}`} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-navy/5 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-royal bg-royal/5'
                      : 'text-navy/70 hover:bg-navy/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button to="/contact" variant="primary" className="w-full">
                  Apply Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
