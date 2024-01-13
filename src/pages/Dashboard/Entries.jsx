import React from 'react'
import { NavLink } from 'react-router-dom'
import './dashboard.css'

const data=[
    {
        BillNo:"13012024",
        Name:"Ram Chand Ji",
        Product:'26Z Feruza',
        OrderDate:"13 Jan",
    },
    {
        BillNo:"13012024",
        Name:"Ram Chand Ji",
        Product:'26Z Feruza',
        OrderDate:"13 Jan",
    },
    {
        BillNo:"13012024",
        Name:"Ram Chand Ji",
        Product:'26Z Feruza',
        OrderDate:"13 Jan",
    },
    {
        BillNo:"13012024",
        Name:"Ram Chand Ji",
        Product:'26Z Feruza',
        OrderDate:"13 Jan",
    },
    {
        BillNo:"13012024",
        Name:"Ram Chand Ji",
        Product:'26Z Feruza',
        OrderDate:"13 Jan",
    },
]

function EntriesHorizontal({color,EntryData}){
    const vals=(EntryData)? EntryData:data;
    return (
        <div className='flex w-full h-3/4 overflow-auto scrollable'>
            {
            vals.map((item,idx)=>{
                return (<div key={idx} className="p-2 rounded bg-slate-100 flex align-middle flex-wrap box-border min-w-full lg:w-1/2 lg:min-w-max my-1 mr-1">
                    <div className='text-left font-sans flex-grow lg:px-3'>
                    <p className='text-xs text-gray-400 '> <span className='font-semibold'>Bill No:</span> {item.BillNo}{idx}</p>
                    <p className='text-xs lg:text-base '><span className='font-semibold'>Name:</span> {item.Name}</p>
                    </div>
                    <div className='text-left flex-grow lg:px-3'>
                        <p className='text-xs '><span className='font-semibold'>Product:</span> {item.Product}</p>
                        <p className='text-xs lg:text-base'><span className='font-semibold'>Order Date:</span> {item.OrderDate}</p>
                    </div>
                    <NavLink to='/form' className={`text-white rounded-md p-3 bg-sky-400`}>View</NavLink>
                </div>)
            })
        }
        </div>
      )
}



function EntriesVertical({color,EntryData}) {
    const vals=(EntryData)? EntryData:data;

    return (
    <div className='grid grid-cols-1 gap-y-1'>
        {
        vals.map((item,idx)=>{
            return (<div key={idx} className="p-3 rounded bg-slate-100 flex flex-wrap align-middle">
                <div className='text-left font-sans flex-grow'>
                <p className='text-xs text-gray-400'> <span className='font-semibold'>Bill No:</span> {item.BillNo}{idx}</p>
                <p className='text-xs lg:text-base'><span className='font-semibold'>Name:</span> {item.Name}</p>
                </div>
                <div className='text-left flex-grow'>
                    <p className='text-xs'><span className='font-semibold'>Product:</span> {item.Product}</p>
                    <p className='text-xs lg:text-base'><span className='font-semibold'>Order Date:</span> {item.OrderDate}</p>
                </div>
                <NavLink to='/form' className={`text-white mt-1 lg:mt-0 rounded-md lg:p-2 sm:w-full lg:w-auto ${color==="red"?"bg-red-400":"bg-green-400"}`}>View</NavLink>
            </div>)
        })
    }
    </div>
  )
}

export {EntriesVertical,EntriesHorizontal}
