import React from 'react';
import useTitle from '../hooks/useTitle';
import { INDUSTRIES_DATA } from '../constants';

const IndustriesPage: React.FC = () => {
  useTitle(
    'Industries We Serve',
    'We provide tailored IT solutions for various industries including Healthcare, Education, Corporate, Manufacturing, and Retail. Discover our industry-specific expertise.',
    ['healthcare IT', 'education technology', 'corporate IT solutions', 'manufacturing IT', 'retail technology', 'industry solutions']
  );
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-[clamp(2rem,3vw,2.5rem)] font-bold font-heading">Industries We Serve</h1>
          <p className="text-base mt-2 max-w-3xl mx-auto">
            We provide tailored IT solutions for a diverse range of sectors, understanding the unique challenges of each industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.name} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 dark:bg-neutral-800 dark:shadow-none dark:border dark:border-neutral-700">
                  <div className="flex items-center justify-center bg-secondary/10 rounded-full w-20 h-20 mb-6 mx-auto">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 font-heading dark:text-neutral-100">{industry.name}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{industry.description}</p>
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