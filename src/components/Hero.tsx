import React from 'react';
import { INTRO_HEADLINE, SOCIAL_LINKS, PROFESSIONAL_INTERESTS, PERSONAL_INTERESTS } from '../constants';
import { Chat } from '@carbon/icons-react';
import InterestLine from './InterestLine';

const Hero: React.FC = () => {
  return (
    <section className="animate-fade-in space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-serif">
          Viraj Kacker
        </h1>
        <p className="text-lg font-medium text-stone-800">
          {INTRO_HEADLINE}
        </p>
        <InterestLine title="Professional Interests" interests={PROFESSIONAL_INTERESTS} />
        <InterestLine title="Personal Interests" interests={PERSONAL_INTERESTS} />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        {SOCIAL_LINKS.map((link) => (
          <a 
            key={link.label} 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 -ml-2 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-all"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
        <div className="h-4 w-px bg-stone-200 mx-1"></div>
        <a href="mailto:hello@example.com" className="text-sm font-medium text-crimson-600 hover:text-crimson-700 flex items-center gap-1.5 transition-colors">
          <Chat className="w-4 h-4" />
          Always down to chat
        </a>
      </div>
    </section>
  );
};

export default Hero;