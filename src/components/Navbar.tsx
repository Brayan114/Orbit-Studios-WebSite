import React from 'react';
import OrbitLogo from './OrbitLogo';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="transition-transform transform group-hover:rotate-12 duration-500">
              <OrbitLogo className="h-10 w-10" />
            </div>
            <div className="flex flex-col -space-y-1">
                <span className="font-bold text-xl tracking-tight text-white font-[Space_Grotesk]">ORBIT</span>
                <span className="text-[0.65rem] tracking-[0.2em] text-slate-400 font-bold uppercase">Studios</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">The Stack</button>
              <button onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-purple-900/50">Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;