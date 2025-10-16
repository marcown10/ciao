import React from 'react'
    import styled from 'styled-components'

    const AboutContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 50px 0;
      background-color: white;
    `

    const ProfileImage = styled.img`
      width: 250px;
      height: 250px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 50px;
    `

    const AboutContent = styled.div`
      max-width: 600px;
    `

    function About() {
      return (
        <AboutContainer>
          <ProfileImage 
            src="/path/to/your/profile-image.jpg" 
            alt="Your Name" 
          />
          <AboutContent>
            <h2>About Me</h2>
            <p>
              I'm a passionate web developer with expertise in React, JavaScript, 
              and modern web technologies. I love creating intuitive and 
              responsive web applications that solve real-world problems.
            </p>
            <h3>Skills</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
          </AboutContent>
        </AboutContainer>
      )
    }

    export default About
