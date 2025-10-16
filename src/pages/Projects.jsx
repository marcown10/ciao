import React from 'react'
    import styled from 'styled-components'
    import { FaGithub } from 'react-icons/fa'

    const ProjectsContainer = styled.div`
      padding: 50px 0;
      background-color: #f4f4f4;
    `

    const ProjectGrid = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    `

    const ProjectCard = styled.div`
      background-color: white;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
    `

    const ProjectLinks = styled.div`
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 15px;

      a {
        color: #333;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: color 0.3s ease;

        &:hover {
          color: #4CAF50;
        }
      }
    `

    function Projects() {
      const projects = [
        {
          title: 'Project 1',
          description: 'A brief description of the project and its technologies.',
          githubLink: 'https://github.com/yourusername/project1'
        },
        {
          title: 'Project 2',
          description: 'Another project showcasing your skills and creativity.',
          githubLink: 'https://github.com/yourusername/project2'
        },
        {
          title: 'Project 3',
          description: 'A unique project that demonstrates your problem-solving abilities.',
          githubLink: 'https://github.com/yourusername/project3'
        }
      ]

      return (
        <ProjectsContainer>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Projects</h2>
            <ProjectGrid>
              {projects.map((project, index) => (
                <ProjectCard key={index}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ProjectLinks>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> View on GitHub
                    </a>
                  </ProjectLinks>
                </ProjectCard>
              ))}
            </ProjectGrid>
          </div>
        </ProjectsContainer>
      )
    }

    export default Projects
