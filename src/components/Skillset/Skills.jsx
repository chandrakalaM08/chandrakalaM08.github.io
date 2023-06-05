import React from 'react'
import html from '../../assets/language/html5.png'
import css from '../../assets/language/css3.png'
import js from '../../assets/language/js.png'
import git from '../../assets/language/git.png'
import mongodb from '../../assets/language/mongodb.png'
import nodejs from '../../assets/language/nodejs.png'
import react from '../../assets/language/react.png'
import reactredux from '../../assets/language/redux.png'
import mern from '../../assets/language/mern.png'

import styled from "styled-components"
const Skills = () => {
    const skills = [
        {
            img: html,
            title: 'HTML'
        },
        {
            img: css,
            title: 'CSS'
        },
        {
            img: js,
            title: 'Javascript'
        },
        {
            img: git,
            title: 'Git/Github'
        },
        {
            img: mongodb,
            title: 'MongoDB'
        },
        {
            img: nodejs,
            title: 'NodeJS'
        },
        {
            img: react,
            title: 'ReactJS'
        },
        {
            img: reactredux,
            title: 'Redux'
        },
        {
            img: mern,
            title: 'MERN'
        }
    ]

    return (
        <Container id='skills'>
            <h1>Skills</h1>
            <div className='skillsContainer'>
                {skills.map((ele, index) => (
                    <div key={index}>
                        <img src={ele.img} alt={ele.title} width='70px' height='70px' />
                        <p>{ele.title}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    margin:auto;
    
    h1{
        color:white;
        font-weight:600
    }

    .skillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    
    }

    .skillsContainer>div{
       display:flex;
       align-items:center;
       flex-direction:column;
       padding: 20px 0px 10px 0px;
       border-radius: 10px;
       box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }

    .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
        -webkit-transition: all 0.8s;
        transition: all 0.8s;
     }
   
`

export default Skills