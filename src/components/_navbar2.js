import React from "react";
import { NavLink } from 'react-router-dom'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative w-full  flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
        <div className="container px-4  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          
                <span  className="self-center text-xl font-semibold whitespace-nowrap text-white">IEMCT</span>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg  className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
                    className="flex flex-col ml-20 md:ml-72 p-4 mt-4 border text-lg rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            
                    <li>
                        <NavLink to="/"
                             className="block p-2 md:pl-3 md:pr-4  rounded  md:active:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                            aria-current="page">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/html"
                             className="block p-2 md:pl-3 md:pr-4  rounded  md:hover:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Html-Css</NavLink>
                    </li>
                    <li>
                        <NavLink to="/frame"
                             className="block p-2 md:pl-3 md:pr-4  rounded   md:hover:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Css
                            Frameworks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/java"
                             className="block p-2 md:pl-3 md:pr-4  rounded   md:hover:text-blue-700 md:p-0  text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">Javascript</NavLink>
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
    </>
  );
}