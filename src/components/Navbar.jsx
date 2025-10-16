import React from 'react'
    import { Link } from 'react-router-dom'
    import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa'
    import styled from 'styled-components'

    const Nav = styled.nav`
      background-color: #333;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `

    const NavLinks = styled.div`
      display: flex;
      gap: 20px;

      a {
        color: white;
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

    function Navbar() {
      return (
        <Nav>
          <h1>Your Name</h1>
          <NavLinks>
            <Link to="/"><FaHome /> Home</Link>
            <Link to="/about"><FaUser /> About</Link>
            <Link to="/projects"><FaCode /> Projects</Link>
            <Link to="/contact"><FaEnvelope /> Contact</Link>
          </NavLinks>
        </Nav>
      )
    }

    export default Navbar
