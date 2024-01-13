import React, { useState,useEffect } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import Visualization from './Visualization';
import {EntriesVertical,EntriesHorizontal} from './Entries';
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
    <div className='p-8 flex-grow bg-slate-700 duration-150'>
      <div className="flex flex-col h-full max-h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-1/5 text-center">
          <div className='px-2 py-4 shadow-md rounded bg-slate-100' onClick={()=>setEntry('sell')}>
            <div className="flex h-full justify-evenly align-top" >
              <div className='flex-grow flex justify-center'>
              <FaRupeeSign  className=" text-red-500 h-full text-6xl"/>
              </div>
              <div className='text-left my-auto flex-grow'>
              <p className='text-md text-red-700'>Sell</p>
              
              <p className='text-4xl'>{sell}</p>
              </div> 
            </div>  
          </div>
          <div className='px-2 py-4 shadow-md rounded bg-slate-100' onClick={()=>setEntry('purchase')}> 
          <div className="flex h-full justify-evenly align-middle">
              <div className='flex-grow flex justify-center'>
              <FaRupeeSign  className="text-green-500 h-full text-6xl"/>
              </div>
              <div className='text-left my-auto flex-grow'>
              <p className='text-md text-green-700'>purchase</p>
              
              <p className='text-4xl'>{purchase}</p>
              </div> 
            </div>  
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-4 gap-4 text-center mt-7 h-4/5 duration-150">
          <div className='px-2 py-4 shadow-md rounded bg-slate-100 col-span-7 row-span-3'>
            <Visualization entry={entry}/>
          </div>
          <div className='col-span-5 row-span-4 duration-150'>
            <div className=' grid grid-rows-2 gap-y-2 h-full'>
              <div className='overflow-auto shadow-md max-h-56 lg:max-h-72 scrollable relative'>
                <div className='sticky top-0 py-1 bg-slate-800 shadow-md text-white'> Purchase Trades </div>
                <EntriesVertical color={"green"}/>
              </div>
              <div className=' shadow-md overflow-auto max-h-56 lg:max-h-72 scrollable relative'>
                <div className='sticky top-0 py-1 bg-slate-800 shadow-md text-white'> Selling Trades </div>
                <EntriesVertical color={"red"}/>
              </div>
            </div>
            </div>
          <div className='shadow-md  col-span-7 overflow-auto relative scrollable'>
          <div className='sticky top-0 right-0 py-1 bg-slate-800 shadow-md text-white'> Pending Trades </div>
                <EntriesHorizontal/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default History
