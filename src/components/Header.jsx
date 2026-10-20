import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(21, 21, 21, 0.9)',
      backdropFilter: 'blur(8px)',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Abhirama <span className="accent">P S</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/AbhiramaPS" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--text-main)' }}>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abhirama-p-s-602859331/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--text-main)' }}>
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;