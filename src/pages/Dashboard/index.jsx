import React, { useState,useEffect } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import Visualization from './Visualization';
import './dashboard.css'


function History() {
  const [purchase,setPurchase]=useState(40000);
  const [sell,setSell]=useState(30000);
  const [entry,setEntry]=useState('purchase');

  useEffect(() => {
    window.UserAPI.getPurchaseTotal().then((result)=>{
      setPurchase(result);
      console.log(result)
    }
    );
    return () => {
      return 0;
    }
  }, [])
  

  return (
    <div className='p-8 flex-grow bg-slate-500 duration-150'>
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 text-center h-1/4">
          <div className='px-2 py-5 shadow-md rounded bg-slate-100' onClick={()=>setEntry('sell')}>
            <div className="flex h-full justify-evenly align-top" >
              <div >
              <FaRupeeSign  className="mr-6 text-red-500 h-full text-6xl"/>
              </div>
              <div className='text-left my-auto'>
              <p className='text-md text-red-700'>Sell</p>
              
              <p className='text-3xl'>{sell}</p>
              </div> 
            </div>  
          </div>
          <div className='px-2 py-5 shadow-md rounded bg-slate-100' onClick={()=>setEntry('purchase')}> 
          <div className="flex h-full justify-evenly align-middle">
              <div >
              <FaRupeeSign  className="mr-6 text-green-500 h-full text-6xl"/>
              </div>
              <div className='text-left my-auto'>
              <p className='text-md text-green-700'>purchase</p>
              
              <p className='text-3xl'>{purchase}</p>
              </div> 
            </div>  
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-4 gap-4 text-center mt-7 h-3/4 duration-150">
          <div className='px-2 py-4 shadow-md rounded bg-slate-100 col-span-7 row-span-3'>
            <Visualization entry={entry}/>
          </div>
          <div className='col-span-5 row-span-4 duration-150'>
            <div className=' grid grid-rows-2 gap-y-2 h-full'>
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
