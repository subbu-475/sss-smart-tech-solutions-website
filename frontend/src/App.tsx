import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurTestimonials from './components/OurTestimonial';

function App() {
  // Important: Use basename for React Router to handle the /ssssmarttech prefix
  // const basename = process.env.NODE_ENV === 'production' ? '/ssssmarttech' : '';

  return (
    <BrowserRouter
    //  basename={basename}
     >
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <CaseStudies />
        <Testimonials />
        <OurTestimonials />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
