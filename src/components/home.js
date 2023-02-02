
import React, { Component } from 'react'
import roadmap from '../roadmap copy.png'

function home() {
  return (
    <div className='bg-[#28303d] pt-72 '>
     <div  className="content  ">
        <div  className="m-auto  flex-col w-1/2 h-12 flex justify-center items-center">

          
            

            <div  className="mt-80 mb-10  text-4xl font-semibold text-[#eef3db]">Roadmap to  <span
                     className="text-blue-600">Web Development</span> </div> 
            <div><img src={roadmap} className="max-w-[20rem] px-4 md:max-w-lg" alt=""/></div>
        </div>
        <div  className="text-[#eef3db] text-5xl font-semibold flex items-center justify-center mt-[30rem]">Timeline</div>

        <div  className="mt-[5rem] pb-10 mx-14">
            <ol  className="items-center sm:flex">
                <li  className="relative mb-6 sm:mb-0">
                    <div  className="flex items-center">
                        <div
                             className=" flex items-center justify-center w-6 h-6 rounded-full ring-0  bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg aria-hidden="true"  className="w-3 h-3  text-blue-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div  className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div  className="mt-3 sm:pr-8">
                        <h3  className="text-lg font-semibold  text-white">HTML - CSS</h3>
                        <time
                             className=" mt-1 block mb-2 text-sm font-normal leading-none text-gray-400 ">2
                            weeks</time>
                        <p  className="text-base font-normal  text-gray-400">Get started with html and css
                            and make your first ever website.</p>
                    </div>
                </li>
                <li  className="relative mb-6 sm:mb-0">
                    <div  className="flex items-center">
                        <div
                             className="flex items-center justify-center w-6 h-6 rounded-full ring-0  bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg aria-hidden="true"  className="w-3 h-3  text-blue-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div  className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div  className="mt-3 sm:pr-8">
                        <h3  className="text-lg font-semibold  text-white">Responsive Css</h3>
                        <time
                             className=" mt-1 block mb-2 text-sm font-normal leading-none text-gray-400 ">1
                            week</time>
                        <p  className="text-base font-normal  text-gray-400">Learn about the importance of
                            a responsive website .</p>
                    </div>
                </li>
                <li  className="relative mb-6 sm:mb-0">
                    <div  className="flex items-center">
                        <div
                             className=" flex items-center justify-center w-6 h-6  rounded-full ring-0  bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg aria-hidden="true"  className="w-3 h-3  text-blue-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div  className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div  className="mt-3 sm:pr-8">
                        <h3  className="text-lg font-semibold  text-white">Css Frameworks</h3>
                        <time
                             className="mt-1 block mb-2 text-sm font-normal leading-none text-gray-400 ">2
                            weeks</time>
                        <p  className="text-base font-normal  text-gray-400">Keep going ahead on your journey in web development,  with Bootstrap , Tailwind and Scss </p>
                    </div>
                </li>
            </ol>
            <ol  className="items-center sm:flex my-16">
                <li  className="relative mb-6 sm:mb-0">
                    <div  className="flex items-center">
                        <div
                             className=" flex items-center justify-center w-6 h-6 rounded-full ring-0  bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg aria-hidden="true"  className="w-3 h-3 text-blue-300 " fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div  className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div  className="mt-3 sm:pr-8">
                        <h3  className="text-lg font-semibold  text-white">Javascript</h3>
                        <time
                             className="mt-1 block mb-2 text-sm font-normal leading-none text-gray-400 ">2
                            weeks</time>
                        <p  className="text-base font-normal  text-gray-400">Continue your journey in web development by learning Javascript. As you become more proficient, you can use your newfound skills to code your first fully-functional website. .</p>
                    </div>
                </li>
                <li  className="relative mb-6 sm:mb-0">
                    <div  className="flex items-center">
                        <div
                             className="flex items-center justify-center w-6 h-6  rounded-full ring-0  bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg aria-hidden="true"  className="w-3 h-3  text-blue-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div  className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div  className="mt-3 sm:pr-8">
                        <h3  className="text-lg font-semibold  text-white">React JS</h3>
                        <time
                             className="mt-1 block mb-2 text-sm font-normal leading-none text-gray-400 ">2
                            weeks</time>
                        <p  className="text-base font-normal  text-gray-400">Move ahead on your exploration of modern web development by delving into React.This powerful library allows you to create dynamic single page web applications with ease</p>
                    </div>
                </li>
                <li  className="relative mb-6 sm:mb-0">
                    <div  className="flex items-center">
                        <div
                             className=" flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                            <svg aria-hidden="true"  className="w-3 h-3  text-blue-300" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div  className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                    </div>
                    <div  className="mt-3 sm:pr-8">
                        <h3  className="text-lg font-semibold  text-white">Node JS</h3>
                        <time
                             className="block mt-1 mb-2 text-sm font-normal leading-none text-gray-400 ">2
                            weeks</time>
                        <p  className="text-base font-normal  text-gray-400">Embrace the power of server-side programming by diving into Node.js, a popular JavaScript-based framework. With Node.js, you'll be able to build efficient and scalable server-side applications. </p>
                    </div>
                </li>
            </ol>
        </div>


    </div></div>
  )
}

export default home