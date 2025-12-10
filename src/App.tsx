import React, { useEffect } from 'react';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';

const App: React.FC = () => {
  useEffect(() => {
    // Easter Egg for developers
    console.log(
      "%cHello fellow dev, stop snooping in my code and hire me.",
      "color: #a855f7; font-size: 1.5rem; font-weight: bold; background: #0f172a; padding: 10px; border-radius: 5px;"
    );
  }, []);

  return (
    <div className="min-h-screen text-slate-100 selection:bg-purple-500 selection:text-white">
      <StarBackground />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-slate-600 text-sm bg-black">
        <p>&copy; {new Date().getFullYear()} Orbit Studios. All systems operational.</p>
      </footer>
    </div>
  );
};

export default App;