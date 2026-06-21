import React from 'react';
import { Layers, CheckCircle2, Github, ExternalLink, Box, Terminal } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      title: "Pharmaceutical Delivery Platform",
      arch: "Developed a 6-role enterprise delivery system with secure multi-tenant capabilities.",
      features: [
        "Real-time order lifecycle tracking with GPS updates",
        "Automated customer loyalty system and dynamic discounts",
        "PDF invoice uploads and automated backend processing"
      ],
      tags: ["Laravel", "PHP", "MySQL", "JavaScript", "RESTful APIs", "CI/CD"],
      github: "https://github.com/PrajulVP",
      hasDemo: true,
      color: "from-blue-500/10 to-indigo-500/5",
      borderGlow: "hover:shadow-blue-500/5"
    },
    {
      title: "Edusoft Institutional ERP",
      arch: "Comprehensive academic management portal integrating hardware-level endpoints.",
      features: [
        "Biometric API integration (eSSL) for automated student/staff logs",
        "Integrated exam lifecycle tracking and marks-card generator",
        "Interactive analytics dashboards for institutional administrators"
      ],
      tags: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "Biometric SDK"],
      github: "https://github.com/PrajulVP",
      hasDemo: false,
      color: "from-purple-500/10 to-indigo-500/5",
      borderGlow: "hover:shadow-purple-500/5"
    },
    {
      title: "Decoupled E-Commerce Engine",
      arch: "Full-stack decoupled marketplace system with robust API bridges.",
      features: [
        "Token-based secure authentication protocols",
        "Dynamic cart states, checkout panels, and webhook processors",
        "Third-party payment gateway integration (Stripe/PayPal simulated)"
      ],
      tags: ["Django", "Python", "React.js", "SQLite", "REST APIs"],
      github: "https://github.com/PrajulVP",
      hasDemo: true,
      color: "from-emerald-500/10 to-teal-500/5",
      borderGlow: "hover:shadow-emerald-500/5"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold font-mono">04 / Featured Projects</h3>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-900">
          Source code available
        </span>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projectsList.map((proj, i) => (
          <div 
            key={i} 
            className={`glass-panel rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 ${proj.borderGlow}`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />

            <div className="relative z-10 space-y-5">
              {/* Project Window Header */}
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-indigo-400">
                  <Box size={18} />
                </div>
                
                {/* External Links */}
                <div className="flex items-center gap-2">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                    title="View Source Code"
                  >
                    <Github size={14} />
                  </a>
                  {proj.hasDemo && (
                    <a 
                      href="#" 
                      className="p-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer"
                      title="View Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Architecture */}
              <div>
                <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 font-display">
                  {proj.title}
                </h4>
                <div className="flex items-start gap-2 text-xs text-zinc-400 mt-2 font-mono bg-zinc-950/60 p-3 rounded-lg border border-zinc-900 leading-relaxed">
                  <Terminal size={12} className="text-zinc-600 mt-0.5 flex-shrink-0" />
                  <span>{proj.arch}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">Core Enhancements:</span>
                <ul className="space-y-2">
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400 leading-normal">
                      <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags footer */}
            <div className="relative z-10 pt-6 mt-6 border-t border-zinc-800/50 flex flex-wrap gap-1.5">
              {proj.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-950/80 border border-zinc-800/80 text-zinc-400 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}