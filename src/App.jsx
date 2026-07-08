import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/ui/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import LoanServices from './pages/LoanServices';
import Insurance from './pages/Insurance';
import Process from './pages/Process';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="loans" element={<LoanServices />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="process" element={<Process />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
