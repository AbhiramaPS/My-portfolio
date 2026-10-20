import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem 0'
    }}>
      {/* Decorative Circles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        border: '2px solid rgba(78, 225, 160, 0.1)',
        borderRadius: '50%',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        border: '2px solid rgba(78, 225, 160, 0.05)',
        borderRadius: '50%',
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            fontWeight: '800'
          }}>
            Nice to meet you!<br />
            I'm <span className="accent">Abhirama P S.</span>
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            maxWidth: '600px'
          }}>
            I'm a Computer Science Engineering student passionate about software development, web technologies, and building practical solutions to real-world problems.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              backgroundColor: 'var(--accent-color)',
              color: '#151515',
              padding: '0.8rem 2rem',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              letterSpacing: '1px'
            }}>
              CONTACT ME
            </a>
            <a href="#projects" style={{
              border: '2px solid var(--accent-color)',
              color: 'var(--accent-color)',
              padding: '0.8rem 2rem',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              letterSpacing: '1px'
            }}>
              VIEW PROJECTS
            </a>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '350px',
            height: '350px',
            backgroundColor: '#2a2a2a',
            borderRadius: '50%',
            border: '8px solid var(--accent-color)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            textAlign: 'center',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            Profile Photo Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;