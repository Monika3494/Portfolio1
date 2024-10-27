import React from 'react';
import './About.css'; // Styling for the component

const About = () => {
  return (
    <section className="about">
      <div className="about-left">
        <img
          src="monika photu.jpg"  // Replace with your actual photo URL or import an image
          alt="Your Name"
          className="about-photo"
        />
      </div>
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          Hi! I'm Monika bahuguna, a passionate developer with a love for building innovative projects.I am a dedicated Computer Science student with proficient web development skills and a keen interest in the management field. My academic journey has equipped me with a strong foundation in technical concepts, while my passion for management drives me to explore the intersection of technology and business. I have successfully completed a variety of projects that demonstrate my ability to apply my knowledge in real-world scenarios, enhancing my problem-solving skills and creativity.
        </p>
      </div>
    </section>
  );
};

export default About;
