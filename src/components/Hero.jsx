import React from 'react';
import { Cpu, Compass, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section id="summary" className="scroll-mt-24 space-y-12">
      {/* Small Section Header */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
        <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold font-mono">01 / Profile Summary</h3>
      </div>

      {/* Main Quote / Intro */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white max-w-3xl font-display">
          Engineering secure, high-performance web applications, robust APIs, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">and optimized database systems.</span>
        </h1>
        
        <p className="text-zinc-400 leading-relaxed text-base md:text-lg max-w-3xl font-light">
          I am a hands-on Software Developer specialized in building client-facing web applications, backend business logic, and automated workflows. From pharmaceutical systems to ERPs, I focus on writing clean, reusable code and deploying via streamlined pipelines.
        </p>
      </div>

      {/* Highlights & Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {/* Core Stack Card */}
        <div className="glass-panel-interactive p-5 rounded-xl border border-zinc-800/80 flex flex-col gap-2 col-span-2 md:col-span-2">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Cpu size={14} /> Core Stack
          </span>
          <span className="text-white font-display text-xl font-bold mt-1">Laravel & Django</span>
          <span className="text-zinc-500 text-[11px] font-mono">Core framework expertise</span>
        </div>

        {/* Databases Card */}
        <div className="glass-panel-interactive p-5 rounded-xl border border-zinc-800/80 flex flex-col gap-2 col-span-2 md:col-span-2">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Compass size={14} /> Databases
          </span>
          <span className="text-white font-display text-xl font-bold mt-1">MySQL & SQLite</span>
          <span className="text-zinc-500 text-[11px] font-mono">Optimized relational queries</span>
        </div>

        {/* Stat 1: Years Exp */}
        <div className="glass-panel-interactive p-5 rounded-xl border border-zinc-800/80 flex flex-col items-center justify-center text-center col-span-1">
          <span className="text-3xl font-extrabold text-white tracking-tight">1+</span>
          <span className="text-zinc-500 text-[9px] font-mono uppercase tracking-wider mt-1 leading-tight">Years Exp</span>
        </div>

        {/* Stat 2: Projects */}
        <div className="glass-panel-interactive p-5 rounded-xl border border-zinc-800/80 flex flex-col items-center justify-center text-center col-span-1">
          <span className="text-3xl font-extrabold text-white tracking-tight">6+</span>
          <span className="text-zinc-500 text-[9px] font-mono uppercase tracking-wider mt-1 leading-tight">Projects</span>
        </div>
      </div>

      {/* Expanded Details Card (Current Focus) */}
      <div className="glass-panel rounded-xl p-6 border border-zinc-800/60 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
        <div className="flex items-start gap-3">
          <Briefcase size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
          <p className="text-zinc-300 leading-relaxed text-sm md:text-base font-normal">
            <strong className="text-white font-semibold">Current Focus: </strong>
            Currently serving as a Software Engineer at Logiprompt Techno Solutions, I focus on building and maintaining complex web apps, designing secure REST APIs, and implementing automated testing frameworks. I operate in highly collaborative Agile environments.
          </p>
        </div>
      </div>
    </section>
  );
}
