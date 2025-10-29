import './recentWork.css';
import calculator from '../assets/calculator.webp'
import burger from '../assets/portfolio.png'
import gym from '../assets/portfolio-1.jpg'
import { FaGithub } from "react-icons/fa"; 
import { FiExternalLink } from "react-icons/fi";

export function RecentWork(){
  const projects = [
    {
      image: calculator,
      title: "Simple Calculator",
      para: (
        <>
          A simple and responsive calculator built with{" "}
          <span>
            HTML, CSS, and JavaScript
          </span>
          , showcasing basic arithmetic operations and DOM manipulation skills.
        </>
      ),
      hostLink: "https://dagmawit27.github.io/simpleCalculator/",
      gitLink: "https://github.com/Dagmawit27/simpleCalculator.git",
      gitEmoji: <FaGithub />,
      hostEmoji: <FiExternalLink />,
    },
    {
      image: burger,
      title: "GYM House",
      para: (
        <>
          A responsive gym website showcasing facilities, trainers, classes, and membership options using{" "}
          <span>
            HTML, CSS, and JavaScript
          </span>
          .
        </>
      ),
      hostLink: "https://dagmawit27.github.io/olanaGYM/",
      gitLink: "https://github.com/Dagmawit27/olanaGYM.git",
      gitEmoji: <FaGithub />,
      hostEmoji: <FiExternalLink />,
    },
    {
      image: gym,
      title: "Burger House",
      para: (
        <>
          A responsive burger restaurant website showcasing the menu and special deals with an intuitive interface built using{" "}
          <span>
            HTML, CSS, and JavaScript
          </span>.
        </>
      ),
      hostLink: " https://dagmawit27.github.io/portfolio1-burgerHouse/",
      gitLink: "https://github.com/Dagmawit27/portfolio1-burgerHouse.git",
      gitEmoji: <FaGithub />,
      hostEmoji: <FiExternalLink />,
    }
  ];

  return (
    <section className="recent-works" id='projects'>
      <div className="works-header">
        <h2 className="section-title">Recent Works ↓</h2>
      </div>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img key= {index} src={project.image} alt="portfolio" />
            </div>
            <div className="project-content">
              <div className='project-content-title'>
                <h1 className='pro-title'>{project.title}</h1>
              </div>
              
              <p className="project-content-para">{project.para}</p>
              
              <div className="buttonss">
                <a href={project.gitLink} className="btns" target='_blank'>{project.gitEmoji} Github</a>
                <a href={project.hostLink} className="btns" target='_blank'>{project.hostEmoji} View </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
