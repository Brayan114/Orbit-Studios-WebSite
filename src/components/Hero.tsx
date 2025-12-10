import React, { useState } from 'react';
import { ChevronDown, Code, Terminal, Smartphone } from 'lucide-react';

const Hero: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleImageClick = () => {
    setIsSpinning(!isSpinning);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="mb-8 relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="https://picsum.photos/200/200"
            alt="Brie"
            onClick={handleImageClick}
            className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-900 object-cover cursor-pointer transition-transform hover:scale-105 ${isSpinning ? 'spin-fast' : ''}`}
            title="Click me for a surprise!"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          I Build Digital Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Humans.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
          Full-Stack Developer | Android Enthusiast | Builder of <span className="font-semibold text-purple-400">StudyLM</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base text-slate-400">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
            <Code className="w-4 h-4 text-cyan-400" /> Web Development
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
            <Terminal className="w-4 h-4 text-green-400" /> Automation Scripts
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
            <Smartphone className="w-4 h-4 text-purple-400" /> Mobile Apps
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-900/50 w-full sm:w-auto"
          >
            See My Work
          </button>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-slate-600 hover:border-purple-400 text-slate-300 hover:text-white rounded-lg font-bold text-lg transition-all w-full sm:w-auto"
          >
            Hire Me
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;