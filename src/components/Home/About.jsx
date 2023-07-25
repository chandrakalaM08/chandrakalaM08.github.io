import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "../../assets/myphoto.jpg";
import Tilt from "react-parallax-tilt";


const About = () => {
    return (
      <Container fluid className="about section" id="about">
          <Container>
          <Row>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={Img} className="home-img img-fluid" alt="avatar" width={400} style={{ borderRadius: "10px" }} />
              </Tilt>
            </Col>

              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                About <span className="yellow"> Me</span> 
                </h1>
              <p className="home-about-body" id="user-detail-intro">
                Hi, my name is <span className="yellow">Chandrakala Masiwal </span>
                and I'm from <span className="yellow"> Noida, Uttar Pradesh.</span>
                <br />
                <br />
                I am currently upskilling at Masai School.
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Javascript, </b>
                ReactJs
                <b className="yellow"> HTML and CSS.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Node.js, MongoDB,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                  and exploring opportunities to work as a
                  <b className="yellow">Web Developer.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>

            </Row>

          </Container>
        </Container>
      );
    
}

export default About