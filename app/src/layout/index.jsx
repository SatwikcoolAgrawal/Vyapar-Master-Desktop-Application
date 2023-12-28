import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Titlebar from '../components/Titlebar'

function Layout() {
  return (
    <>
      <Titlebar/>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default Layout
