import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import TerminalConsole from './components/TerminalConsole';
import { Github, Linkedin, Mail, Phone, MapPin, Terminal, Briefcase, FileText } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('summary');

  // Scrollspy logic to track which section is currently on screen
  useEffect(() => {
    const sections = ['summary', 'skills', 'experience', 'projects', 'education'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // trigger when section occupies center
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navMenuItems = [
    { id: 'summary', index: '01', label: 'Summary' },
    { id: 'skills', index: '02', label: 'Technical Skills' },
    { id: 'experience', index: '03', label: 'Work Experience' },
    { id: 'projects', index: '04', label: 'Featured Projects' },
    { id: 'education', index: '05', label: 'Education & Credentials' },
  ];

  return (
    <div className="bg-black min-h-screen text-zinc-300 antialiased relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      
      {/* Glowing Orb 1 */}
      <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none z-0 animate-float-1" />
      
      {/* Glowing Orb 2 */}
      <div className="absolute bottom-[20%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none z-0 animate-float-2" />

      {/* Navigation Header (all screens) */}
      <Navbar activeSection={activeSection} />

      {/* Floating Left Vertical Section Navigator (Desktop only) */}
      <div className="fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 bg-zinc-950/65 backdrop-blur-md border border-zinc-900/80 p-2.5 rounded-full shadow-2xl">
        {navMenuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
            >
              {/* Dot indicator */}
              <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-indigo-500 scale-125 ring-4 ring-indigo-500/25' 
                  : 'bg-zinc-700 group-hover:bg-indigo-400 group-hover:scale-110'
              }`} />

              {/* Tooltip Label */}
              <span className="absolute left-11 scale-0 group-hover:scale-100 origin-left transition-all duration-200 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg shadow-xl pointer-events-none whitespace-nowrap">
                {item.index} / {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Main Workspace Layout (Full Width) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 py-12 lg:py-16 flex flex-col gap-16 md:gap-24">
        
        {/* Top Header Block: Profile & Interactive Dashboard */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Profile Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center border border-zinc-800 shadow-lg shadow-indigo-500/10">
                <Terminal className="text-white" size={22} />
              </div>
              
              {/* Online status indicator */}
              <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800/80 px-3 py-1 rounded-full text-[10px] font-mono font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400">Available for Opportunities</span>
              </div>
            </div>

            {/* Profile Intro */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
                PRAJUL V P
              </h1>
              <h2 className="text-lg md:text-xl font-bold text-indigo-400 font-mono tracking-wide flex items-center gap-2">
                <Briefcase size={18} /> Software Engineer
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-xl font-medium leading-relaxed">
                Building reliable backends, high-performance database logic, and automated CI/CD deployment pipelines.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-mono text-xs hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-600/10 font-bold cursor-pointer"
              >
                <FileText size={14} />
                <span>View / Download Resume (PDF)</span>
              </a>
              <a 
                href="mailto:prajulsankar4@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs hover:text-white hover:border-zinc-700 hover:bg-zinc-900 active:scale-95 transition-all font-bold cursor-pointer"
              >
                <Mail size={14} className="text-indigo-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Contact Details Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono text-zinc-400">
              <a 
                href="mailto:prajulsankar4@gmail.com" 
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900 hover:border-indigo-500/30 hover:text-white transition-all"
              >
                <Mail size={13} className="text-zinc-600 flex-shrink-0" />
                <span className="truncate">prajulsankar4@gmail.com</span>
              </a>
              <a 
                href="tel:+918921316882" 
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900 hover:border-indigo-500/30 hover:text-white transition-all"
              >
                <Phone size={13} className="text-zinc-600 flex-shrink-0" />
                <span>+91 8921316882</span>
              </a>
              <div 
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-900"
              >
                <MapPin size={13} className="text-zinc-600 flex-shrink-0" />
                <span>Thrissur, Kerala</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Console */}
          <div className="lg:col-span-5 w-full">
            <TerminalConsole />
          </div>
        </header>

        {/* Content Sections */}
        <main className="space-y-24 md:space-y-32 pb-24">
          {/* Summary / About */}
          <Hero />
          
          {/* Skills Dashboard */}
          <Skills />
          
          {/* Experience Timeline */}
          <Experience />
          
          {/* Projects Showcases */}
          <Projects />
          
          {/* Education Details */}
          <Education />
        </main>
      </div>
    </div>
  );
}