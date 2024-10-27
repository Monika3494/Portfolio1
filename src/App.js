import React, { useRef } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Courses from './Components/Courses';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  // const coursesRef = useRef(null);  // Reference for Courses section

  // const scrollToSection = (ref) => {
  //   ref.current.scrollIntoView({ behavior: 'smooth' });  // Smooth scroll
  // };

  return (
    <div className="app">
      <Header/>  {/* Pass the scroll function */}
      <main>
        <section id="about">
          <About />
        </section>
        <section id="courses"> {/* Ref for Courses */}
          <Courses />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        
      </main>
    </div>
  );
};

export default App;
