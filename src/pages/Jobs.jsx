import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
   const jobsData = useLoaderData();

  return (
    jobsData &&
    (<section className='jobs'>
        {jobsData.map((job) => (
            <Link to={job.id.toString()} key={job.id}>
              <h4>{job.title}</h4>
              <p>{job.location}</p>
              <small>{job.salary}</small>
            </Link>
          )) 
        }
      </section>)
  )
}

export default Jobs

export const jobsLoader = async () => {
  try {
    const res = await fetch('http://localhost:5000/jobs');
    if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  } catch(error) {
    console.error(`Error fetching jobs: ${error}`);
    return [];
  }
}