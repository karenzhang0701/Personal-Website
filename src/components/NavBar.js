import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Navbar
      expand="md"
      className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Link>

            <Link
              to="/experience"
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('experience')}
            >
              Experience
            </Link>

            <Nav.Link
              href="/projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              href="/contact"
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};