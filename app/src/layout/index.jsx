import React from 'react'
import Sidebar from '../components/Sidebar'
import Titlebar from '../components/Titlebar'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Titlebar/>
      <div className='flex'>
      <Sidebar/>
      <Outlet/>
      </div>
      
    </>
  )
}

export default Layout
