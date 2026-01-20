import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Hero from './components/Hero';
import Overview from './pages/Home';
import Projects from './pages/Projects';
import Writing from './pages/Writing';
import Consulting from './pages/Consulting';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FCFCFC] text-stone-900 font-sans selection:bg-crimson-100 selection:text-crimson-900">
        <main className="max-w-2xl mx-auto px-6 py-16 md:py-24 space-y-12">

          <Hero />

          <div className="sticky top-0 bg-[#FCFCFC]/90 backdrop-blur-sm z-10 py-4 border-b border-stone-200/50">
            <nav className="flex gap-6 overflow-x-auto no-scrollbar">
              {[
                { label: 'Overview', path: '/' },
                { label: 'Writing', path: '/writing' },
                { label: 'Projects', path: '/projects' },
                { label: 'Consulting', path: '/consulting' }
              ].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors whitespace-nowrap ${isActive ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`
                  }
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="min-h-[400px]">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/consulting" element={<Consulting />} />
            </Routes>
          </div>

          <footer className="pt-12 border-t border-stone-200/60 flex justify-between items-center text-xs text-stone-400 font-mono">
            <span>© {new Date().getFullYear()}</span>
            <span>SF</span>
          </footer>

        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;