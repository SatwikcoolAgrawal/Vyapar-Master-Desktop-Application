import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Titlebar from '../components/Titlebar'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Titlebar/>
      <div className='flex flex-row'>
      <Sidebar/>
      <Outlet/>
      </div>
      
    </>
  )
}

export default Layout
