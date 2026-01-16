import React from 'react';

interface HoverCardProps {
  name: string;
  description: string;
  children: React.ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({ name, description, children }) => {
  return (
    <span className="hover-card group relative inline-block cursor-pointer">
      {children}
      <span className="hover-card-tooltip">
        <span className="block text-xs font-semibold text-stone-800 mb-1">{name}</span>
        <span className="block text-xs text-stone-600 leading-relaxed">{description}</span>
      </span>
    </span>
  );
};

export default HoverCard;
