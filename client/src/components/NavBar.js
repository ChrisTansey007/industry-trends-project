import React, { useState } from 'react';
import colors from '../constants/colors';

function NavBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const links = [
    { href: '#market-growth', label: 'Market Growth' },
    { href: '#competencies', label: 'Core Competencies' },
    { href: '#tech-stack-interactive', label: 'Tech Stack' },
    { href: '#rag-pipelines', label: 'RAG Pipelines' },
    { href: '#challenges', label: 'Challenges' },
  ];
  const darkToggle = () => {
    document.body.classList.toggle('dark');
  };
  return (
    <nav className="bg-white dark-card shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <button className="md:hidden" onClick={toggle} aria-label="Menu">
          ☰
        </button>
        <ul className={`flex-col md:flex-row md:flex gap-4 ${open ? 'flex' : 'hidden'}`}
            onClick={() => setOpen(false)}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold" style={{color: colors.blue}}>{l.label}</a>
            </li>
          ))}
          <li>
            <button onClick={darkToggle} className="text-sm font-semibold" style={{color: colors.blue}}>
              Toggle Dark
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
