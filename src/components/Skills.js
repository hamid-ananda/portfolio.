import React, { useState } from 'react';
import '../styles/Portfolio.css';

const Skills = () => {
    // State to manage which card is expanded
    const [expandedCard, setExpandedCard] = useState(null);

    // Function to toggle the expanded state
    const toggleExpand = (card) => {
        setExpandedCard(expandedCard === card ? null : card);
    };

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="skills-header-card">
                    <h1>Technical Skills</h1>
                    <p>Click on a card to expand and view more details</p>
                </div>
                <div className="skills-cards">
                    <div
                        className={`skill-category-card ${expandedCard === 'programming' ? 'expanded' : ''}`}
                        onClick={() => toggleExpand('programming')}
                    >
                        <h2>Programming Languages</h2>
                        {expandedCard === 'programming' && (
                            <div className="skills-details">
                                <div className="skill">
                                <p>
                                    <h3>C | C++ | Bash | Python | R | Java | JavaScript</h3>
                                    <br /><br />
                                    I have experience in both backend and frontend development, working with web languages like JavaScript and Python, systems languages like C and C++, and scripting with Bash. I also have a solid foundation in data-oriented languages like R.
                                </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className={`skill-category-card ${expandedCard === 'webdev' ? 'expanded' : ''}`}
                        onClick={() => toggleExpand('webdev')}
                    >
                        <h2>Web Development</h2>
                        {expandedCard === 'webdev' && (
                            <div className="skills-details">
                                <div className="skill">
                                <p>
                                        <h3>MERN | Next.js | SQL | NoSQL | Cloud Services</h3>
                                        <br />
                                        I have experience in modern web development using the MERN stack (MongoDB, Express, React, Node.js), and I am proficient with frameworks like Next.js. My database experience includes working with both SQL and NoSQL databases such as MySQL, CouchDB, Firestore, and Firebase. Additionally, I have experience deploying applications using Self-Hosted servers as well as using cloud services like Azure and AWS.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className={`skill-category-card ${expandedCard === 'mlai' ? 'expanded' : ''}`}
                        onClick={() => toggleExpand('mlai')}
                    >
                        <h2>Machine Learning & AI</h2>
                        {expandedCard === 'mlai' && (
                            <div className="skills-details">
                                <div className="skill">
                                    <h3>TensorFlow | PyTorch | Keras</h3>
                                    <p>
                                        <br />
                                        I have developed expertise in Machine Learning and AI through various projects. My skills include building and training neural networks, performing data analysis, and deploying machine learning models in production environments. I am proficient in both TensorFlow and PyTorch, with experience in applying these frameworks to solve real-world problems. Additionally, I have experience in data preprocessing, model training, and deploying web applications using Python and React.js.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className={`skill-category-card ${expandedCard === 'dataviz' ? 'expanded' : ''}`}
                        onClick={() => toggleExpand('dataviz')}
                    >
                        <h2>Data Visualization</h2>
                        {expandedCard === 'dataviz' && (
                            <div className="skills-details">
                                <div className="skill">
                                    <h3>PowerBI | D3 | Adobe Illustrator | Matplotlib | Seaborn </h3>
                                    <p>
                                        <br />
                                        I have a strong foundation in data visualization, with experience using tools and libraries such as PowerBI, D3.js, and Adobe Illustrator, as well as Python libraries like Matplotlib and Seaborn, and R's ggplot2. My work includes creating static, animated, and interactive visualizations to analyze and present complex datasets. I've utilized these skills in various projects, including developing sales analytics reports, performing detailed statistical analysis, and creating visually compelling reports for both technical and non-technical audiences.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
