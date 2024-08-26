
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/Portfolio.css';
import WorkoutRoutineLoggdIn from './workout.png';

// Import images here once you have them
import PotatoDiseaseImage from './potato.png';
import NutrienSalesImage from './nutrien.png';
import PowerBIImage from './powerbi.png';
import RiceBreedImage from './RiceBreedImage.png';



// Import images here
//import RiceBreedImage from './path-to-rice-breed-image.jpg';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Potato Disease Detection (End-to-End)",
            description: "A Machine Learning project developed to detect diseases (blight) on potato leaves.",
            highlights: [
                "Developed using a dataset from Kaggle. Data optimization, Data visualization, architecture, and modeling were done using Python, TensorFlow, and Keras.",
                "The backend of the website was built using Python and TensorFlow/Serving.",
                "The frontend was developed using React.js and Material UI."
            ],
            image: PotatoDiseaseImage,
            github: "https://github.com/hamid-ananda/MLPotatoDiseaseDetection",
        },
        {
            title: "Rice Breed Analysis",
            description: "An individual project to analyze and compare two rice varieties using Python and data visualization techniques.",
            highlights: [
                "Developed using a dataset in ARFF format, converted to CSV for analysis.",
                "Key attributes analyzed: area, perimeter, axis lengths, eccentricity, convex area, and extent.",
                "Visualized data using box plots, histograms, scatter plots, pair plots, and correlation heatmaps."
            ],
            image: RiceBreedImage,
            github: "https://github.com/hamid-ananda/RiceBreedAnalysis",
        },
        {
            title: "Nutrien Sales Stats",
            description: "A data analysis project developed using R programming language to perform sales data analysis on data collected from Nutrien.",
            highlights: [
                "The dataset was imported to R Studios, cleaned, and optimized for the operations planned.",
                "The data visualization (Bar chart and Line graph) was done using ggplot2, an R library.",
                "An HTML page was generated using R Studios for sharing purposes."
            ],
            image: NutrienSalesImage,
            github: "https://github.com/hamid-ananda/NutrienSalesStats",
        },
        {
            title: "Power BI Sales Analytics for Altec",
            description: "This project involved building a sales analytics report for Altec in Power BI based on dummy MySQL data.",
            highlights: [
                "Revenue trend chart showing total revenue by half-year.",
                "Total revenue and sales KPI cards.",
                "Bar charts comparing revenue and sales across markets."
            ],
            image: PowerBIImage,
            github: "https://github.com/hamid-ananda/PowerBIProject",
        },
    ];

    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h1>My Projects</h1>
                <p>Click on a card to expand and view more details</p>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" onClick={() => openProject(project)}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
                <br></br>
                <p>visit my github page to see all the projects i have worked on!</p>
            </div>

            {selectedProject && (
                <div className="project-modal">
                    <div className="project-modal-content">
                        <span className="close-modal" onClick={closeProject}>&times;</span>
                        <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <ul>
                            {selectedProject.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                            ))}
                        </ul>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
