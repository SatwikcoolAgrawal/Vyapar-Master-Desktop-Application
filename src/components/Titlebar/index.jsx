import React from 'react'
import './titlebar.css'

function Titlebar() {
  return (
  <>
  <div id="titleBarContainer" className='bg-slate-800'>
      <div id="titleBar " className="draggable">
        <div>
        <img src="" alt="" />
        <p className="draggable py-1 px-4 text-teal-300 text-sm">Entry Management App</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Titlebar
