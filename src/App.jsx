import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import './App.css';
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import PageNotFound from './pages/PageNotFound'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobsLayout from './layout/JobsLayout'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
        <Route path='jobs' element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route path=':id' element={<JobDetails />} loader={jobDetailsLoader} />
        </Route>
        <Route path='*' element={<PageNotFound />}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App