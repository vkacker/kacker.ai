import React from 'react';
import HoverCard from './HoverCard';

interface Interest {
  id: string;
  name: string;
  description: string;
}

interface InterestLineProps {
  title: string;
  interests: Interest[];
}

const InterestLine: React.FC<InterestLineProps> = ({ title, interests }) => {
  return (
    <p className="text-stone-500 text-sm leading-relaxed max-w-lg">
      <span className="font-medium text-stone-700">{title}</span>{' '}
      {interests.map((interest, index) => (
        <span key={interest.id}>
          {index > 0 && ', '}
          <HoverCard name={interest.name} description={interest.description}>
            <span className="underline decoration-wavy decoration-stone-300 underline-offset-3 group-hover:decoration-crimson-600 transition-colors">
              {interest.name}
            </span>
          </HoverCard>
        </span>
      ))}
      .
    </p>
  );
};

export default InterestLine;
