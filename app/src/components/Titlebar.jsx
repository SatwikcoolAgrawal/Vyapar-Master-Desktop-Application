import React from 'react'

function Titlebar() {
  return (
  <>
    <div className="bg-slate-500" style={{display:"flex", flexDirection:"row",justifyContent:"space-between",height:"25px" }}>
      <div className='px-3'>
        LOGO HERE
      </div>
      <div className='px-1' style={{display:"flex" ,justifyContent:"flex-end"}}>
        <button className='mx-1' style={{height:"auto", width:"20px"}}><img src={require("./icons/window-minimize.png")} alt="#"/></button>
        <button className='mx-1' style={{height:"auto", width:"20px"}}><img src={require("./icons/window-minimize.png")} alt="#"/></button>
        <button className='mx-1' style={{height:"auto", width:"20px"}}><img src={require("./icons/window-minimize.png")} alt="#"/></button>
      </div>
    </div>
  </>
  )
}

export default Titlebar
