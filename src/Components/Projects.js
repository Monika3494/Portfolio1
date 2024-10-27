import React from 'react';
import './Projects.css';

const project = () => {
    const projects = [
        { id: 1, title: 'Day-2-Day digital journal app', image: 'paper.jpeg', description: 'The Day2Day Digital Journal app lets users track daily thoughts with a sleek interface built using HTML, CSS, and a secure backend. It ensures easy access and safe data storage, combining web development and server-side technologies.', city: 'Madrid', date: '2035', size: '500m x 500m' },
        { id: 2, title: 'AR-VR game ', image: 'arvr.jpeg', description: 'In our AR/VR project, we created an immersive game set in a chaotic, bustling city. Players navigate through the urban environment, facing challenges and unpredictable events as the city spirals into chaos. The games dynamic atmosphere and interactive elements provide a thrilling, immersive experience that merges real and virtual worlds.', city: 'New York', date: '2036', size: '400m x 400m' },
        { id: 3, title: 'Smart Plant Monitoring System', image: 'plant.jpeg', description: 'In our Smart Plant Monitoring System project, we used Arduino to automate plant care by tracking soil moisture, temperature, and light levels. The system alerts users when plants need water or adjustments in their environment, ensuring optimal growth. With real-time data and automated actions, the project simplifies plant maintenance and enhances efficiency.', city: 'Tokyo', date: '2037', size: '600m x 600m' },
        // Add more projects as needed
    ];

    return (
        <section className="projects-section">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-overlay">
                            <h3>{project.title}</h3>
                            <br></br>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default project;
