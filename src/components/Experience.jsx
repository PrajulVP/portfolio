import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  const jobs = [
    {
      role: "Software Engineer",
      company: "Logiprompt Techno Solutions",
      location: "Trivandrum",
      period: "July 2025 – Present",
      isCurrent: true,
      points: [
        "Led the architectural development and code refactoring of a multi-role pharmaceutical delivery application, improving response times and data consistency.",
        "Integrated Swagger API endpoints to provide clean, self-documenting APIs for mobile apps and external modules.",
        "Created optimized SQL schema structures and backend workflows, boosting search queries speed by over 30%.",
        "Configured robust CI/CD pipelines to automate testing and release, cutting deployment downtime by 40%."
      ]
    },
    {
      role: "IT Admin",
      company: "Esaf Cooperative",
      location: "Thrissur",
      period: "Mar 2025 – Jun 2025",
      isCurrent: false,
      points: [
        "Administered enterprise local networking infrastructure and supervised Sophos firewall logs to ensure secure connections.",
        "Troubleshot hardware and system bugs for corporate office personnel, maintaining 99% uptime of employee workstations.",
        "Maintained network logs, security systems, and CCTV systems following corporate compliance standards."
      ]
    },
    {
      role: "PHP Full Stack Intern",
      company: "Inmakes Infotech",
      location: "Kochi",
      period: "Sep 2024 – Dec 2024",
      isCurrent: false,
      points: [
        "Constructed scalable CRUD modules and database tables using PHP Laravel and CodeIgniter structures.",
        "Built responsive user interfaces and integrated user authentication, secure cookie session controls, and form validation filters."
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-24 space-y-12">
      {/* Section Header */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold font-mono">03 / Work Experience</h3>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-zinc-800 ml-4 pl-8 space-y-12 py-2">
        {jobs.map((job, i) => (
          <div key={i} className="relative group">
            {/* Timeline Dot Node */}
            <div className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 border-black transition-all duration-300 ${
              job.isCurrent 
                ? 'bg-indigo-500 pulse-dot' 
                : 'bg-zinc-800 group-hover:bg-indigo-400 group-hover:border-indigo-950'
            }`} />

            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
              {/* Highlight bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                job.isCurrent ? 'bg-indigo-500' : 'bg-transparent group-hover:bg-indigo-500/50'
              }`} />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2">
                    {job.role}
                    {job.isCurrent && (
                      <span className="text-[10px] bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 px-2 py-0.5 rounded font-mono font-medium">
                        Active Role
                      </span>
                    )}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mt-1 font-medium">
                    <span className="flex items-center gap-1"><Building2 size={13} /> {job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-400 bg-indigo-950/20 border border-indigo-900/30 px-3 py-1 rounded-full self-start md:self-auto">
                  <Calendar size={12} />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Achievements list */}
              <ul className="space-y-3 text-sm text-zinc-400 leading-relaxed font-normal">
                {job.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-indigo-500 select-none mt-1.5 text-[10px]">▪</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}