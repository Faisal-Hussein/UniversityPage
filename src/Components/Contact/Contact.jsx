import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src= {msg_icon} alt="" /></h3>
        <p>Feel free to reach out through our contact form or find our
          contact information below. Your feedback, questions, and suggestions
          are important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>Contact@Email.com</li>
          <li>+1 123-456-7890</li>
          <li>77 Massachussets Ave, Cambridge <br /> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  )
}

export default Contact
