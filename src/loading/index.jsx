import React from 'react'

function index() {
  return (
    <section className="bg-slate-900 relative place-items-center grid h-screen w-screen gap-4">   
 
  <div className="bg-slate-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
  
  <div className="bg-slate-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
 
  <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
  
  </section>
  )
}

export default index
