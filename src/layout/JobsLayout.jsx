import React from 'react'
import { Outlet } from 'react-router-dom'
import Jobs from '../pages/Jobs'

const JobsLayout = () => {
  return (
    <section>
      <h2>Job Openings</h2>
      <p>List of current job openings in our company.</p>
      <Jobs />
      <Outlet />
    </section>
  )
}

export default JobsLayout