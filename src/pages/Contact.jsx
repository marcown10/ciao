import React, { useState } from 'react'
    import styled from 'styled-components'

    const ContactContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 70vh;
      background-color: white;
    `

    const ContactForm = styled.form`
      width: 100%;
      max-width: 500px;
      background-color: #f4f4f4;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `

    const FormGroup = styled.div`
      margin-bottom: 20px;

      label {
        display: block;
        margin-bottom: 5px;
      }

      input, textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
      }
    `

    const SubmitButton = styled.button`
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #45a049;
      }
    `

    function Contact() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      })

      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }))
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        // Add form submission logic here
        console.log('Form submitted:', formData)
        alert('Thank you for your message!')
      }

      return (
        <ContactContainer>
          <ContactForm onSubmit={handleSubmit}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Me</h2>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactContainer>
      )
    }

    export default Contact
