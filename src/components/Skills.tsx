import React from 'react';
import { FileCode, Database, Layout, Smartphone, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', icon: <Cpu />, level: 'w-11/12', color: 'bg-yellow-400' },
    { name: 'React / JS/ TS', icon: <FileCode />, level: 'w-10/12', color: 'bg-cyan-400' },
    { name: 'HTML / CSS', icon: <Layout />, level: 'w-full', color: 'bg-orange-500' },
    { name: 'Java / Android', icon: <Smartphone />, level: 'w-9/12', color: 'bg-red-500' },
    { name: 'Backend', icon: <Database />, level: 'w-8/12', color: 'bg-purple-500' },
  ];

  return (
    <section id="skills" className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">The Stack</h2>

        <div className="space-y-8 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
          {skills.map((skill) => (
            <div key={skill.name} className="relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-lg bg-slate-700 text-white`}>
                    {skill.icon}
                  </span>
                  <span className="font-bold text-lg">{skill.name}</span>
                </div>
              </div>
              <div className="h-4 bg-slate-900 rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: '0%', animation: `growWidth 1.5s ease-out forwards` }}
                >
                  <style>{`
                    @keyframes growWidth {
                      to { width: ${skill.level.replace('w-', '').replace('/12', '%').replace('full', '100%').replace('11/12', '91%').replace('10/12', '83%').replace('9/12', '75%').replace('8/12', '66%')}; }
                    }
                  `}</style>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;