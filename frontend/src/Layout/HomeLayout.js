import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
import { Outlet } from 'react-router'

function HomeLayout() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <Categories/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout