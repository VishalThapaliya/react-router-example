import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const jobDetails = useLoaderData();

    return (
        <section className='job-details'>
            <h3>Job Details for {jobDetails.title} position</h3>
            <hr/>
            <p><strong>Location:</strong> {jobDetails.location}</p>
            <p><strong>Salary:</strong> {jobDetails.salary}</p>
            <p><strong>Description:</strong> {jobDetails.description}</p>
            <button>Apply Now</button>
        </section>
    )
}

export default JobDetails

export const jobDetailsLoader = async ({params}) => {
    // try {
        const {id} = params;
        const res = await fetch(`http://localhost:5000/jobs/${id}`);

        if(!res.ok) {
            throw new Error(`Cound not found the job details!`);
        }
        return res.json();
    // } catch(error) {
    //     console.error(`Error fetching job details: ${error}`);
    // }
}