import React from 'react';
import { Database, Settings, Server } from 'lucide-react';
import { 
  SiLaravel, 
  SiCodeigniter, 
  SiDjango, 
  SiReact, 
  SiMysql, 
  SiHtml5, 
  SiCss, 
  SiGit, 
  SiGithubactions, 
  SiJira, 
  SiSwagger,
  SiPhp,
  SiPython,
  SiJavascript
} from 'react-icons/si';

export default function Skills() {
  const categories = [
    {
      title: "Core Backend",
      icon: <Server size={18} className="text-indigo-400" />,
      skills: [
        { 
          name: "Laravel (PHP)", 
          level: "90%",
          icon: (
            <div className="flex gap-1 items-center">
              <SiLaravel size={14} className="text-[#FF2D20] group-hover:animate-pulse" />
              <SiPhp size={14} className="text-[#777BB4]" />
            </div>
          )
        },
        { 
          name: "CodeIgniter (PHP)", 
          level: "85%",
          icon: (
            <div className="flex gap-1 items-center">
              <SiCodeigniter size={14} className="text-[#EE4326]" />
              <SiPhp size={14} className="text-[#777BB4]" />
            </div>
          )
        },
        { 
          name: "Django (Python)", 
          level: "75%",
          icon: (
            <div className="flex gap-1 items-center">
              <SiDjango size={14} className="text-[#092E20]" />
              <SiPython size={14} className="text-[#3776AB]" />
            </div>
          )
        },
      ]
    },
    {
      title: "Frontend & DB",
      icon: <Database size={18} className="text-purple-400" />,
      skills: [
        { 
          name: "React.js / JS", 
          level: "80%",
          icon: (
            <div className="flex gap-1 items-center">
              <SiReact size={14} className="text-[#61DAFB]" />
              <SiJavascript size={14} className="text-[#F7DF1E] rounded-sm" />
            </div>
          )
        },
        { 
          name: "MySQL / SQL", 
          level: "85%",
          icon: <SiMysql size={16} className="text-[#4479A1]" />
        },
        { 
          name: "HTML5 / CSS3", 
          level: "90%",
          icon: (
            <div className="flex gap-1 items-center">
              <SiHtml5 size={14} className="text-[#E34F26]" />
              <SiCss size={14} className="text-[#1572B6]" />
            </div>
          )
        },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings size={18} className="text-emerald-400" />,
      skills: [
        { 
          name: "Git / Version Control", 
          level: "85%",
          icon: <SiGit size={14} className="text-[#F05032]" />
        },
        { 
          name: "CI/CD Pipelines", 
          level: "75%",
          icon: <SiGithubactions size={14} className="text-[#2088FF]" />
        },
        { 
          name: "Jira / Swagger APIs", 
          level: "80%",
          icon: (
            <div className="flex gap-1 items-center">
              <SiJira size={14} className="text-[#0052CC]" />
              <SiSwagger size={14} className="text-[#85EA2D]" />
            </div>
          )
        },
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 space-y-12">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
        <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold font-mono">02 / Technical Skills</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
            {/* Ambient Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-2.5 mb-6 relative z-10">
              <div className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-800 flex-shrink-0">
                {cat.icon}
              </div>
              <h4 className="text-md font-bold text-zinc-100 font-display">{cat.title}</h4>
            </div>

            <div className="space-y-5 relative z-10">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-mono text-zinc-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="font-mono text-zinc-500 font-semibold">{skill.level}</span>
                  </div>
                  {/* Premium Progress Bar */}
                  <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-1000 group-hover:brightness-110"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modern Badge Container for Quick Look */}
      <div className="glass-panel rounded-xl p-5 border border-zinc-800/50 flex flex-wrap gap-2.5 items-center">
        <span className="text-[11px] font-mono text-zinc-500 font-bold uppercase tracking-wider mr-2">Quick Tags:</span>
        {[
          { name: "PHP", icon: <SiPhp className="text-[#777BB4]" size={13} /> },
          { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" size={13} /> },
          { name: "CodeIgniter", icon: <SiCodeigniter className="text-[#EE4326]" size={13} /> },
          { name: "Python", icon: <SiPython className="text-[#3776AB]" size={13} /> },
          { name: "Django", icon: <SiDjango className="text-[#092E20]" size={13} /> },
          { name: "React.js", icon: <SiReact className="text-[#61DAFB]" size={13} /> },
          { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={13} /> },
          { name: "Git", icon: <SiGit className="text-[#F05032]" size={13} /> },
          { name: "Jira", icon: <SiJira className="text-[#0052CC]" size={13} /> },
          { name: "CI/CD", icon: <SiGithubactions className="text-[#2088FF]" size={13} /> },
          { name: "Swagger API", icon: <SiSwagger className="text-[#85EA2D]" size={13} /> },
        ].map((tag, idx) => (
          <span 
            key={idx} 
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono rounded bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-white hover:border-indigo-500/30 transition-all cursor-default"
          >
            {tag.icon}
            <span>#{tag.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}