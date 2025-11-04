
import React from 'react';
import useTitle from '../hooks/useTitle';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  useTitle('Our Services');
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Our Comprehensive IT Services</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            From hardware to the cloud, we provide end-to-end solutions to power your business operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.title} service={service} isDetailed={true} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
