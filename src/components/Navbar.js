import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css';

const Navbar = () => {
    const [scrollbarColor, setScrollbarColor] = useState('transparent');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-list a');

        const options = {
            root: null,
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    let newColor = '';

                    switch (id) {
                        case 'about':
                            newColor = 'teal';
                            break;
                        case 'skills':
                            newColor = 'blue';
                            break;
                        case 'projects':
                            newColor = 'orange';
                            break;
                        case 'contact':
                            newColor = 'purple';
                            break;
                        default:
                            newColor = 'transparent';
                    }

                    setScrollbarColor(newColor);
                    navLinks.forEach((link) => link.classList.remove('active'));
                    document.querySelector(`.nav-list a[href="#${id}"]`).classList.add('active');
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><a href="#about" className="about">About Me</a></li>
                    <li><a href="#skills" className="skills">Skills</a></li>
                    <li><a href="#projects" className="projects">Projects</a></li>
                    <li><a href="#contact" className="contact">Contact</a></li>
                </ul>
            </nav>
            <div className="scrollbar-indicator" style={{ backgroundColor: scrollbarColor }}></div>
        </>
    );
};

export default Navbar;
