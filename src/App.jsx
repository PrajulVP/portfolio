import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import TerminalConsole from './components/TerminalConsole';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  FileText, 
  User, 
  Code2, 
  FolderGit2, 
  GraduationCap 
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('summary');
  const [isHovering, setIsHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Scrollspy & Scroll Reveal logic
  useEffect(() => {
    const sections = ['summary', 'skills', 'experience', 'projects', 'education'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
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

    // Intersection Observer for scroll-reveal animations
    const revealCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });

    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    revealEls.forEach((el) => revealObserver.observe(el));

    // Pointer device detection and custom mouse cursor handling
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      revealEls.forEach((el) => revealObserver.unobserve(el));
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const navMenuItems = [
    { id: 'summary', index: '01', label: 'Summary', icon: User },
    { id: 'skills', index: '02', label: 'Technical Skills', icon: Code2 },
    { id: 'experience', index: '03', label: 'Work Experience', icon: Briefcase },
    { id: 'projects', index: '04', label: 'Featured Projects', icon: FolderGit2 },
    { id: 'education', index: '05', label: 'Education & Credentials', icon: GraduationCap },
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
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 border ${
                isActive 
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20' 
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-indigo-400 hover:border-indigo-500/30'
              }`}
            >
              <Icon size={14} className="transition-transform group-hover:scale-110" />

              {/* Tooltip Label */}
              <span className="absolute left-12 scale-0 group-hover:scale-100 origin-left transition-all duration-200 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg shadow-xl pointer-events-none whitespace-nowrap">
                {item.index} / {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Main Workspace Layout (Wider screen size max-w-[1360px]) */}
      <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 py-12 lg:py-16 flex flex-col gap-16 md:gap-24">
        
        {/* Top Header Block: Profile & Interactive Dashboard */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Column 1: Standalone Profile Photo Card (Col span 3) - Enlarged Image */}
          <div className="md:col-span-3 flex flex-col p-3 rounded-3xl bg-zinc-950/50 border border-zinc-900/80 relative overflow-hidden group shadow-xl">
            {/* Ambient Background Glow inside the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* The photo itself fills almost the whole card width */}
            <div className="relative group/image flex-shrink-0 w-full overflow-hidden rounded-2xl aspect-[4/5] mb-3">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-20 group-hover/image:opacity-40 transition duration-700 pointer-events-none" />
              <img 
                src="/photo.png" 
                alt="Prajul V P" 
                className="relative w-full h-full object-cover rounded-2xl border border-zinc-900 shadow-xl bg-zinc-900" 
              />
            </div>
            
            <div className="px-2 pb-1.5 z-10 relative space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white font-mono flex items-center gap-1 font-semibold">
                  <MapPin size={11} className="text-indigo-400" /> Thrissur, Kerala
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Bio & Profile details (Col span 5) */}
          <div className="md:col-span-5 flex flex-col justify-between p-6 rounded-3xl bg-zinc-900/15 border border-zinc-900/60 space-y-6">
            <div className="space-y-4">
              {/* Online status indicator */}
              <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-850 px-3 py-1 rounded-full text-[10px] font-mono font-medium self-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-semibold">Available for Opportunities</span>
              </div>

              {/* Profile Intro */}
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
                  PRAJUL V P
                </h1>
                <h2 className="text-sm font-bold text-indigo-400 font-mono tracking-wider flex items-center gap-2">
                  <Briefcase size={15} /> Software Engineer
                </h2>
                <p className="text-zinc-400 text-xs lg:text-sm font-medium leading-relaxed mt-2">
                  Hands-on Software Developer specialized in building secure, high-performance web applications, robust APIs, and optimized databases.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-mono text-[11px] hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-650/15 font-bold cursor-pointer"
                >
                  <FileText size={13} />
                  <span>Resume (PDF)</span>
                </a>
                <a 
                  href="mailto:prajulsankar4@gmail.com"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-[11px] hover:text-white hover:border-zinc-700 hover:bg-zinc-900 active:scale-95 transition-all font-bold cursor-pointer"
                >
                  <Mail size={13} className="text-indigo-400" />
                  <span>Get in Touch</span>
                </a>
              </div>

              {/* Contact Details Quick Cards */}
              <div className="grid grid-cols-2 gap-2.5 text-[10px] font-mono text-zinc-500">
                <a 
                  href="mailto:prajulsankar4@gmail.com" 
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-900 hover:border-indigo-500/30 hover:text-white transition-all truncate"
                >
                  <Mail size={11} className="text-zinc-650 flex-shrink-0" />
                  <span className="truncate">prajulsankar4@gmail.com</span>
                </a>
                <a 
                  href="tel:+918921316882" 
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-950/80 border border-zinc-900 hover:border-indigo-500/30 hover:text-white transition-all"
                >
                  <Phone size={11} className="text-zinc-650 flex-shrink-0" />
                  <span>+91 8921316882</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Interactive Terminal Console (Col span 4) */}
          <div className="md:col-span-4 w-full flex">
            <TerminalConsole />
          </div>
        </header>

        {/* Content Sections */}
        <main className="space-y-24 md:space-y-32 pb-24">
          {/* Summary / About */}
          <div className="reveal-on-scroll">
            <Hero />
          </div>
          
          {/* Skills Dashboard */}
          <div className="reveal-on-scroll">
            <Skills />
          </div>
          
          {/* Experience Timeline */}
          <div className="reveal-on-scroll">
            <Experience />
          </div>
          
          {/* Projects Showcases */}
          <div className="reveal-on-scroll">
            <Projects />
          </div>
          
          {/* Education Details */}
          <div className="reveal-on-scroll">
            <Education />
          </div>
        </main>

        {/* Premium Footer Section */}
        <footer className="w-full border-t border-zinc-900 bg-zinc-950/60 backdrop-blur-md pt-16 pb-12 relative z-10 rounded-t-[2.5rem]">
          {/* Ambient glow behind footer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Left Brand Column */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-2 text-indigo-400 font-mono font-bold tracking-tight text-base">
                <span className="text-indigo-400 font-extrabold">&lt;</span>
                <span>PrajulVP.dev</span>
                <span className="text-indigo-400 font-extrabold">/&gt;</span>
              </div>
              <p className="text-zinc-400 text-xs max-w-sm leading-relaxed">
                Software Engineer specialized in building robust business logic, high-performance database management, and streamlined web workflows.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 px-3 py-1 rounded-full self-start w-fit">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Available for new projects</span>
              </div>
            </div>

            {/* Right Contact Column */}
            <div className="md:col-span-3 space-y-4 text-left">
              <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest font-bold block">Connect</span>
              <div className="flex flex-col gap-2.5 text-xs font-mono">
                <a href="mailto:prajulsankar4@gmail.com" className="text-zinc-400 hover:text-white flex items-center gap-2 group">
                  <Mail size={12} className="text-zinc-650 group-hover:text-indigo-400 transition-colors" />
                  <span>prajulsankar4@gmail.com</span>
                </a>
                <a href="tel:+918921316882" className="text-zinc-400 hover:text-white flex items-center gap-2 group">
                  <Phone size={12} className="text-zinc-655 group-hover:text-indigo-400 transition-colors" />
                  <span>+91 8921316882</span>
                </a>
                <div className="flex items-center gap-2.5 pt-2">
                  <a href="https://github.com/PrajulVP" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                    <Github size={16} />
                  </a>
                  <a href="https://linkedin.com/in/prajul-v-p-29471129b" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-zinc-900/60 my-6" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-[10px] font-mono text-zinc-550">
            <div>
              &copy; {new Date().getFullYear()} Prajul V P. All rights reserved.
            </div>
            <div className="flex items-center gap-3">
              <span>Stack:</span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 text-zinc-400">React</span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 text-zinc-400">Tailwind</span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 text-zinc-400">Vite</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Mouse Cursor */}
      {isFinePointer && (
        <div 
          className={`fixed pointer-events-none z-50 rounded-full bg-indigo-500 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)] ${
            isHovering ? 'w-5 h-5 bg-indigo-400 opacity-60 scale-100' : 'w-2.5 h-2.5 opacity-100 scale-100'
          }`}
          style={{
            left: 'var(--mouse-x, -100px)',
            top: 'var(--mouse-y, -100px)',
          }}
        />
      )}
    </div>
  );
}