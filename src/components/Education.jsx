import React from 'react';
import { GraduationCap, Award, Globe2, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 space-y-12">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
        <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold font-mono">05 / Education & Credentials</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Education Timeline */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-widest text-zinc-400 font-bold font-mono flex items-center gap-2 mb-2">
            <GraduationCap size={16} className="text-indigo-400" /> Academic Background
          </h4>
          
          <div className="space-y-5">
            {/* BCA */}
            <div className="glass-panel rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500" />
              <h5 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">Bachelor of Computer Applications (BCA)</h5>
              <p className="text-xs text-zinc-500 mt-1 font-medium">University of Kerala</p>
              <p className="text-xs font-mono text-zinc-500 mt-3">
                Graduated: <span className="text-indigo-400 font-semibold">2023</span> | CGPA: <span className="text-zinc-400">6.43 (61.08%)</span>
              </p>
            </div>

            {/* Higher Secondary */}
            <div className="glass-panel rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-hover:bg-indigo-500/50 transition-colors" />
              <h5 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Higher Secondary Education</h5>
              <p className="text-xs text-zinc-500 mt-1 font-medium">DHSE Kerala</p>
              <p className="text-xs font-mono text-zinc-500 mt-3">
                Graduated: <span className="text-zinc-400 font-semibold">2020</span> | Aggregate: <span className="text-zinc-405">72.92%</span>
              </p>
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
                  <h5 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Python Full Stack Development Certification</h5>
                  <p className="text-xs text-zinc-500 mt-1 font-medium">NSDC (National Skill Development Corporation)</p>
                  <p className="text-xs font-mono text-zinc-500 mt-3">
                    Completed: <span className="text-emerald-400 font-semibold">2024</span>
                  </p>
                </div>
                <div className="p-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-600 group-hover:text-emerald-400 transition-colors flex-shrink-0">
                  <BookOpen size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-widest text-zinc-400 font-bold font-mono flex items-center gap-2 mb-2">
              <Globe2 size={16} className="text-purple-400" /> Languages
            </h4>
            
            <div className="glass-panel rounded-2xl p-5 border border-zinc-800/80">
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="font-semibold text-zinc-300">English</span>
                  <span className="text-zinc-500 text-[11px] font-medium">Professional</span>
                </div>
                <div className="h-px bg-zinc-900/60" />
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="font-semibold text-zinc-300">Malayalam</span>
                  <span className="text-zinc-500 text-[11px] font-medium">Native</span>
                </div>
                <div className="h-px bg-zinc-900/60" />
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="font-semibold text-zinc-300">Hindi</span>
                  <span className="text-zinc-500 text-[11px] font-medium">Intermediate</span>
                </div>
                <div className="h-px bg-zinc-900/60" />
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="font-semibold text-zinc-300">Tamil</span>
                  <span className="text-zinc-500 text-[11px] font-medium">Conversational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}