import React, { useState } from 'react';
import { Terminal, Mail, Menu, X, Github, Linkedin, FileText } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Summary", href: "#summary" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/75 border-b border-zinc-900/80 w-full px-6 md:px-12 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-2 font-mono text-indigo-400 font-bold tracking-tight text-base">
          <Terminal size={18} className="animate-pulse" />
          <span>PrajulVP.dev</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  isActive 
                    ? 'text-indigo-400 border-b-2 border-indigo-500 pb-1 -mb-1' 
                    : 'text-zinc-400 hover:text-indigo-300'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Call to Action & Socials */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-2">
            <a 
              href="https://github.com/PrajulVP" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-800 transition-all cursor-pointer"
              title="GitHub"
            >
              <Github size={15} />
            </a>
            <a 
              href="https://linkedin.com/in/prajul-vp" 
              target="_blank" 
              rel="noreferrer" 
              className="p-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-indigo-400 hover:border-zinc-800 transition-all cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-950 border border-zinc-850 text-zinc-300 font-mono text-xs hover:text-white hover:border-zinc-700 hover:bg-zinc-900 active:scale-95 transition-all cursor-pointer font-bold"
            >
              <FileText size={13} className="text-indigo-400" />
              <span>Resume</span>
            </a>
            <a
              href="mailto:prajulsankar4@gmail.com"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white font-mono text-xs hover:bg-indigo-500 active:scale-95 transition-all cursor-pointer font-bold"
            >
              <Mail size={13} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
        
        {/* Toggle Button (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="absolute top-[57px] left-0 right-0 bg-black/95 border-b border-zinc-900 p-6 space-y-6 flex flex-col z-40 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium text-sm transition-colors py-1.5 ${
                    isActive ? 'text-indigo-400 font-bold' : 'text-zinc-400 hover:text-indigo-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-indigo-400 hover:text-indigo-300 font-bold text-sm transition-colors py-1.5 flex items-center gap-1.5"
            >
              <FileText size={15} />
              <span>Resume (PDF)</span>
            </a>
          </div>

          <hr className="border-zinc-900" />

          {/* Social Links inside Drawer */}
          <div className="flex items-center gap-5 text-sm text-zinc-400 font-mono">
            <a 
              href="https://github.com/PrajulVP" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Github size={14} /> <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/prajul-vp" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-indigo-400 transition-colors flex items-center gap-1"
            >
              <Linkedin size={14} /> <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:prajulsankar4@gmail.com" 
              className="hover:text-rose-400 transition-colors flex items-center gap-1"
            >
              <Mail size={14} /> <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}