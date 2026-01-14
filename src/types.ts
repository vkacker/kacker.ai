import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // The "Write up"
  technologies: string[];
  link?: string;
  github?: string;
}

export interface WritingPost {
  id: string;
  title: string;
  date: string;
  category: 'Note' | 'Thought' | 'Essay';
  excerpt: string;
  content?: string;
}

export interface Interest {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface ConsultingService {
  title: string;
  description: string;
  deliverables: string[];
  priceRange?: string;
}

export const RoutePath = {
  HOME: '/',
  ABOUT: '/about',
  WRITING: '/writing',
  PROJECTS: '/projects'
} as const;

export type RoutePath = typeof RoutePath[keyof typeof RoutePath];