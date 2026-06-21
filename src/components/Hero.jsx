import React from 'react';
import { Sparkles, Terminal, FileText, Cpu, Compass } from 'lucide-react';

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
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white max-w-2xl font-display">
          Building resilient, scalable backend architectures & seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">user-first web experiences.</span>
        </h1>
        
        <p className="text-zinc-400 leading-relaxed text-base md:text-lg max-w-3xl font-light">
          I am a hands-on Software Developer specialized in engineering robust business logic, high-performance database management, and automated workflows. From pharmaceutical systems to institutional ERPs, I focus on writing high-quality, reusable code and deploying via streamlined pipelines.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="glass-panel-interactive p-5 rounded-xl border border-zinc-800/80 flex flex-col gap-2">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Cpu size={14} /> Backend Stack
          </span>
          <span className="text-white font-display text-xl font-bold mt-1">Laravel & Django</span>
          <span className="text-zinc-500 text-[11px] font-mono">Core specialization</span>
        </div>

        <div className="glass-panel-interactive p-5 rounded-xl border border-zinc-800/80 flex flex-col gap-2">
          <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Terminal size={14} /> Deployments
          </span>
          <span className="text-white font-display text-xl font-bold mt-1">CI/CD & Git</span>
          <span className="text-zinc-500 text-[11px] font-mono">Automation focused</span>
        </div>

        <div className="glass-panel-interactive p-5 rounded-xl border border-zinc-800/80 col-span-2 md:col-span-1 flex flex-col gap-2">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Compass size={14} /> Databases
          </span>
          <span className="text-white font-display text-xl font-bold mt-1">MySQL & SQLite</span>
          <span className="text-zinc-500 text-[11px] font-mono">Highly optimized queries</span>
        </div>
      </div>

      {/* Expanded Details Card */}
      <div className="glass-panel rounded-xl p-6 border border-zinc-800/60 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
        <p className="text-zinc-300 leading-relaxed text-sm md:text-base font-normal">
          Currently serving as a Software Engineer at Logiprompt Techno Solutions, I focus on building and maintaining complex web apps, designing secure Rest APIs, and implementing automated testing frameworks. I operate in highly collaborative Agile environments, using Git and Jira to drive quality features on time.
        </p>
      </div>
    </section>
  );
}