import React from 'react';
import {ReactTyped} from 'react-typed';
import './AboutMe.css';
import profileImage from './profile.jpg';


const AboutMe = () => {
    return (
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src= {profileImage} alt="Your Name" />
          </div>
          <div className="about-content terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
            </div>
            <div className="terminal-body">
            <ReactTyped
                strings={[
                    "<span style='color: #00ff00;'>hamid-ananda@portfolio:~$</span> npm start intro<br><br><span style='color: #00ff00;'>hamid-ananda@portfolio:~$</span> Compiled Successfully! <br><br> <strong style='font-size: 2rem;'>Hello World!</strong><br><strong style='font-size: 1.5rem;'>my name is <strong class='highlight' style='font-size: 2rem;'>Hamid!</strong></strong><br>I am a Computer Science Undergraduate student at the University of Saskatchewan.<br>I have a passion for Artificial Intelligence, Machine Learning, and Data Science.<br>I love exploring new technologies and applying them to solve real-world problems.<br><br>To see my <a href='#projects' style='color: #00b4d8;'>Projects</a>, scroll down.<br>Check out my <a href='#skills' style='color: #00b4d8;'>Skills</a> to learn more about what I can do.<br>Feel free to <a href='#contact' style='color: #00b4d8;'>Contact</a> me if you'd like to collab."
                  ]}
                  typeSpeed={5}
                  showCursor={true}
                  smartBackspace={false}
                  startDelay={0}
                  backDelay={2000}
                  loop={false}
                  contentType="html"
            />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;