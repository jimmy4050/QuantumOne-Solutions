import React, { useState, useEffect } from 'react';
import useTitle from '../hooks/useTitle';
import { SERVICES_DATA, SERVICE_CATEGORIES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import LoadingSpinner from '../components/LoadingSpinner';

const ServicesPage: React.FC = () => {
  useTitle(
    'Our Services',
    'Explore our comprehensive IT services, including server hardware, cloud computing, custom software development (HIMS, LIMS), networking, and security solutions.',
    ['IT services', 'server hardware', 'cloud computing', 'software development', 'HIMS', 'LIMS', 'networking solutions', 'IT security']
  );
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(service => service.category === activeCategory);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-[clamp(2rem,3vw,2.5rem)] font-bold font-heading">Our Comprehensive IT Services</h1>
          <p className="text-base mt-2 max-w-3xl mx-auto">
            From hardware to the cloud, we provide end-to-end solutions to power your business operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {/* Filter Buttons */}
              <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                {SERVICE_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-heading ${
                      activeCategory === category
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-neutral-700 hover:bg-secondary/10 border border-neutral-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {filteredServices.length > 0 ? (
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service.title} service={service} isDetailed={true} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-base text-neutral-500">No services found for this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;