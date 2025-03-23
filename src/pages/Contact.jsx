import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Contact page</h1>

      <div className="button-container">
        <button onClick={() => navigate('info')}>Info</button>
        <button onClick={() => navigate('form')}>Form</button>
      </div>
    </section>
  )
}

export default Contact