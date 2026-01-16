import React, { useEffect } from 'react';
import { INTRO_HEADLINE, SOCIAL_LINKS, PROFESSIONAL_INTERESTS, PERSONAL_INTERESTS } from '../constants';
import { Chat } from '@carbon/icons-react';
import InterestLine from './InterestLine';

declare global {
  interface Window {
    Cal: any;
  }
}

const Hero: React.FC = () => {
  useEffect(() => {
    (function (C: Window, A: string, L: string) { let p = function (a: any, ar: any) { (a as any).q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal: any = C.Cal; let ar = arguments; if (!(cal as any).loaded) { (cal as any).ns = {}; (cal as any).q = (cal as any).q || []; d.head.appendChild(d.createElement("script")).src = A; (cal as any).loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments as any); }; const namespace = ar[1]; (api as any).q = (api as any).q || []; if(typeof namespace === "string"){(cal as any).ns[namespace] = (cal as any).ns[namespace] || api;p((cal as any).ns[namespace], ar as any);p(cal, ["initNamespace", namespace]);} else p(cal, ar as any); return;} p(cal, ar as any); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    (window as any).Cal("init", "15min", {origin:"https://app.cal.com"});
    (window as any).Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  }, []);

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
        <a href="#" data-cal-link="viraj-kacker-udrmwc/15min" data-cal-namespace="15min" data-cal-config='{"layout":"month_view"}' className="text-sm font-medium text-crimson-600 hover:text-crimson-700 flex items-center gap-1.5 transition-colors cursor-pointer">
          <Chat className="w-4 h-4" />
          Always down to chat
        </a>
      </div>
    </section>
  );
};

export default Hero;