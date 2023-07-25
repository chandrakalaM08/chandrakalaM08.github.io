import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {

  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import { CgFileDocument, CgProfile } from "react-icons/cg";
import { animateScroll, Link } from 'react-scroll'
import { Button } from '@chakra-ui/react'

import myresume from "../../assets/chandrakala_masiwal_resume.pdf"

export function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [active, setActive] = useState('home');


  function openResumeInNewTab() {
    const resumeUrl = "https://drive.google.com/file/d/1-tQC-mBrdaQqePIFtDi6AanoZ8-znyLd/view"
    window.open(resumeUrl, '_blank');
  }


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      id="nav-menu"
    >
      {expand === false && (
        <h2 
          style={{
            fontWeight: "900",
            color: "white",
            border: "5px solid #2a5470",
            padding: "10px",
            borderRadius: "50%",
            background: "linear-gradient(315deg, #584e7e 0%, #204a66 74%)",
            cursor: "pointer"
          }}

          onClick={() => { }}
        >
          CM
        </h2>
      )}

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => updateExpanded(!expand)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" >
          <Nav.Item className="nav-link home">
            <Nav.Link
              as={Link}
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => {
                updateExpanded(false);
                animateScroll.scrollToTop();
                setActive('home');
              }}
            >
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-link about">
            <Nav.Link
              as={Link}
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => {
                updateExpanded(false);
                setActive('about');
              }}
            >
              <CgProfile style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-link skills">
            <Nav.Link
              as={Link}
              to="skillset"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => {
                updateExpanded(false);
                setActive('skillset');
              }}
            >
              <GiSkills style={{ marginBottom: "2px" }} /> Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-link projects">
            <Nav.Link
              as={Link}
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => {
                updateExpanded(false);
                setActive('projects');
              }}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-link contact">
            <Nav.Link
              as={Link}
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => {
                updateExpanded(false);
                setActive('contact');
              }}
            >
              <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
            </Nav.Link>

          </Nav.Item>
          <Nav.Item className="nav-link resume" id='resume-button-1'
          >
            <Nav.Link id="resume-link-1"
              href={myresume} download={true} target='_blank'
              onClick={
                openResumeInNewTab
              }
              activeClass="active"
            >
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


