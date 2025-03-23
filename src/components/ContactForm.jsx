import React from 'react'

const ContactForm = () => {
  return (
    <section>
        <div>
            <input type="text" placeholder='Enter Name' />
        </div>
        <div>
            <input type="email" placeholder='Enter Email' />
        </div>
        <div>
            <textarea placeholder='Enter Message'></textarea>
        </div>
    </section>
  )
}

export default ContactForm