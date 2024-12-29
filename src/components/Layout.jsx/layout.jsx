import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router'
function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout