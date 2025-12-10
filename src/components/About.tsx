import React from 'react';
import { User, MapPin, Zap, Code2, Book, Gamepad2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-2">
              Mission Briefing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Coder. Student. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Builder.</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-white">The Story:</span> Hi, I’m Brie.
              </p>
              <p>
                I’m a 200-level CS student based in Nigeria who turned a caffeine addiction into a coding career. I started Orbit Studios because I love the process of turning a blank screen into a working product.
              </p>
              <p className="text-slate-400">
                My "native languages" are Python, Java, and JavaScript. I'm also fluent in Android development. Whether it’s a high-speed web app using React or a complex automation script, I love tackling problems that make people scratch their heads.
              </p>
            </div>
          </div>

          {/* Visual/Stats Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-slate-900/90 border border-slate-700 rounded-2xl p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Decorative UI elements */}
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Zap className="w-32 h-32 text-white transform rotate-12 translate-x-8 -translate-y-8" />
              </div>

              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-400" /> Fast Facts
              </h3>

              <div className="space-y-4 relative z-10">
                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-sm block">Currently building</span>
                      <span className="text-white font-medium">StudyLM (EdTech App)</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-sm block">Secret Side Quest</span>
                      <span className="text-white font-medium">Writing a fantasy novel series called Aetheris</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <Gamepad2 className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-sm block">Rank</span>
                      <span className="text-white font-medium">Probably losing in Brawl Stars right now</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-sm block">Base</span>
                      <span className="text-white font-medium">Nigeria</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 relative z-10">
                <div className="flex justify-between text-xs text-slate-500 font-mono mb-2">
                  <span>SYSTEM STATUS</span>
                  <span className="text-green-400 animate-pulse">ONLINE</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;