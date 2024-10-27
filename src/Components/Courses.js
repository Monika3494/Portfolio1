import React from 'react';
import './Courses.css'; // Import the CSS file for styling

const courses = [
  {
    title: 'Web Development',
    description: 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript.',
    image: 'web development.jpeg' // Placeholder image URL
  },
  {
    title: 'Data Structures',
    description: 'Understand the essential data structures and algorithms for efficient programming.',
    image: 'Data Structure.jpeg' // Placeholder image URL
  },
  {
    title: 'Machine Learning',
    description: 'Explore the concepts and applications of machine learning and artificial intelligence.',
    image: 'machine learning.jpeg' // Placeholder image URL
  },
  {
    title: 'Principles of management',
    description: 'The Principles of Management course masters key skills in planning, organizing, leading, and decision-making for effective team and resource management.',
    image: 'POM.jpeg' // Placeholder image URL
  }
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h1 className="courses-heading">Courses</h1> {/* Main heading */}
      {courses.map((course, index) => (
        <div className="course-box" key={index}>
          <img src={course.image} alt={course.title} className="course-image" /> {/* Course image */}
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
