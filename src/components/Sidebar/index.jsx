import React, { useState } from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom';
import { BsClipboardData, } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoLogoBuffer } from "react-icons/io";
import { IoMdAnalytics } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function Sidebar() {
    const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", src: BsClipboardData },
    { title: "Form", src: LiaClipboardListSolid },
    { title: "History", src: FaSearch },
    { title: "Analytics", src: IoMdAnalytics },
    { title: "User", src: FaRegUser, gap: true },
    { title: "Settings", src: IoSettingsOutline },
  ];
  return (
   
      <div
        className={`sidebarContainer ${
          open ? "w-60" : "w-20"
        } p-5 pt-8 `}
        
      >
        <button
          className={`absolute cursor-pointer -right-3 top-10  bg-white duration-500
           rounded-full  ${!open && "rotate-180"}` }
          onClick={() => setOpen(!open) } alt="navbutton"
        ><IoIosArrowDropleftCircle size="24" className='text-teal-400'/></button>
        <div className="flex gap-x-4 items-center">
          {
            open ? 
            (<><IoLogoBuffer size="40" color='white'/>
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"}`}
            >
              EMA
            </h1></>):
            (<IoLogoBuffer size="40" color='white'/>)
          }
          
        </div>
        <ul className="mt-6 h-3/4 overflow-auto sidebarMenu">
          {Menus.map((Menu, index) => (
            <NavLink to={`/${Menu.title.toLowerCase()}`}    key={index} className={({ isActive, isPending }) => isActive ? "itemActive" : ""}>
            <li
            
              className={`flex  rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
                <div className={`flex items-center ${open && "pl-2"}`}>
                  <Menu.src size="23"/>
                  <div className={`ml-2 ${!open && "hidden"} origin-left text-base duration-200 ease-out`}>
                    {Menu.title}
                  </div>
                </div>
            </li>
              </NavLink>
          ))}
        </ul>

      </div>
     
    
  )
}

export default Sidebar;
