
import React from 'react';
import useTitle from '../hooks/useTitle';
import { INDUSTRIES_DATA } from '../constants';

const IndustriesPage: React.FC = () => {
  useTitle('Industries We Serve');
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Industries We Serve</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            We provide tailored IT solutions for a diverse range of sectors, understanding the unique challenges of each industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center justify-center bg-secondary/10 rounded-full w-20 h-20 mb-6 mx-auto">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">{industry.name}</h3>
                  <p className="text-neutral-500">{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
