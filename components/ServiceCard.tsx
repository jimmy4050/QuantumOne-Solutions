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
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center justify-center bg-secondary/10 rounded-full w-16 h-16 mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-neutral-900 mb-2 font-heading">{service.title}</h3>
      <p className={`text-neutral-500 flex-grow ${isDetailed ? 'text-justify' : ''}`}>{isDetailed ? service.details : service.description}</p>
      {!isDetailed && (
        <Link to="/services" className="text-primary font-semibold mt-4 inline-flex items-center group font-heading">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;