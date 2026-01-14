import type { Project, ConsultingService } from './types';
import { Plane, Snowflake, Flag, Trophy, Cpu, Github, Linkedin, Mail } from 'lucide-react';

const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm9.5 10.2l4.2-6.2H16l-3.2 4.8L10 7h-1.7l4.3 6.5-4.3 6.5H9l3.3-4.9 3.4 4.9h1.6l-4.3-6.3z" />
  </svg>
);

export const INTRO_HEADLINE = "Georgia Tech Grad. Currently a SWE in the Bay Area.";

export const INTRO_SUBTEXT = "Professional Interests include: American Dynamism, Early Stage Startups, Healthcare, Applied AI, Manufacturing, Aviation Innovations.";

export const SOCIAL_LINKS = [
  { label: 'X', url: '#', icon: <XIcon /> },
  { label: 'GitHub', url: 'https://github.com/viraj', icon: <Github className="w-4 h-4" /> },
  { label: 'LinkedIn', url: '#', icon: <Linkedin className="w-4 h-4" /> },
  { label: 'Email', url: 'mailto:hello@example.com', icon: <Mail className="w-4 h-4" /> },
];

export const INTERESTS = [
  {
    name: "American Dynamism",
    icon: <Flag className="w-4 h-4" />,
    description: "Building for the real world."
  },
  {
    name: "Aviation",
    icon: <Plane className="w-4 h-4" />,
    description: "Flight mechanics & aerospace."
  },
  {
    name: "College Football",
    icon: <Trophy className="w-4 h-4" />,
    description: "Alabama Football. Roll Tide."
  },
  {
    name: "Snowboarding",
    icon: <Snowflake className="w-4 h-4" />,
    description: "Chasing powder."
  },
  {
    name: "Technology",
    icon: <Cpu className="w-4 h-4" />,
    description: "LLMs & Engineering."
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "CFB Stats Analyzer",
    description: "Visualizing historical SEC matchup data and predicting outcomes.",
    longDescription: "I built this to settle debates with my friends. It scrapes 10 years of SEC matchup data, normalizes stats based on opponent strength, and runs a simple regression model to predict spread outcomes. It correctly predicted the 2023 SEC Championship outcome within 3 points.",
    technologies: ["Python", "ML", "Pandas"],
    github: "https://github.com/viraj"
  },
  {
    id: '2',
    title: "FlightPath",
    description: "Minimalist flight tracking dashboard for aviation enthusiasts.",
    longDescription: "Most flight trackers are cluttered. FlightPath uses the ADSB-Exchange API to provide a clean, map-first interface for tracking personal flights. It includes a 'Passport' feature to log every aircraft registration you've flown on.",
    technologies: ["React", "TypeScript", "Mapbox"],
    link: "https://flightpath.demo"
  },
  {
    id: '3',
    title: "NoteSync",
    description: "Obsidian plugin to sync daily notes to a private git repo.",
    longDescription: "I live in Obsidian. I wanted a way to backup my 'Daily Notes' specifically without syncing my entire vault to a public cloud. this plugin runs a background git-sync process only on the daily folder.",
    technologies: ["Electron", "Obsidian API"],
    github: "https://github.com/viraj"
  }
];

export const CONSULTING_SERVICES: ConsultingService[] = [
  {
    title: "MVP Development",
    description: "I help early-stage founders go from zero to one. We'll scope the core value proposition and build a robust, scalable MVP in weeks, not months.",
    deliverables: ["Full Stack Development", "Architecture Design", "Deployment Pipeline"],
    priceRange: "Project-based"
  },
  {
    title: "LLM Integration Strategy",
    description: "Practical advice on adding AI features to existing products. I focus on RAG implementations, prompt engineering, and cost/latency optimization.",
    deliverables: ["Feasibility Audit", "Prototype Implementation", "Prompt Eval Framework"],
    priceRange: "Hourly / Retainer"
  },
  {
    title: "Technical Consultation",
    description: "Ad-hoc engineering support for teams that need an extra pair of eyes on architecture, code quality, or hiring.",
    deliverables: ["Code Reviews", "System Design", "Hiring Interviews"],
    priceRange: "Hourly"
  }
];

// For the AI Chat context
export const ABOUT_BIO = `
Name: Viraj Kacker
Headline: ${INTRO_HEADLINE}
Interests: ${INTRO_SUBTEXT}
`;
