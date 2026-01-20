import React from 'react';
import { CONSULTING_SERVICES } from '../constants';
import { CheckmarkFilled } from '@carbon/icons-react';

const Consulting: React.FC = () => {
  return (
    <section className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <p className="text-stone-600 max-w-lg leading-relaxed">
          I occasionally take on contract work if the problem is interesting. 
          I love helping teach individuals and organizations how to adopt modern AI tools 
          and collaborating with business teams on getting their idea off the ground.
        </p>
        <ul className="text-stone-600 text-sm leading-relaxed space-y-1 list-disc list-inside marker:text-crimson-600">
          <li>Trained GTM teams on AI tooling adoption and prompting</li>
          <li>Advised founders on integrating AI into their products</li>
          <li>Helped engineering leaders evaluate agentic coding tools</li>
        </ul>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONSULTING_SERVICES.map((service, idx) => (
          <div key={idx} className="bg-white border border-stone-200 p-5 rounded-xl hover:shadow-sm transition-shadow">
            <h3 className="font-bold text-stone-900 mb-2">{service.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="space-y-1">
              {service.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-500">
                  <CheckmarkFilled className="w-3 h-3 text-crimson-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
        <div className="bg-stone-100 p-5 rounded-xl text-center">
        <h3 className="font-bold text-stone-900 mb-1">Have a project in mind?</h3>
        <p className="text-xs text-stone-600 mb-3">Let's chat about feasibility and timeline.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a 
            href="https://cal.com/virajkacker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-stone-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Schedule a Chat
          </a>
          <a 
            href="mailto:vkack28@gmail.com" 
            className="inline-block bg-white border border-stone-200 text-stone-900 px-5 py-2 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
