import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../types';

const Navigation: React.FC = () => {
  const navItems = [
    { label: 'Home', path: RoutePath.HOME },
    { label: 'About', path: RoutePath.ABOUT },
    { label: 'Writing', path: RoutePath.WRITING },
    { label: 'Projects', path: RoutePath.PROJECTS },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to={RoutePath.HOME} className="font-bold text-lg tracking-tight text-stone-900 hover:text-crimson-700 transition-colors">
          VK
        </NavLink>
        
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'text-crimson-700' 
                    : 'text-stone-500 hover:text-stone-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;