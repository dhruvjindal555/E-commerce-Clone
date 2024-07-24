import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
import { Outlet } from 'react-router'

function HomeLayout() {
  return (
    <>
        <Navbar/>
        <Categories/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default HomeLayout