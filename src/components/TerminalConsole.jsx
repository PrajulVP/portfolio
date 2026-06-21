import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

export default function TerminalConsole() {
  const [history, setHistory] = useState([
    { type: 'input', text: 'help' },
    { type: 'output', text: 'Welcome to Prajul\'s interactive console. Type a command or click a shortcut below.' },
    { type: 'output', text: 'Available commands: [about], [skills], [projects], [contact], [resume], [clear]' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollContainerRef = useRef(null);

  const commandResponses = {
    help: 'Available commands:\n  about    - Show a brief intro about Prajul\n  skills   - List technical skills and frameworks\n  projects - View key projects and architectures\n  contact  - Get contact details\n  resume   - View/download Prajul\'s resume (PDF)\n  clear    - Clear terminal history',
    about: 'Prajul V P - Software Engineer.\nSpecializes in backend engineering, database optimization, API integration, and reliable CI/CD workflows. Experienced in Laravel, CodeIgniter, Django, React, and MySQL.',
    skills: 'Languages & Frameworks:\n  - PHP (Laravel, CodeIgniter)\n  - Python (Django)\n  - JavaScript (React.js)\n  - HTML / CSS / SQL\nTools & Databases:\n  - Git, Jira, CI/CD, REST APIs, Swagger, MySQL, SQLite',
    projects: 'Featured Projects:\n  - Pharmaceutical Delivery Platform (Laravel, MySQL)\n  - Edusoft ERP Software (CodeIgniter, eSSL biometric, MySQL)\n  - Ecommerce Website (Django, React.js, SQLite)',
    contact: 'Contact Information:\n  - Email: prajulsankar4@gmail.com\n  - Phone: +91 8921316882\n  - Location: Thrissur, Kerala, India',
    resume: 'Opening Prajul\'s Resume (PDF) in a new tab...'
  };

  const handleCommand = (cmdText) => {
    const trimmedCmd = cmdText.trim().toLowerCase();
    if (!trimmedCmd) return;

    let newHistory = [...history, { type: 'input', text: trimmedCmd }];

    if (trimmedCmd === 'clear') {
      newHistory = [];
    } else if (trimmedCmd === 'resume') {
      window.open('/resume.pdf', '_blank');
      newHistory.push({ type: 'output', text: commandResponses.resume });
    } else if (commandResponses[trimmedCmd]) {
      newHistory.push({ type: 'output', text: commandResponses[trimmedCmd] });
    } else {
      newHistory.push({ type: 'output', text: `Command not found: "${trimmedCmd}". Type "help" for a list of commands.` });
    }

    setHistory(newHistory);
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputValue);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  return (
    <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-zinc-800/80 font-mono text-xs flex flex-col h-[280px]">
      {/* Terminal Title Bar */}
      <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800/60 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <TerminalIcon size={13} className="text-indigo-400" />
          <span className="text-zinc-400 font-semibold tracking-tight text-[11px]">prajul@console:~</span>
        </div>
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
        </div>
      </div>

      {/* Terminal Outputs */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 p-4 overflow-y-auto space-y-2 text-zinc-300 scrollbar-thin"
      >
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {line.type === 'input' ? (
              <div className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                <span>prajulvp@dev:~$</span>
                <span className="text-zinc-100">{line.text}</span>
              </div>
            ) : (
              <div className="text-zinc-400 pl-4 border-l border-zinc-800/60">{line.text}</div>
            )}
          </div>
        ))}
      </div>

      {/* Shortcuts Toolbar */}
      <div className="px-4 py-1.5 bg-zinc-950/60 border-t border-zinc-900 flex flex-wrap gap-2 items-center">
        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Shortcuts:</span>
        {['about', 'skills', 'projects', 'contact', 'resume'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-950/20 active:scale-95 transition-all cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="bg-zinc-950 border-t border-zinc-900 flex items-center px-4 py-2">
        <ChevronRight size={14} className="text-indigo-400 flex-shrink-0 animate-pulse" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a command..."
          className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-zinc-200 ml-1 font-mono text-xs placeholder-zinc-600"
        />
      </form>
    </div>
  );
}
