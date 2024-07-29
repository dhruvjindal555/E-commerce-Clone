import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AuthLayout