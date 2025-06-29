// import Image from 'next/image';
import AboutExtra from '@/components/AboutExtra';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import WorkProcess from '@/components/WorkProcess';
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <AboutExtra />
        <WorkProcess />
        <ContactSection />
        {/* <Footer /> */}
      </main>
    </>
  );
}
