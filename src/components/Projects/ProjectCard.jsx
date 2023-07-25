import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view project-card">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="project-title" style={{ fontWeight: "600" }}>{props.title}</Card.Title>
        <Card.Text className="project-description" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <br />
        <p style={{ fontWeight: "600", textAlign: "left" }}>Tech Stack</p>
        <div className='tagsBox project-tech-stack'>

          {props.tags?.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <p style={{ textAlign: "left" }}>{props.time}</p>
        <Button variant="primary" href={props.ghLink} target="_blank" className="project-github-link">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            className="project-deployed-link"
          >
            <CgWebsite /> &nbsp;
            {"Live"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
