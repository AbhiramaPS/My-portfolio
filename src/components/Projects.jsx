import React from 'react';
import { projects } from '../data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected projects and experiments in software development.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2.5rem'
        }}>
          {projects.map(project => (
            <div key={project.id} style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'var(--transition-slow)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'var(--accent-color)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            }}
            >
              <div style={{
                height: '220px',
                backgroundColor: '#2a2a2a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'var(--text-muted)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  textAlign: 'center',
                  transition: 'var(--transition-slow)',
                  fontSize: '1rem'
                }}>
                  Project Image Placeholder
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '3em' }}>
                  {project.description}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem'
                }}>
                  {project.technologies.map(tech => (
                    <span key={tech} style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      backgroundColor: 'rgba(78, 225, 160, 0.1)',
                      color: 'var(--accent-color)',
                      borderRadius: '4px',
                      border: '1px solid rgba(78, 225, 160, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--accent-color)'
                  }}>
                    View Project <FaExternalLinkAlt size={16} />
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--text-muted)'
                  }}>
                    Source Code <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;