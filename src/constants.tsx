import { PROJECTS as _PROJECTS } from './lib/projects';
export const PROJECTS = _PROJECTS;
import { LogoGithub, LogoLinkedin, Email, LogoX } from '@carbon/icons-react';

const XIcon = () => <LogoX className="w-5 h-5" />;

export const INTRO_HEADLINE = "SWE at House Rx. Georgia Tech Grad. Alabama Born and Raised.";

export const PROFESSIONAL_INTERESTS = [
  { id: 'amdyn', name: 'American Dynamism', description: 'This country has given my family everything. I want to spend my career focused on giving everything I can for this country.' },
  { id: 'aiai', name: 'Applied AI', description: 'AI is transformative, and I love to figure out how to apply it in various domains.' },
  { id: 'biotech', name: 'Biotech', description: 'Biotech is an industry where advancements can directly impact someone personally, aka their health.' },
  { id: 'aviation', name: 'Aviation', description: "My dream job as a kid was a pilot. Though that's not my current job, I never have peeled an eye away from the sky." },
];

export const PERSONAL_INTERESTS = [
  { id: 'bama', name: 'Alabama Football', description: 'As a Bama kid born and raised, there\'s some roots you never forget (Roll Tide!)' },
  { id: 'snow', name: 'Snowboarding', description: 'Nothing more peaceful than the view while strapping in your boots.' },
  { id: 'cooking', name: 'Cooking', description: 'Cooking is the edible form of 0 to 1 and is my greatest destressor.' },
];

export const SOCIAL_LINKS = [
  { label: 'X', url: 'https://x.com/vvtechh', icon: <XIcon /> },
  { label: 'GitHub', url: 'https://github.com/vkacker', icon: <LogoGithub className="w-4 h-4" /> },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/viraj-kacker', icon: <LogoLinkedin className="w-4 h-4" /> },
  { label: 'Email', url: 'mailto:vkack28@gmail.com', icon: <Email className="w-4 h-4" /> },
];

export const CONSULTING_SERVICES = [
  {
    title: "AI Adoption",
    description: "Help organizations onboard their teams onto modern AI tooling, from prompt engineering to workflow integration.",
    deliverables: ["Team training sessions", "Prompt frameworks", "Tool selection guidance"]
  },
  {
    title: "MVP Development",
    description: "Help early-stage founders go from zero to one. Scope the core value proposition and build a robust MVP in weeks, not months.",
    deliverables: ["Full-stack development", "Architecture design", "Deployment pipeline"]
  },
  {
    title: "Integrating AI into your small business",
    description: "Practical guidance on adding AI capabilities to your existing business workflows and products.",
    deliverables: ["Feasibility assessment", "Prototype implementation", "Workflow integration"]
  }
];
