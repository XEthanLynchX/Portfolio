import React, { useState, useEffect, useRef } from 'react';
import '../styling/rps.css'
import '../styling/fade.css'

const ProjectDisplay = ({ project, isReversed, isSecond }) => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current
        .filter(section => section !== null)
        .forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div
      className={`project-container  ${
        isReversed && !isSecond ? 'reversed' : ''
      } ${isSecond ? 'second-project' : ''}`}
    >
      <div className="project-info dafe-in" ref={el => sectionsRef.current.push(el)}>
        <small className='fade-in' ref={el => sectionsRef.current.push(el)}>Featured Project</small>
        <h3 className='fade-in'ref={el => sectionsRef.current.push(el)}>{project.title}</h3>
        <div ref={el => sectionsRef.current.push(el)} className="project-description fade-in hover:shadow-2xl shadow-md">
          {project.description}
        </div>
        <div ref={el => sectionsRef.current.push(el)}
          className={`project-technologies fade-in ${
            isReversed && !isSecond ? 'reversed' : ''
          }` }
        >
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links fade-in" ref={el => sectionsRef.current.push(el)}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <div className="project-image fade-in" ref={el => sectionsRef.current.push(el)}>
        <img src={project.imageUrl} alt={project.title} />
      </div>
    </div>
  );
};

export default ProjectDisplay;
