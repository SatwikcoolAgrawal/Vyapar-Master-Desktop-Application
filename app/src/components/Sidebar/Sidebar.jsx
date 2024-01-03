import React, { useState } from 'react'
import './sidebar.css'

function Sidebar() {
    const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User"},
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" }
  ];
  return (
      <div className="flex sticky" >
      <div style={{height:'calc( 100vh - env(titlebar-area-height, var(--fallback-title-bar-height)) )'}}
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-400 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={require("./assets/control.png")}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open) } alt="1"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={require("./assets/logo.png")}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`} alt="1"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
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
              <img src={require(`./assets/${Menu.src}.png`)} alt={`${Menu.title}`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div> 
  )
}

export default Sidebar
