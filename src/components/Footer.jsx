import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      padding: '3rem 0',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        <div style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'var(--text-main)',
          marginBottom: '1.5rem'
        }}>
          Abhirama <span className="accent">P S</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <a href="https://github.com/AbhiramaPS" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/abhirama-p-s-602859331/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Linkedin size={20} />
          </a>
          <a href="mailto:abhiramapadaru@gmail.com" aria-label="Email" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Mail size={20} />
          </a>
        </div>
        <p style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Abhirama P S. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;