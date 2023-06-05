import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import girlGif from '../assets/girlCoding.gif'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Skillset from './Skillset';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import Footer from '../components/Footer/Footer';
import Github from "../components/Skillset/Github"
import { NavBar } from '../components/Navbar/Navbar';

const Home = () => {
  return (<>

    <NavBar />
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name">  Chandrakala Masiwal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <Resume />
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={girlGif}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "350px", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>




    </section>

    <About />
    <Skillset />
    <Projects />
    <Github />
    <Contact />

    <Footer />

  </>
  );
}

export default Home