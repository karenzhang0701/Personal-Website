import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaArrowRight } from 'react-icons/fa';
import Blueprint from '../assets/img/bp logo.webp';
import gitcon from '../assets/img/gitcon.png';
import Image1 from '../assets/img/IMG_6942.jpg';
import Image2 from '../assets/img/panel.png';
import ringBuoy from '../assets/img/ring buoy.webp';
import hatch from '../assets/img/hatch coding.png';
import workshop from '../assets/img/workshop.jpg';
import speakers from '../assets/img/speakers.jpg';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="experience-container" data-aos="fade-in">
      <h1 className="experience-header">Experience</h1>
      <h2 className="experience-text">
        See my <a href="https://drive.google.com/file/d/1tjnck1x90u0jGNjIEY88dTtuE7phxvjz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-link">resume</a> for a full overview!
      </h2>


      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2024 - Present"
          iconStyle={{ background: '#f0f0f0', color: '#fff' }}
          icon={<img src={Blueprint} alt="Custom Icon" style={{ width: '30px', height: '30px' }} />}
        >
          <h3 className="vertical-timeline-element-title">External Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Waterloo Blueprint
            <a
              href="https://uwblueprint.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'underline',
              }}
            >
              <FaArrowRight style={{ fontSize: '18px', color: 'white', transform: 'rotate(310deg)' }} />
            </a>
          </h4>
          <p>
            • Blueprint is a student organization that builds technology for social good 🚀
          </p>
          <p>
            • Partnered with non-profits and developers to organize tech events for networking and skill development, reaching 100+ UWaterloo students
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <img src={Image1} alt="Image 1" style={{ width: '45%', height: 'auto' }} />
            <img src={Image2} alt="Image 2" style={{ width: '45%', height: 'auto' }} />
          </div>
          <p>
            Nonprofit & Project Showcase
            <span style={{ marginRight: '150px' }}></span>
            Tech Speaker Event
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2021 - June 2024"
          iconStyle={{ background: '#f0f0f0', color: '#fff' }}
          icon={<img src={gitcon} alt="Custom Icon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />}
        >
          <h3 className="vertical-timeline-element-title">Girls in Tech Conference Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Toronto Schools
            <a
              href="https://www.girlsintechcon.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <FaArrowRight style={{ fontSize: '18px', color: 'white', transform: 'rotate(310deg)' }} />
            </a>
          </h4>
          <p>
            • Led a team of 5 students to organize an annual STEM conference for 100+ middle school girls across Toronto
          </p>
          <p>
            • Coordinated with 8 tech companies including Google and 30 women in tech speakers
          </p>
          <p>
            • Managed a $6000 budget and secured new sponsors, increasing funds by $2000 in 2024
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <img src={workshop} alt="Image 1" style={{ width: '45%', height: 'auto', margintop: '10px' }} />
            <img src={speakers} alt="Image 2" style={{ width: '45%', height: 'auto' }} />
          </div>
          <p style={{ marginTop: '10px' }}>
            See more at {''}
            <a href="https://www.girlsintechcon.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline', color: 'white' }}>girlsintechcon.com</a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2024 - August 2024"
          iconStyle={{ background: '#f0f0f0', color: '#fff' }}
          icon={<img src={ringBuoy} alt="Custom Icon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />}
        >
          <h3 className="vertical-timeline-element-title">Lifeguard</h3>
          <h4 className="vertical-timeline-element-subtitle">PPL Aquatics</h4>
          <p>• Supervised community centers and developed my responsibility and communication</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2022 - July 2022"
          iconStyle={{ background: '#f0f0f0', color: '#fff' }}
          icon={<img src={hatch} alt="Custom Icon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Hatch Coding</h4>
          <p>
            • Designed 8 starter kits in Python, Java, SQL, Scala, Visual Basic and submitted to Replit (online coding
            platform) to assist users to learn to code and build projects
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      <p style={{ color: 'white', position: 'fixed', bottom: '20px', right: '25px', fontSize: '15px' }}>karen zhang 🍵 dec 2024</p>
    </div>
  );
};

export default Experience;
