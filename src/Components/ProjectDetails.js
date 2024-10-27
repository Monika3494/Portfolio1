import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get project id from URL

const ProjectDetail = () => {
  // Get the project ID from the URL
  const { id } = useParams();  // useParams will capture the "id" parameter in the URL

  // Example project data
  const projects = [
    { id: 1, title: 'Project 01', description: 'Description of Project 01', city: 'Madrid', date: '2035', size: '500m x 500m', tags: ['React', 'JavaScript', 'CSS'] },
    { id: 2, title: 'Project 02', description: 'Description of Project 02', city: 'New York', date: '2036', size: '400m x 400m', tags: ['Node.js', 'Express', 'MongoDB'] },
    { id: 3, title: 'Project 03', description: 'Description of Project 03', city: 'Tokyo', date: '2037', size: '600m x 600m', tags: ['Python', 'Flask', 'API'] }
  ];

  // Find the project with the matching ID
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p><strong>Date:</strong> {project.date}</p>
      <p><strong>City:</strong> {project.city}</p>
      <p><strong>Size:</strong> {project.size}</p>
      <p>{project.description}</p>
      <div className="project-tags">
        <h3>Skills Used (Tags):</h3>
        <ul>
          {project.tags.map((tag, index) => (
            <li key={index} className="project-tag">{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
