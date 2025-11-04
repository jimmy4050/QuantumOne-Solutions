
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-secondary font-semibold mb-1">{project.category}</p>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{project.title}</h3>
        <p className="text-neutral-500">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
