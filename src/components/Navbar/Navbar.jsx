import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/Chandrakala.gif";


import {

  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import { CgFileDocument, CgProfile } from "react-icons/cg";
import { Link, animateScroll } from 'react-scroll'
import styled from "styled-components";


export function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [active, setActive] = useState('home');


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
          <Nav.Item>
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
          <Nav.Item>
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
          <Nav.Item>
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
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="projectDetails"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => {
                updateExpanded(false);
                setActive('projectDetails');
              }}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="contactme"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => {
                updateExpanded(false);
                setActive('contactme');
              }}
            >
              <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://drive.google.com/file/d/1-tQC-mBrdaQqePIFtDi6AanoZ8-znyLd/view?usp=share_link"
              target="_blank"
              activeClass="active"
              onClick={() => {
                updateExpanded(false);
              }}
            >
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


