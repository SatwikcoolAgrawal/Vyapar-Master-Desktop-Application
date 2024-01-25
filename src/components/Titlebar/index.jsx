import React,{memo} from 'react'
import './titlebar.css'

function Titlebar() {
  return (
  <>
  <div id="titleBarContainer" className='bg-slate-800'>
      <div id="titleBar " className="draggable">
        <div>
        <p className="draggable py-2 px-4 text-teal-200 text-sm draggable">Vyapar Master</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default memo(Titlebar)
