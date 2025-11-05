import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';
import useTitle from '../hooks/useTitle';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const HomePage: React.FC = () => {
  useTitle('Home');
  const [heroBg, setHeroBg] = useState('');

  useEffect(() => {
    // Lazy load the background image to improve initial page performance
    setHeroBg('linear-gradient(rgba(0, 82, 155, 0.8), rgba(0, 82, 155, 0.8)), url(https://picsum.photos/seed/techbg/1920/1080)');
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-primary text-white bg-cover bg-center transition-all duration-1000" 
        style={{ backgroundImage: heroBg }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2 font-heading">Empowering Businesses with Smart IT Solutions</h1>
          <AnimatedText className="my-6" phrases={['Robust Hardware Solutions', 'Custom Software Development', 'Cloud & Data Security']} />
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 text-neutral-100">
            Your trusted partner for reliable and scalable IT infrastructure, software, and cloud services.
          </p>
          <Link to="/contact" className="bg-secondary hover:bg-accent text-white font-bold py-3 px-8 rounded-full text-base transition-colors duration-300 inline-flex items-center font-heading">
            Get in Touch <ArrowRight className="ml-2"/>
          </Link>
        </div>
        <a 
          href="#about-section" 
          aria-label="Scroll to next section" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </a>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 font-heading">Welcome to QuantumOne Solutions</h2>
                <p className="text-base text-neutral-500 mb-4 text-justify">
                  Headquartered in Surat, Gujarat, we are a leading provider of end-to-end enterprise technology solutions. Our expert team specializes in IT infrastructure, custom software, and cloud computing, focusing on reliability, scalability, and ultimate customer satisfaction.
                </p>
                <Link to="/about" className="text-primary font-semibold inline-flex items-center group font-heading">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
             <div>
                <img src="https://picsum.photos/seed/office/800/600" alt="Modern Office" className="rounded-lg shadow-xl" loading="lazy"/>
             </div>
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 font-heading">Our Key Services</h2>
          <p className="max-w-2xl mx-auto text-neutral-500 mb-12">
            We offer a comprehensive range of IT services designed to meet the diverse needs of modern businesses.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="bg-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 font-heading">Ready to Transform Your IT?</h2>
              <p className="text-base max-w-2xl mx-auto mb-8">
                  Let's discuss how QuantumOne Solutions can help you achieve your business goals with our tailored technology solutions.
              </p>
              <Link to="/contact" className="bg-white text-secondary hover:bg-neutral-100 font-bold py-3 px-8 rounded-full text-base transition-colors duration-300 font-heading">
                  Contact Us Today
              </Link>
          </div>
      </section>
    </div>
  );
};

export default HomePage;