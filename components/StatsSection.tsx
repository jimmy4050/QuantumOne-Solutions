import React from 'react';
import { STATS_DATA } from '../constants';
import AnimatedCounter from './AnimatedCounter';

const StatsSection: React.FC = () => {
  return (
    <section className="bg-neutral-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {STATS_DATA.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <Icon className="w-12 h-12 text-secondary mb-4" />
                <div className="text-4xl md:text-5xl font-bold font-heading">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-base text-neutral-300 mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
