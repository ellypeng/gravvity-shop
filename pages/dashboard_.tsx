import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../components/navbar'

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <div className="container flex flex-col items-start mx-auto">
        <div className="w-full introduction sm:px-16 xl:px-48">
          <h3 className="mb-4 mt-12 pt-12 text-3xl font-poppins font-semibold tracking-tight leading-none text-black md:text-3xl lg:text-3xl dark:text-white ">Hey, [Name].</h3>
          <p className="mb-6 text-lg font-normal text-[#111111] lg:text-xl dark:text-gray-400 font-vietnam">
            Follow our easy-to-use guided journey to
            <br />
            set up your virtual store quickly & affordably!
          </p>
          <section className="w-full dark:bg-gray-900">
            <div className="py-8 mx-auto max-w-screen-xl">
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <div className="flex flex-col p-6 mr-2 max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 mt-12 text-base font-semibold font-vietnam">STEP 1</h3>
                    <p className="font-semibold text-2xl lg:text-2xl text-black sm:text-lg font-vietnam dark:text-gray-400">
                      Select & customize
                      <br />
                      templates shops
                    </p>
                    <a href="#" className="text-black bg-[#00DCC3] hover:bg-[#00DCC3] font-semibold rounded-3xl text-sm mx-auto my-8 px-4 py-2.5 font-vietnam text-center dark:text-white  dark:focus:ring-primary-900">Custom template</a>
                </div>
                <div className="flex flex-col p-6 mr-2 max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 mt-12 text-base font-semibold font-vietnam">STEP 2</h3>
                    <p className="font-semibold text-2xl lg:text-2xl text-black sm:text-lg font-vietnam dark:text-gray-400">
                      Add products
                      <br />
                      & product info
                    </p>
                    <a href="#" className="text-black bg-[#00DCC3] hover:bg-[#00DCC3] font-semibold rounded-3xl text-sm mx-auto my-8 px-4 py-2.5 font-vietnam text-center dark:text-white  dark:focus:ring-primary-900">Add products</a>
                </div>
                <div className="flex flex-col p-6 mr-2 max-w-lg text-center text-gray-900 bg-white rounded-2xl border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 mt-12 text-base font-semibold font-vietnam">STEP 3</h3>
                    <p className="font-semibold text-2xl lg:text-2xl text-black sm:text-lg font-vietnam dark:text-gray-400">
                      Select a plan &
                      <br />
                      configure settings
                    </p>
                    <a href="#" className="text-black bg-[#00DCC3] hover:bg-[#00DCC3] font-semibold rounded-3xl text-sm mx-auto my-8 px-4 py-2.5 font-vietnam text-center dark:text-white  dark:focus:ring-primary-900">Configure now</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
