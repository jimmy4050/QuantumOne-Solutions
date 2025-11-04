import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  category: string;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  category: string;
  description: string;
}

export interface TeamMember {
  image: string;
  name: string;
  title: string;
}