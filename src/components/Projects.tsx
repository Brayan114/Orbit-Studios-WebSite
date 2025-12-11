import React from 'react';
import type { Project } from '../types';
import { ExternalLink, Github, Loader2 } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'StudyLM',
    description: 'A comprehensive study application for students featuring real-time collaboration and resource sharing. Currently in active development.',
    tags: ['React', 'Firebase', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/studyorbit/600/400',
    status: 'Work In Progress',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: '2',
    title: 'The "Aetheris" Comic',
    description: 'An AI-assisted interactive web comic. Demonstrates expertise in AI tool integration and digital storytelling.',
    tags: ['AI Generation', 'Web Audio API', 'Canvas'],
    imageUrl: 'https://picsum.photos/seed/aetheris/600/400',
    status: 'Creative Project',
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    id: '3',
    title: 'Orbit Weather',
    description: 'A modern weather and productivity app with world clock, alarms, reminders, and calendar. Features real-time weather data and beautiful UI.',
    tags: ['React', 'TypeScript', 'WeatherAPI', 'TailwindCSS'],
    imageUrl: 'https://picsum.photos/seed/orbitweather/600/400',
    status: 'Completed',
    liveUrl: 'https://orbit-weather.netlify.app',
    codeUrl: 'https://github.com/Brayan114/orbit-weather'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative z-10 py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Proof</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I don't just write code; I ship products. Here are a few things I've built recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-2 right-2 z-10">
                  {project.status === 'Work In Progress' ? (
                    <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold px-2 py-1 rounded-full border border-yellow-500/30 backdrop-blur-sm">
                      <Loader2 className="w-3 h-3 animate-spin" /> WIP
                    </span>
                  ) : (
                    <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-2 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm">
                      {project.status}
                    </span>
                  )}
                </div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex-1 flex flex-col relative">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a href={project.codeUrl || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;