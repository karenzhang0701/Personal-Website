import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Home = () => {
  const words = [
    { text: 'eager to learn', color: 'rgb(126, 225, 240)' },
    { text: 'passionate about technology', color: 'rgb(180, 108, 239)' },
    { text: 'a leader and team player', color: 'rgb(240, 126, 191)' }
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;
    const typingSpeed = 110;
    const deletingSpeed = 100;

    let interval;
    if (!isDeleting) {
      interval = setInterval(() => {
        setTypedText((prevText) => currentWord.substring(0, prevText.length + 1));
        if (typedText.length === currentWord.length) {
          setIsDeleting(true);
        }
      }, typingSpeed);
    } else {
      interval = setInterval(() => {
        setTypedText((prevText) => currentWord.substring(0, prevText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => clearInterval(interval);
  }, [typedText, isDeleting, currentWordIndex]);

  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Hi, I'm Karen! 👋</h1>
        <h2 style={{ marginBottom: '35px' }}>
          I'm{' '}
          <span style={{ color: words[currentWordIndex].color }}>
            {typedText}
          </span>
        </h2>

        <p style={{ marginBottom: '20px' }}>
          I'm a Computer Science and Business Administration double degree student at the University of Waterloo who is passionate about building impactful technology to make the world better.

        </p>
        <p style={{ marginBottom: '20px' }}>I have strong leadership and technical skills through organizing tech events, hackathon projects and business case competitions.
          I'm eager to explore the intersection of <strong style={{ color: '#d8b4fe' }}>tech and business</strong> through <strong>software development</strong> and <strong>product management</strong>.
        </p>
        <p>Outside of work, I enjoy playing tennis and swimming!</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginTop: '30px' }}>
          <a
            href="mailto:k429zhan@uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              fontSize: '30px',
              border: '2px solid white',
              padding: '15px',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://drive.google.com/file/d/1tjnck1x90u0jGNjIEY88dTtuE7phxvjz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              fontSize: '30px',
              border: '2px solid white',
              padding: '15px',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            <FaFileAlt />
          </a>
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
              width: '50px',
              height: '50px',
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
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            <FaGithub />
          </a>
          <style>
            {`
          a:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
        `}
          </style>

        </div>
      </div>


      <p style={{ color: 'white', position: 'fixed', bottom: '20px', right: '25px', fontSize: '15px' }}>karen zhang 🍵 dec 2024</p>
    </div>
  );
};

export default Home;
