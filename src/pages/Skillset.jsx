import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'



import Skills from "../components/Skillset/Skills";

const Skillset = () => {
  return (

    <Container fluid className="about-section" id="skillset">
      <Particle />
      <Skills />
    </Container>
  )
}

export default Skillset