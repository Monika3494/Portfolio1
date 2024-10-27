import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Python',
    'Project management',
    'SQL',
    'arduino',
    'AR-VR'
  ]; 

  return (
    <section id="skills" className="skills" >
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;
