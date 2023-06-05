
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";



const Resume = () => {

  return (
    <div>
      <Container fluid className="resume-section" style={{ justifyContent: "center" }}>


          <Button
            variant="primary"
          href="/"
            target="_blank"
          style={{ maxWidth: "190px", marginLeft: "250px" }}
          >

            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>

      </Container>
    </div>
  )
}

export default Resume