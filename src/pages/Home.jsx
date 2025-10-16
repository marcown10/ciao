import React from 'react'
    import styled from 'styled-components'
    import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

    const HomeContainer = styled.div`
      text-align: center;
      padding: 100px 0;
      background-color: #f0f0f0;
    `

    const Title = styled.h1`
      font-size: 3rem;
      margin-bottom: 20px;
      color: #333;
    `

    const Subtitle = styled.p`
      font-size: 1.5rem;
      color: #666;
      margin-bottom: 30px;
    `

    const SocialLinks = styled.div`
      display: flex;
      justify-content: center;
      gap: 20px;
      font-size: 2rem;

      a {
        color: #333;
        transition: color 0.3s ease;

        &:hover {
          color: #4CAF50;
        }
      }
    `

    function Home() {
      return (
        <HomeContainer>
          <Title>Hello, I'm Your Name</Title>
          <Subtitle>Web Developer | Designer | Creative Thinker</Subtitle>
          <SocialLinks>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </SocialLinks>
        </HomeContainer>
      )
    }

    export default Home
