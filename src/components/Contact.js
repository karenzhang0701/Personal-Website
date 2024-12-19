import React from 'react';
import { FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="experience-container" style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: 'white', marginTop: '200px' }}>
        I would <span style={{ color: '#d8b4fe' }}>LOVE</span> to connect!
      </h1>
      <p style={{ color: 'white' }}>
        Always open to new opportunities and discussing tech! Reach me at{' '}
        <a
          href="mailto:k429zhan@uwaterloo.ca"
          style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid white', outline: 'none' }}
        >
          k429zhan@uwaterloo.ca
        </a>
      </p>

      <div style={{ margin: '30px 0' }}>
        <a
          href="mailto:k429zhan@uwaterloo.ca"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
            border: '2px solid white',
            borderRadius: '8px',
            fontWeight: 'bold',
            position: 'relative',
            overflow: 'hidden',
            transition: 'color 0.3s',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              backgroundColor: '#d8b4fe',
              transition: 'left 0.3s',
              zIndex: 0,
            }}
            className="button-hover-bg"
          ></span>
          <span style={{ position: 'relative', zIndex: 1 }}>Let's get in touch! 📩</span>
        </a>
      </div>

      <style>
        {`
          a:hover .button-hover-bg {
            left: 0;
          }
          a:hover {
            color: black;
          }
        `}
      </style>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '20px' }}>
        <a
          href="https://linkedin.com/in/karenzhang0701"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'white',
            fontSize: '30px',
            border: '2px solid white',
            padding: '15px',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/karenzhang0701"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'white',
            fontSize: '30px',
            border: '2px solid white',
            padding: '15px',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          <FaGithub />
        </a>

        <a
          href="https://devpost.com/karenzhang0701"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'white',
            fontSize: '30px',
            border: '2px solid white',
            padding: '15px',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          <FaDev />
        </a>
      </div>

      <style>
        {`
          a:hover {
            background-color: #d8b4fe;
            color: black;
          }
        `}
      </style>

      <p style={{ color: 'white', position: 'fixed', bottom: '20px', right: '25px', fontSize: '15px' }}>karen zhang 🍵 dec 2024</p>
    </div>
  );
};

export default Contact;
