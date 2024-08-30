import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/ContactMe';
import './styles/Portfolio.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <section id="about">
                <AboutMe />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default App;
