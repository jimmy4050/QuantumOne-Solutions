
import React from 'react';
import useTitle from '../hooks/useTitle';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from '../components/ProjectCard';

const PortfolioPage: React.FC = () => {
  useTitle('Our Portfolio');
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Our Projects</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            Discover some of our successful implementations and see how we've helped businesses like yours.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
