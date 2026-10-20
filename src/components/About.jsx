import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">About Me</h2>
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          fontSize: '1.2rem',
          color: 'var(--text-muted)'
        }}>
          <p>
            I'm Abhirama P S, a Computer Science Engineering student interested in software development, web technologies, and problem-solving. I enjoy learning new technologies, building projects, and developing practical solutions that address real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;