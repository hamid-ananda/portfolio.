import React from 'react';
import '../styles/Portfolio.css';

const ContactMe = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h1>Contact Me</h1>
                <div className="contact-cards">
                    <div className="contact-card">
                        <h2>Name</h2>
                        <p>Mahafujul Hamid Ananda</p>
                    </div>
                    
                    <div className="contact-card">
                    <h2>Email</h2>
                        <a href="mailto:inquiry@mhananda.info" className="contact-text">inquiry@mhananda.info                        </a>
                    </div>
                    <div className="contact-card">
                        
                        <a href="https://github.com/hamid-ananda" target="_blank" rel="noopener noreferrer"><h2>GitHub</h2></a>
                    </div>
                    <div className="contact-card">
                        <a href="https://www.linkedin.com/in/mahafujul-h-ananda" target="_blank" rel="noopener noreferrer"><h2>LinkedIn</h2></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;