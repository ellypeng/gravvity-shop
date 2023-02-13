import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/logo.png'
import help from '../public/assets/help.png'

export default function Navbar() {
  return (
    <nav className="px-2 sm:px-4 py-6 rounded dark:bg-gray-900">
        <div className="container flex justify-between items-center mx-auto">
            <div className="container flex flex-wrap justify-start items-center mx-auto">
                <Link href="/" className="flex items-center">
                    <Image src={logo}  className="h-14 mr-3 sm:h-14" alt="Gravvity Logo" /> 
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="dashboard" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black md:hover:font-bold md:p-0 md:border-0 dark:text-white font-vietnam text-base" aria-current="page">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="templates" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black md:hover:font-bold md:p-0 md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-vietnam text-base">Templates</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container flex justify-end items-center mx-auto">
                <Link href="/help" className="flex flex-col h-6">
                    <Image src={help}  className="h-6 sm:h-14" alt="Gravvity Logo" /> 
                </Link>
            </div>
        </div>
    </nav>
  )
}
