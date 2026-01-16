import React, { useState } from 'react';
import Hero from './components/Hero';
import Overview from './pages/Home';
import Projects from './pages/Projects';
import Writing from './pages/Writing';
import Consulting from './pages/Consulting';

type Tab = 'overview' | 'writing' | 'projects' | 'consulting';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'writing': return <Writing />;
      case 'projects': return <Projects />;
      case 'consulting': return <Consulting />;
      default: return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] text-stone-900 font-sans selection:bg-crimson-100 selection:text-crimson-900">
      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-12">

        {/* Persistent Header */}
        <Hero />

        {/* Tab Navigation */}
        <div className="sticky top-0 bg-[#FCFCFC]/90 backdrop-blur-sm z-10 py-4 border-b border-stone-200/50">
          <nav className="flex gap-6 overflow-x-auto no-scrollbar">
            {['Overview', 'Writing', 'Projects', 'Consulting'].map((tab) => {
              const value = tab.toLowerCase() as Tab;
              const isActive = activeTab === value;
              return (
                <button
                  key={value}
                  onClick={() => setActiveTab(value)}
                  className={`text-sm font-medium transition-colors relative pb-1 whitespace-nowrap ${isActive ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'
                    }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-crimson-600 rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Dynamic Content Area */}
        <div className="min-h-[400px]">
          {renderContent()}
        </div>

        {/* Simple Footer */}
        <footer className="pt-12 border-t border-stone-200/60 flex justify-between items-center text-xs text-stone-400 font-mono">
          <span>© {new Date().getFullYear()}</span>
          <span>SF</span>
        </footer>

      </main>
    </div>
  );
};

export default App;