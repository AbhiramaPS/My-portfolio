import React from 'react';

const Skills = () => {
  const skillList = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Git & GitHub', 'SQL'
  ];

  return (
    <section id="skills" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          {skillList.map(skill => (
            <div key={skill} style={{
              padding: '1.5rem',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold',
              transition: 'var(--transition-fast)',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-color)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;