import './AboutMe.css';
import image from '../assets/picture-black2.png';

export function AboutMe(){
  const skills = [
    "Frontend Development",
    "Backend Development", 
    "Full-Stack Development",
    "UI/UX Design",
    "Responsive Design",
    "Figma",
    "Website Optimization",
    "Website Maintenance",
    "E-Commerce Development",
    "Portfolio Websites",
    "Landing Page Design",
  ];


  const services = [
    {
      icon: "💻",
      title: 'Frontend Development',
      description: 'Creating interactive, responsive, and visually appealing websites using HTML, CSS, and JavaScript — ensuring users have a smooth and engaging experience across all devices.'
    },
    {
      icon: "⚙️",
      title: 'Backend Development',
      description: 'Building robust server-side applications, APIs, and databases to power web applications — focusing on security, scalability, and efficiency.'
    },
    {
      icon: "💻",
      title: 'Full-Stack Development',
      description: 'Combining frontend and backend expertise to deliver complete web applications — from design to deployment, ensuring seamless functionality and performance.'
    },
    {
      icon: "🎨",
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces that enhance user experience — translating complex requirements into elegant, easy-to-navigate digital solutions.'
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="main-container">

          <div className="about-info">
            <div className="about-info-detail">
              <h1 className="about-title">About Me</h1>
           
              <div className="intro-text">
                <p>
                  Hi, I’m Dagmawit Mesfin, a Computer Science student
                  at the University of Gondar passionate about web development
                    and modern technologies. I specialize in frontend development 
                    with HTML, CSS, JavaScript, and React, and have strong skills in Java, 
                    C++, data structures, and algorithms. A self-taught learner, 
                    I’ve grown through platforms like FreeCodeCamp, Udacity, and YouTube, 
                    building responsive, SEO-friendly websites 
                  that turn ideas into impactful digital experiences.
                </p>
              </div>
            </div>
            
            <div className="experience-section">
              <div className="skills-flex">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-info-image">
            <img src= {image} alt='Dagmawit picture' />
          </div>
        </div>  


        <div className="services-wrapper">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h2 className="service-title">{service.title}</h2>
                </div>

                <p className="service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>     


       
      </div>
    </section>
  );
}
