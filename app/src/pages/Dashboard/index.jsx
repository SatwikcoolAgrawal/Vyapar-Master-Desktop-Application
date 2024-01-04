import React from 'react'
import './dashboard.css'

function History() {
  return (
    <div className='p-10 flex-grow bg-gray-400 duration-150'>
      <div className="flex flex-col h-full text-teal-400 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 text-center h-1/4">
          <div className='px-2 py-7 shadow-md rounded bg-slate-600'>
            <p className='text-2xl'>purchase</p> </div>
          <div className='px-2 py-7 shadow-md rounded bg-slate-600'> <p className='text-2xl'>sell</p></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-4 gap-4 text-center mt-7 h-3/4 duration-150">
          <div className='px-2 py-7 shadow-md rounded bg-slate-600 col-span-7 row-span-3'>
            <p className='text-2xl'>visualization</p></div>
          <div className='px-2 py-3 shadow-md rounded bg-slate-600 col-span-5 row-span-4 duration-150'>
            <div className='p-3 grid grid-rows-2 gap-2 h-full'>
              <div className='bg-slate-300 p-1 rounded'>puchase entry</div>
              <div className='bg-slate-300 p-1 rounded'>sell entry</div>
            </div>
            </div>
          <div className='px-2 py-7 shadow-md rounded bg-slate-600 col-span-7'>pending</div>
        </div>
      </div>
    </div>
  )
}

export default History
