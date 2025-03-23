import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <section>
            <h2>404 | Page not found.</h2>

            <div className="button-container">
                <button onClick={() => navigate('/')}>Go to homepage</button>
            </div>
        </section>
    )
}

export default PageNotFound