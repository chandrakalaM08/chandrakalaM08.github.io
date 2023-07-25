import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pizza from "../assets/projects/pizzapassionista.png"
import roadmaster from "../assets/projects/roadmaster.png"
import dazzlelane from "../assets/projects/dazzlelane.png"
import cargo from "../assets/projects/cargo.png"

const Projects = () => {
  return (
    <Container fluid className="project-section" id="projects">

      <Container>
        <Particle />
        <h1 className="project-heading">
          Projects 
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cargo}
              isBlog={false}
              title="Cargo (Zoomcar Clone)"
              description="Introducing ZoomCar Clone, a cutting-edge car rental platform that brings the convenience and flexibility of on-demand car rental services to your fingertips. "
              ghLink="https://github.com/chandrakalaM08/benevolent-boot-3435"
              demoLink="https://wonderful-mandazi-f08c05.netlify.app/"
              tags={['HTML', 'CSS', 'Javascript']}
              time="An individual project built within a span of 5 days."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Pizza Passionista (Domino's Pizza Clone)"
              description="An online platform that offers a diverse selection of pizzas and other food items for seamless online ordering."
              ghLink="https://github.com/psudhansu/close-hand-543"
              demoLink="https://amazing-alfajores-9f774e.netlify.app/"
              tags={['HTML', 'CSS', 'Javascript', 'JSON Server']}
              time="A collaborative project developed by a team of four in 5 days."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dazzlelane}
              isBlog={false}
              title="DazzleLane (CaratLane Clone)"
              description="It is an online-offline store, which makes beautiful jewellery accessible. Jewellery that not only makes you look beautiful but also makes you feel beautiful and loved."
              ghLink="https://github.com/chandrakalaM08/careful-seed-4617"
              demoLink="https://dazzlelane.netlify.app/"
              tags={['HTML', 'CSS', 'Javascript']}
              time="An individual project built within a span of 5 days."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={roadmaster}
              isBlog={false}
              title="RoadMaster AutoParts"
              description="Welcome to RoadMaster AutoParts(Project based on a behance portfolio picture), online seller in the world of automotive parts and accessories, providing exceptional service and top-quality products to vehicle owners like you."
              ghLink="https://github.com/chandrakalaM08/prime-move-3249"
              demoLink="https://roadmasters.netlify.app/"
              tags={['HTML', 'CSS', 'Javascript', 'React.js', 'Chakra UI']}
              time="An individual project built within a span of 5 days."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects