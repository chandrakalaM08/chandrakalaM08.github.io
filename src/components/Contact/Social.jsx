// import React from 'react'
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlinePhone, AiFillMail
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import './Social.css'

// const Social = () => {
//   return (
//     <Container style={{padding: '30px'}}>
//       <Row>
//         <Col md={12} className="home-about-social">
//           <h1>Find me here</h1>
//           <p>
//             Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
//           </p>
//           <ul className="home-about-social-links">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/chandrakalaM08"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour  home-social-icons"
//                 aria-label="github"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>

//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/masiwal-chandrakala/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour  home-social-icons"
//                 aria-label="linkedin"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour  home-social-icons"
//                 aria-label="twitter"
//               >
//                 <AiOutlinePhone />
//               </a> +91 7351667457
//             </li>
//             <li className="social-icons">
//               <a
//                 href="/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour home-social-icons"
//                 aria-label="instagram"
//               >
//                 <AiFillMail />
//               </a>
//               chandrakala.2508@gmail.com
//             </li>
//           </ul>
//         </Col>
//       </Row>

//           </Container>
//   )
// }

// export default Social


import React from 'react'

import styled from 'styled-components'
import { ImLinkedin, ImPhone, ImGithub } from "react-icons/im"
import { IoIosMail } from "react-icons/io"




const Social = () => {

  return (
    <Container id='contact'>
      <div className='contact'>
        <div className='contactText'>

          <div className='middleSection'>
            <div>
              <ImLinkedin fontSize="x-large" />
              <br />
              <br />
              <a href="https://www.linkedin.com/in/masiwal-chandrakala/" rel="noreferrer" target="_blank" id="contact-linkedin">
                <p>masiwal-chandrakala</p>
              </a>
            </div>

            <div >

              <ImGithub fontSize="xx-large" />
              <br />           <br />
              <a href="https://github.com/chandrakalaM08" rel="noreferrer" target="_blank" id="contact-github">
                <p>chandrakalaM08</p>
              </a>
            </div>
            <div>
              <ImPhone fontSize="x-large" />
              <br />           <br />
              <a href="tel:+917351667457" rel="noreferrer" target="_blank" id="contact-phone">
                <p>+91 7351667457</p>
              </a>
            </div>
            <div>
              <IoIosMail fontSize="xx-large" />
              <br />           <br />
              <a href='mailto:chandrakala.2508@gmail.com' rel="noreferrer" target="_blank" id="contact-email"><p>chandrakala.2508@gmail.com</p></a>
            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
    width:100%;
color: white;
    .contact{
        width:85%;
        margin:auto;
        padding-top:20px;
        display:flex;
        flex-direction:column;
        gap:30px;
        
    }

    .middleSection{
        display:flex;
        justify-content:space-around;
    }

    .middleSection>div{
        padding:10px;
    }

    .middleSection>div>h1{
       font-size:x-large;
       margin-top:0px;
    }
    .middleSection>div p{
        margin-top:0px;
    }

    .middleSection>div a{
        text-decoration:none;
        color: white;
     }



    @media only screen and (min-width: 768px) and (max-width:1120px){
        .middleSection{
            flex-direction:column;
        }

    }
    
    @media only screen and (min-width: 481px) and (max-width:768px){
        .middleSection{
            flex-direction:column;
        }
    }

    @media only screen and (min-width:320px) and (max-width:480px){
        .middleSection{
            flex-direction:column;
        }
    }

    @media only screen and (max-width: 320px){
        .middleSection{
            flex-direction:column;
        }
        
    }


    @media only screen and (max-width: 319px){
        .middleSection{
            flex-direction:column;
        }
    }


`
export default Social