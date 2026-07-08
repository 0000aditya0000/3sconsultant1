import Hero from '../components/home/Hero';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Statistics from '../components/home/Statistics';
import ServicesPreview from '../components/home/ServicesPreview';
import CustomerCTA from '../components/home/CustomerCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Statistics />
      <ServicesPreview />
      <CustomerCTA />
    </>
  );
}
