import React from 'react';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
  isDetailed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isDetailed = false }) => {
  const Icon = service.icon;
  return (
    <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex flex-col h-full dark:bg-neutral-800 dark:shadow-none dark:border dark:border-neutral-700 dark:hover:border-primary">
      <div className="flex items-center justify-center bg-secondary/10 dark:bg-primary/20 rounded-full w-16 h-16 mb-4">
        <Icon className="w-8 h-8 text-primary dark:text-secondary transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" />
      </div>
      <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading dark:text-neutral-100">{service.title}</h3>
      <p className={`text-neutral-500 flex-grow ${isDetailed ? 'text-justify' : ''} dark:text-neutral-400`}>{isDetailed ? service.details : service.description}</p>
      {!isDetailed && (
        <Link to="/services" className="text-primary font-semibold mt-4 inline-flex items-center group/link font-heading">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;