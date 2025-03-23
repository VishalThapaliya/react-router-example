import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <section className='error-container'>
            <h3>An error occured</h3>
            <p>{error.message}</p>
            <div className="button-container">
                <button onClick={() => navigate('/')}>Go to homepage</button>
            </div>
        </section>
    )
}

export default Error