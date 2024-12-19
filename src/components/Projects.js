import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import studyBuddy from '../assets/img/study buddy.png';
import newSight from '../assets/img/newsight.png';
import sharity from '../assets/img/sharity.png';
import cropConnect from '../assets/img/crop connect.png';
import elevens from '../assets/img/elevens.png';
import tdVerse from '../assets/img/td verse.jpeg';
import pcHealth from '../assets/img/pc health.png';
import roots from '../assets/img/roots.png';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('hackathon');

  const hackathonProjects = [
    {
      image: studyBuddy,
      caption: "Platform that matches UWaterloo students based on similar academic goals and learning styles. I took on developing the matching algorithm using K-means Clustering in Python.",
      title: 'Study Buddy',
      techStack: 'Django, HTML/CSS, SQLite, Python',
      githubLink: 'https://github.com/Padasdaf/Study-Buddy',
      date: 'Oct-Nov 2024'
    },
    {
      image: newSight,
      caption: 'Chrome extension that analyzes news articles using Natural Language Processing to provide a summary and biases analysis. Designed to encourage users to read the news instead of social media.',
      devpostLink: 'https://devpost.com/software/newsight',
      techStack: 'React, Express.js, Node.js, Gemini AI API, Python (Web Scraping)',
      date: 'August 2024',
      githubLink: 'https://github.com/karenzhang0701/Ignition-Hacks',
      title: 'NewSight (Ignition Hacks)'
    },
    {
      image: sharity,
      caption: 'Website that connects users and charities in a centralized database to optimize resources. Charities can request and view resources in real-time.',
      devpostLink: 'https://devpost.com/software/sharity-flicve',
      githubLink: 'https://github.com/TonyTran03/Sharity',
      techStack: 'React, Node.js, Auth0, Google Maps API',
      title: 'Sharity (Hack the 6ix)',
      date: 'August 2024',
    },
    {
      image: cropConnect,
      caption: 'Platform that allows users to buy directly from local farmers to increase food accessibility. Includes messaging system and filters based on location.',
      devpostLink: 'https://dorahacks.io/buidl/13386',
      githubLink: 'https://github.com/karenzhang0701/Crop-Connect-JamHacks-Project-',
      title: 'Crop Connect (JamHacks)',
      date: 'June 2024',
      techStack: 'Javascript, HTML/CSS',
    },
    {
      image: elevens,
      caption: 'Solitaire game where 2 cards that add up to 11 or a combination of J, Q, K are clicked until the deck is dealt or there are no possible moves left.',
      title: 'Elevens Card Game',
      date: 'March 2023',
      techStack: 'Java (Object-Oriented Programming)',
      githubLink: 'https://github.com/karenzhang0701/Elevens-Card-Game',
    },
  ];

  const businessProjects = [
    {
      image: tdVerse,
      caption: <>Designed a VR Platform for <strong>Toronto Dominion Bank</strong> where managers create personalized training modules to improve employee training and banking services. Developed full product roadmap and recognized by TD Senior Manager for idea innovation.</>,
      title: 'UWaterloo Product Management Conference',
      techStack: '3rd Place (40 teams total)',
      slideDeck: 'https://drive.google.com/file/d/12IAf6cg8FNw37nmubSXQ_ZmMPOhhTo8Q/view?usp=sharing',
      date: 'November 2024',
    },
    {
      image: pcHealth,
      caption: 'Developed a product strategy for PC Health App to increase engagement by introducing community-driven features, projected to increase active users by 15 000.',
      title: 'PC Health Case Competition',
      slideDeck: 'https://drive.google.com/file/d/1lvEk4teyFcYBrw0utqCBBx03mtl5ygyZ/view?usp=sharing',
      date: 'November 2024'
    },
    {
      image: roots,
      caption: 'Developed a strategy for Roots to launch a summer sub-brand to increase sales. Conducted full company and market analysis.',
      title: 'Company & Industry Insights Project',
      slideDeck: 'https://drive.google.com/file/d/174pyxtjjw07H1vgKss8gN02SpsYqw6gL/view?usp=sharing',
      date: 'October 2024'
    },
  ];

  const selectedProjects =
    selectedTab === 'hackathon' ? hackathonProjects : businessProjects;

  return (
    <div className="project-container">
      <h1 style={{ marginTop: '60px', color: 'white', marginBottom: '30px' }}>PROJECTS</h1>
      {/* Tab Navigation */}
      <div className="tab-container">
        <button
          className={`tab ${selectedTab === 'hackathon' ? 'active' : ''}`}
          onClick={() => setSelectedTab('hackathon')}
        >
          Hackathon Projects
        </button>
        <button
          className={`tab ${selectedTab === 'business' ? 'active' : ''}`}
          onClick={() => setSelectedTab('business')}
        >
          Business Projects
        </button>
      </div>

      <div className="projects-gallery">
        {selectedProjects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
            <img src={project.image} alt={`Project ${index + 1}`} className="project-image" />
            <p className="project-caption">{project.caption}</p>
            <p className="project-tech" style={{ marginTop: '15px' }}>{project.techStack}</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignItems: 'baseline', gap: '15px' }}>
              {project.devpostLink && (
                <a
                  href={project.devpostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="devpost-link"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}
                >
                  <p style={{ color: 'white', fontSize: '15px' }}>Devpost Demo</p>
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}
                >
                  <p style={{ color: 'white', fontSize: '15px' }}>Github</p><FaGithub size={30} color="white" />
                </a>
              )}

              {project.slideDeck && (
                <a
                  href={project.slideDeck}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slidedeck-link"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                  <p style={{ color: 'white', fontSize: '15px', marginTop: '15px' }}>Slide Deck ↗</p>
                </a>
              )}


            </div>

            <p className="project-caption" style={{ textAlign: 'right', color: 'white', marginTop: '20px' }}>{project.date}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Projects;
