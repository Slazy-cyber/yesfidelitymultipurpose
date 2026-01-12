import React, { useState } from 'react'
import { FaTrashAlt, FaRecycle, FaSeedling, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((prev) => !prev)

    return (
        <>
            <nav className="bg-white border-gray-200 shadow-md shadow-gray-200 py-2.5 :bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-7xl px-4 mx-auto">
                    <a href="/" className="flex items-center">
                        <img src="yes-image.jpg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-green-600 dark:text-green-400">Yes-Fidelity-Multipurpose</span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>

                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-controls="mobile-menu-2"
                            aria-expanded={isOpen}
                            className="inline-flex items-center p-2 ml-1 text-sm text-green-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-green-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        id="mobile-menu-2"
                        className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="/cleaning"
                                    className="block py-2 pl-3 pr-4 text-green-700 bg-transparent rounded lg:bg-transparent lg:text-green-700 lg:p-0 dark:text-green-400"
                                    aria-current="page">
                                    <span className="inline-flex items-center gap-2">
                                        <FaTrashAlt className="w-4 h-4" aria-hidden="true" />
                                        <span>Cleaning & Waste</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/recycling"
                                    className="block py-2 pl-3 pr-4 text-green-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-800 lg:p-0 dark:text-green-400 lg:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-green-300 lg:dark:hover:bg-transparent dark:border-gray-700">
                                    <span className="inline-flex items-center gap-2">
                                        <FaRecycle className="w-4 h-4" aria-hidden="true" />
                                        <span>Recyclable Materials</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/agricultural"
                                    className="block py-2 pl-3 pr-4 text-green-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-800 lg:p-0 dark:text-green-400 lg:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-green-300 lg:dark:hover:bg-transparent dark:border-gray-700">
                                    <span className="inline-flex items-center gap-2">
                                        <FaSeedling className="w-4 h-4" aria-hidden="true" />
                                        <span>Agricultural Products</span>
                                    </span>
                                </a>
                            </li>



                            <li>
                                <a href="/contact"
                                    className="block py-2 pl-3 pr-4 text-green-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-800 lg:p-0 dark:text-green-400 lg:dark:hover:text-green-300 dark:hover:bg-gray-700 dark:hover:text-green-300 lg:dark:hover:bg-transparent dark:border-gray-700">
                                    <span className="inline-flex items-center gap-2">
                                        <FaEnvelope className="w-4 h-4" aria-hidden="true" />
                                        <span>Contact</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>







        </>
    )
}

export default Navbar