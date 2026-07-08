import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import PageTransition from '../ui/PageTransition';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
