import React from 'react';
import { TeamMember } from '../types';
import useInView from '../hooks/useInView';

interface TeamMemberCardProps {
  member: TeamMember;
  delay?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, delay = 0 }) => {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md dark:bg-neutral-700 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        loading="lazy"
      />
      <h3 className="text-lg font-bold text-neutral-900 font-heading dark:text-neutral-100">
        {member.name}
      </h3>
      <p className="text-secondary">{member.title}</p>
    </div>
  );
};

export default TeamMemberCard;
