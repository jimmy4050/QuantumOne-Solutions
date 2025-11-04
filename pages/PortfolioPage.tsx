import React, { useState } from 'react';
import useTitle from '../hooks/useTitle';
import { PROJECTS_DATA, PROJECT_CATEGORIES } from '../constants';
import ProjectCard from '../components/ProjectCard';

const PortfolioPage: React.FC = () => {
  useTitle('Our Portfolio');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category.includes(activeCategory));

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Our Projects</h1>
          <p className="text-base sm:text-lg mt-2 max-w-3xl mx-auto">
            Discover some of our successful implementations and see how we've helped businesses like yours.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
           {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-neutral-700 hover:bg-secondary/10 border border-neutral-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-500">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;