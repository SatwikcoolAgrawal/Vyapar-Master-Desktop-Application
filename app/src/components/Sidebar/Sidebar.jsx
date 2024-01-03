import React, { useState } from 'react'
import './sidebar.css'
import { Link, Outlet } from 'react-router-dom';
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
    { title: "Search", src: FaSearch },
    { title: "Analytics", src: IoMdAnalytics },
    { title: "User", src: FaRegUser, gap: true },
    { title: "Settings", src: IoSettingsOutline },
  ];
  return (
    <div className='relative z-10'>
      <div className="flex">
      <div
        className={` ${
          open ? "w-60" : "w-20"
        } h-screen p-5 pt-8 relative duration-700 `}
        style = {{backgroundColor:"#242c44"}}
      >
        <button
          className={`absolute cursor-pointer -right-3 top-9  bg-white bg-opacity-50
           rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open) } alt="1"
        ><IoIosArrowDropleftCircle size="24" color='#242c44'/></button>
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
        <ul className="mt-6 h-3/4 overflow-auto overflow-x-hidden sidebarMenu">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Link to={`/${Menu.title.toLowerCase()}`}>
                <div className='flex items-center'><Menu.src size="23" />
                <span className={`ml-2 ${!open && "hidden"} origin-left text-base duration-200`}>
                   {Menu.title}
                </span></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Sidebar;
