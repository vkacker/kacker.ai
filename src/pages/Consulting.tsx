import React from 'react';
import { CONSULTING_SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <section className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-stone-300"></span>
           Services
        </h2>
        <p className="text-stone-600 max-w-lg leading-relaxed">
          I occasionally take on contract work if the problem is interesting. 
          I specialize in getting products off the ground and integrating LLMs into existing workflows.
        </p>
      </div>

      <div className="grid gap-6">
        {CONSULTING_SERVICES.map((service, idx) => (
          <div key={idx} className="bg-white border border-stone-200 p-6 rounded-xl hover:shadow-sm transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-stone-900 text-lg">{service.title}</h3>
              {service.priceRange && (
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded">
                  {service.priceRange}
                </span>
              )}
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <div className="space-y-2">
              {service.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-stone-500">
                  <CheckCircle2 className="w-4 h-4 text-crimson-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-stone-100 p-6 rounded-xl text-center">
        <h3 className="font-bold text-stone-900 mb-2">Have a project in mind?</h3>
        <p className="text-sm text-stone-600 mb-4">Let's chat about feasibility and timeline.</p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-block bg-stone-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Consulting;