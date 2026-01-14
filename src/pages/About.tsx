import React from 'react';
import { INTERESTS } from '../constants';

const Interests: React.FC = () => {
  return (
    <section className="animate-fade-in space-y-6">
      <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
         <span className="w-2 h-2 rounded-full bg-stone-300"></span>
         Interests & Roots
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {INTERESTS.map((interest) => (
          <div key={interest.name} className="flex items-center gap-3 p-3 rounded-lg border border-stone-100 hover:border-stone-200 hover:bg-white hover:shadow-sm transition-all duration-200">
             <div className="text-stone-400">
               {interest.icon}
             </div>
             <div>
               <div className="text-sm font-semibold text-stone-800">{interest.name}</div>
               <div className="text-xs text-stone-500">{interest.description}</div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;