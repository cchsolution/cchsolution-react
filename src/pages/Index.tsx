import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/sections/Preloader';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Counters from '@/components/sections/Counters';
import Services from '@/components/sections/Services';
import CoreValues from '@/components/sections/CoreValues';
import Testimonials from '@/components/sections/Testimonials';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';
import Clients from '@/components/sections/Clients';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Counters />
        <Services />
        <CoreValues />
        <Testimonials />
        <TechStack />
        <Contact />
        <Clients />
      </main>
      <Footer />
    </>
  );
};

export default Index;
