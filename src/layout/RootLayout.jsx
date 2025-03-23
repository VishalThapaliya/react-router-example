import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Navbar />
        <main className="container">
            <Outlet />
        </main>
        
    </>
  )
}

export default RootLayout