import React from 'react'
import { NavLink } from 'react-router-dom'

export default function _navbar() {
  return (
    <div>
         <nav
         className=" px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full  top-0 left-0 border-b border-gray-600">
        <div  className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/"  className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg"  className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
                <span  className="self-center text-xl font-semibold whitespace-nowrap text-white">IEMCT</span>
            </a>
            <div  className="flex md:order-2">

                {/* <button data-collapse-toggle="navbar-sticky" type="button"
                     className="triggerEl inline-flex items-center p-2 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span  className="sr-only">Open main menu</span>
                    <svg  className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button> */}
            </div>
            <div  className="  items-center justify-between w-full md:flex md:w-auto "
                >
                <ul
                     className="flex p-2 md:p-4 mt-4 border rounded-lg flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                    <li>
                        <NavLink to="/"
                             className="block p-2 md:pl-3 md:pr-4  bg-blue-700 rounded md:bg-transparent md:text-[#dff67f] md:p-0 text-white"
                            aria-current="page">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/html"
                             className="block p-2 md:pl-3 md:pr-4  rounded  md:hover:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Html-Css</NavLink>
                    </li>
                    <li>
                        <NavLink to="/frame"
                             className="block p-2 md:pl-3 md:pr-4  rounded  md:hover:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Css
                            Frameworks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/java"
                             className="block p-2 md:pl-3 md:pr-4  rounded  md:hover:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Javascript</NavLink>
                    </li>
                    <li>
                        <NavLink to="/react"
                             className="block p-2 md:pl-3 md:pr-4  rounded  md:hover:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">React
                            Js</NavLink>
                    </li>
                    <li>
                        <NavLink to="/node"
                             className="block p-2 md:pl-3 md:pr-4   rounded  md:hover:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Node
                            Js</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}
