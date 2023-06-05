// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

// const Github = () => {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
//         Days I <strong className="yellow">Code</strong>
//       </h1>
//       <GitHubCalendar
//         username="chandrakalaM08"
//         blockSize={15}
//         blockMargin={5}
//         color="#367941"
//         fontSize={16}
//         background={"yellow"}
//       />
//     </Row>
//   );
// }

// export default Github;



import React from 'react'
import styled from 'styled-components';
import GithubCalendar from 'react-github-calendar'
const Github = () => {
  return (
    <MainContainer style={{ marginTop: "20px" }}>

      <p style={{ color: "white", fontSize: "2.5em", fontWeight: "600", marginBottom: "30px" }}>Days I Worked</p>
      <Container>
        <GithubCalendar username='chandrakalaM08' year={new Date().getFullYear()} blockSize={15} blockMargin={5} fontSize={16} />
      </Container>
      <p style={{ color: "white", fontSize: "2.5em", fontWeight: "600", marginBottom: "10px" }}>My Github Statistics</p>
      <div className='stats'>
        <img align="center" src="https://github-readme-stats.vercel.app/api?username=chandrakalaM08&show_icons=true&locale=en" alt="chandrakalaM08" />
        <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=chandrakalaM08&" alt="chandrakalaM08" />
      </div>
    </MainContainer>
  )
}

const Container = styled.div`
    margin:auto;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:50px;
    flex-direction:column;
    border: 3px solid #40008a;
    border-radius:50px 5px 50px 5px;
    padding:30px 10px 30px 10px;
`

const MainContainer = styled.div`
    .stats{
        width:80%;
        margin:auto;
        display:flex;
        justify-content:center;
        border-radius:50px;
        margin-bottom:50px;
      
    }

    .stats>img{
        padding:20px 10px 20px 10px;
    }

    @media only screen and (min-width: 769px) and (max-width:1110px){
        .stats{
            flex-direction:column; 
        }

    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        
        .stats{
            flex-direction:column; 
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .stats{
            width:90%;
            flex-direction:column; 
        }
    }

    @media only screen and (max-width: 319px){
        .stats{
            width:90%;
            flex-direction:column; 
        }
    }

`

export default Github
