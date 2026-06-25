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
  SiPhp, 
  SiPython, 
  SiJavascript,
  SiPostman
} from 'react-icons/si';

export default function Skills() {
  const categories = [
    {
      title: "Core Backend",
      colorClass: "from-indigo-500/10 to-transparent",
      borderColor: "hover:border-indigo-500/30",
      icon: <Server size={18} className="text-indigo-400" />,
      skills: [
        { name: "Laravel", icon: <SiLaravel size={16} className="text-[#FF2D20]" /> },
        { name: "CodeIgniter", icon: <SiCodeigniter size={16} className="text-[#EE4326]" /> },
        { name: "Django", icon: <SiDjango size={16} className="text-[#092E20]" /> },
        { name: "PHP", icon: <SiPhp size={16} className="text-[#777BB4]" /> },
        { name: "Python", icon: <SiPython size={16} className="text-[#3776AB]" /> },
      ]
    },
    {
      title: "Frontend & DB",
      colorClass: "from-purple-500/10 to-transparent",
      borderColor: "hover:border-purple-500/30",
      icon: <Database size={18} className="text-purple-400" />,
      skills: [
        { name: "React.js", icon: <SiReact size={16} className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript size={16} className="text-[#F7DF1E] rounded-sm" /> },
        { name: "MySQL", icon: <SiMysql size={18} className="text-[#4479A1]" /> },
        { name: "HTML5", icon: <SiHtml5 size={16} className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss size={16} className="text-[#1572B6]" /> },
      ]
    },
    {
      title: "DevOps & Tools",
      colorClass: "from-emerald-500/10 to-transparent",
      borderColor: "hover:border-emerald-500/30",
      icon: <Settings size={18} className="text-emerald-400" />,
      skills: [
        { name: "Git", icon: <SiGit size={16} className="text-[#F05032]" /> },
        { name: "CI/CD", icon: <SiGithubactions size={16} className="text-[#2088FF]" /> },
        { name: "Postman", icon: <SiPostman size={16} className="text-[#FF6C37]" /> },
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
          <div 
            key={i} 
            className={`glass-panel rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 border border-zinc-800/80 ${cat.borderColor}`}
          >
            {/* Ambient Background Gradient on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="flex items-center gap-2.5 mb-6 relative z-10">
              <div className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-800 flex-shrink-0">
                {cat.icon}
              </div>
              <h4 className="text-md font-bold text-zinc-100 font-display">{cat.title}</h4>
            </div>

            <div className="grid grid-cols-1 gap-2.5 relative z-10">
              {cat.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-900/60 hover:border-zinc-800 hover:bg-zinc-900/30 hover:-translate-y-0.5 transition-all duration-300 group/skill cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 transition-transform group-hover/skill:scale-110">
                      {skill.icon}
                    </div>
                    <span className="font-mono text-xs text-zinc-300 font-medium group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Subtle active indicator dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover/skill:bg-indigo-500 transition-colors" />
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
          { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" size={13} /> },
          { name: "CodeIgniter", icon: <SiCodeigniter className="text-[#EE4326]" size={13} /> },
          { name: "Django", icon: <SiDjango className="text-[#092E20]" size={13} /> },
          { name: "PHP", icon: <SiPhp className="text-[#777BB4]" size={13} /> },
          { name: "Python", icon: <SiPython className="text-[#3776AB]" size={13} /> },
          { name: "React.js", icon: <SiReact className="text-[#61DAFB]" size={13} /> },
          { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={13} /> },
          { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={13} /> },
          { name: "Git", icon: <SiGit className="text-[#F05032]" size={13} /> },
          { name: "CI/CD", icon: <SiGithubactions className="text-[#2088FF]" size={13} /> },
          { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" size={13} /> },
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