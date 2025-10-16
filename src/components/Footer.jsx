import React from 'react'
    import styled from 'styled-components'

    const FooterContainer = styled.footer`
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
      position: relative;
      bottom: 0;
      width: 100%;
    `

    function Footer() {
      return (
        <FooterContainer>
          <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </FooterContainer>
      )
    }

    export default Footer
