import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Note: This form is a placeholder. A backend service is required to deliver messages.');
  };

  return (
    <section id="contact" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          I'm always interested in connecting with fellow developers, learning about opportunities, and discussing ideas. Feel free to reach out.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <a href="mailto:abhiramapadaru@gmail.com" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '1.1rem',
              color: 'var(--text-main)',
              transition: 'var(--transition-fast)'
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
              <Mail size={24} className="accent" />
              <span>abhiramapadaru@gmail.com</span>
            </a>
            <a href="https://github.com/AbhiramaPS" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '1.1rem',
              color: 'var(--text-main)',
              transition: 'var(--transition-fast)'
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
              <Github size={24} className="accent" />
              <span>github.com/AbhiramaPS</span>
            </a>
            <a href="https://www.linkedin.com/in/abhirama-p-s-602859331/" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '1.1rem',
              color: 'var(--text-main)',
              transition: 'var(--transition-fast)'
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
              <Linkedin size={24} className="accent" />
              <span>linkedin.com/in/abhirama-p-s-602859331/</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            backgroundColor: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Name</label>
              <input
                type="text"
                required
                style={{
                  padding: '0.8rem',
                  backgroundColor: '#151515',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  color: 'var(--text-main)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Email</label>
              <input
                type="email"
                required
                style={{
                  padding: '0.8rem',
                  backgroundColor: '#151515',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  color: 'var(--text-main)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Message</label>
              <textarea
                required
                rows="5"
                style={{
                  padding: '0.8rem',
                  backgroundColor: '#151515',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  color: 'var(--text-main)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <button type="submit" style={{
              backgroundColor: 'var(--accent-color)',
              color: '#151515',
              padding: '1rem',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              border: 'none',
              transition: 'var(--transition-fast)'
            }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
              SEND MESSAGE
            </button>
            {formStatus && (
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
                marginTop: '1rem',
                fontStyle: 'italic'
              }}>
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;