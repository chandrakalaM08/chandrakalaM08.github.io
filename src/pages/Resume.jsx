import { AiOutlineDownload } from "react-icons/ai";
import { Button, Link } from '@chakra-ui/react';
import myresume from "../assets/chandrakala_masiwal_resume.pdf";

const Resume = () => {
  function openResumeInNewTab() {
    const resumeUrl = "https://drive.google.com/file/d/1-tQC-mBrdaQqePIFtDi6AanoZ8-znyLd/view"
    window.open(resumeUrl, '_blank');
  }


  return (
    <div className="resume-section" style={{ justifyContent: "center" }}>
      <Link href={myresume} download={true} target='_blank'>
        <Button
          variant="primary"
          style={{ maxWidth: "190px", marginLeft: "250px", border: "5px solid red" }}
          onClick={openResumeInNewTab}
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Link>
    </div>
  );
};

export default Resume;
