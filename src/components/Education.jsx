import React from 'react';
import { GraduationCap, Award, Globe2, BookOpen, ExternalLink } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 space-y-12">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
        <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold font-mono">05 / Education & Achievements</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education Timeline */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-widest text-zinc-400 font-bold font-mono flex items-center gap-2 mb-2">
            <GraduationCap size={16} className="text-indigo-400" /> Academic Background
          </h4>
          
          <div className="space-y-5">
            <div className="glass-panel rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500/50" />
              <h5 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">Bachelor of Computer Applications (BCA)</h5>
              <p className="text-xs text-zinc-500 mt-1 font-medium">University of Kerala | Graduated: 2023</p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-400">Final CGPA Score</span>
                <span className="font-mono text-indigo-400 font-semibold bg-indigo-950/30 border border-indigo-900/40 px-2 py-0.5 rounded">6.43 (61.08%)</span>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800" />
              <h5 className="text-sm font-bold text-zinc-200 group-hover:text-indigo-450">Higher Secondary Education</h5>
              <p className="text-xs text-zinc-500 mt-1 font-medium">DHSE Kerala | Graduated: 2020</p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-400">Aggregate Percentage</span>
                <span className="font-mono text-zinc-400 font-semibold bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">72.92%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications and Languages */}
        <div className="space-y-8">
          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-zinc-400 font-bold font-mono flex items-center gap-2 mb-2">
              <Award size={16} className="text-emerald-400" /> Professional Credentials
            </h4>
            
            <div className="glass-panel rounded-2xl p-5 border border-zinc-800/80 hover:border-zinc-700/80 group">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h5 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Python Full Stack Development</h5>
                  <p className="text-xs text-zinc-500 mt-1 font-medium">National Skill Development Corporation (NSDC)</p>
                  <p className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 px-2.5 py-0.5 rounded mt-3 inline-block">
                    Credential Year: 2024
                  </p>
                </div>
                <div className="p-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-600 group-hover:text-emerald-400 transition-colors">
                  <BookOpen size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-zinc-400 font-bold font-mono flex items-center gap-2 mb-2">
              <Globe2 size={16} className="text-purple-400" /> Languages Spoken
            </h4>
            
            <div className="glass-panel rounded-2xl p-5 border border-zinc-800/80">
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "English", level: "Professional" },
                  { name: "Malayalam", level: "Native" },
                  { name: "Hindi", level: "Conversational" },
                  { name: "Tamil", level: "Basic" }
                ].map((lang, lIdx) => (
                  <div key={lIdx} className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center gap-2">
                    <span className="text-xs text-zinc-300 font-medium">{lang.name}</span>
                    <span className="text-[9px] font-mono bg-zinc-900 text-zinc-500 border border-zinc-800/80 px-1.5 py-0.5 rounded">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Professional Footer */}
      <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-[10px] text-zinc-600 font-mono flex flex-col sm:flex-row justify-between items-center gap-3">
        <span>&copy; {new Date().getFullYear()} Prajul V P. All rights reserved.</span>
        <span>Built with React, Tailwind & custom CSS.</span>
      </div>
    </section>
  );
}