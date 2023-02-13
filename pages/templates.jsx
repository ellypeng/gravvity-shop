import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Navbar from '../components/navbar'
import template1 from '../public/assets/templates/template1.png'
import template2 from '../public/assets/templates/template2.png'
import template3 from '../public/assets/templates/template3.png'
import template4 from '../public/assets/templates/template4.png'
import template5 from '../public/assets/templates/template5.png'

let list=[
    {
        id: 1,
        title: 'Kicks',
        image: template1,
        price: 1,
        catalog: 2,
        industry: 0,
        format: 1
    },
    {
        id: 2,
        title: 'The future is now',
        image: template1,
        price: 1,
        catalog: 2,
        industry: 0,
        format: 1
    }
]

let catalog=[
    {
        id: 1,
        label: '1-10 products'
    },
    {
        id: 2,
        label: '11-49 products'
    },
    {
        id: 3,
        label: '50-99 products'
    },
    {
        id: 4,
        label: '99+ products'
    },
]

let industry=[
    {
        id: 0,
        label: 'All'
    },   
]

let format=[
    {
        id: 1,
        label: 'Interactive 3D'
    },   
    {
        id: 2,
        label: 'VR ready'
    },   
]

export default function Templates() {

    const [prices, setPrices] = useState([{
        "id": 1,
        "label": 'Free'
    },
    {
        "id": 2,
        "label": 'Premium'
    }])

    const persons = [
        {firstname : "Malcom", lastname: "Reynolds"},
        {firstname : "Kaylee", lastname: "Frye"},
        {firstname : "Jayne", lastname: "Cobb"}
      ];
    // // console.log(price)


    return (
        <>
            <Navbar />
            <div className="container mx-auto sm:px-16 xl:px-8 mt-8">
                <div className="flex flex-row gap-4">
                    <div className="basis-1/4 px-8 py-12 bg-white rounded-2xl h-[700px]">
                        <h2 className="mb-1 font-semibold text-black font-poppins  text-2xl">Browse templates</h2>
                        <h3 className="my-4 font-semibold text-black font-vietnam text-lg">Price</h3>
                        
                        <ul className="w-48 text-sm font-medium text-gray-900 rounded-lg ">
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-price-free" type="radio" value="" name="list-price" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-price-free" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">Free</label>
                                </div>
                            </li>
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-price-premium" type="radio" value="" name="list-price" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-price-premium" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">Premium</label>
                                </div>
                            </li>
                        </ul>

                        <h3 className="my-4 font-semibold text-black font-vietnam text-lg">Catalog size</h3>
                        <ul className="w-48 text-sm font-medium text-gray-900 rounded-lg ">
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-catalog-1" type="radio" value="" name="list-catalog" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-catalog-1" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">1-10 products</label>
                                </div>
                            </li>
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-catalog-11" type="radio" value="" name="list-catalog" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-catalog-11" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">11-49 products</label>
                                </div>
                            </li>
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-catalog-50" type="radio" value="" name="list-catalog" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-catalog-50" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">50-99 products</label>
                                </div>
                            </li>
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-catalog-99" type="radio" value="" name="list-catalog" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-catalog-99" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">99+ products</label>
                                </div>
                            </li>
                        </ul>
                        <h3 className="my-4 font-semibold text-black font-vietnam text-lg">Industry</h3>
                        <ul className="w-48 text-sm font-medium text-gray-900 rounded-lg ">
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-industry" type="radio" value="" name="list-industry" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-industry" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">All</label>
                                </div>
                            </li>
                        </ul>   
                        <h3 className="my-4 font-semibold text-black font-vietnam text-lg">Format</h3>
                        <ul className="w-48 text-sm font-medium text-gray-900 rounded-lg ">
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-format-3d" type="radio" value="" name="list-format" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-format-3d" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">Interactive 3D</label>
                                </div>
                            </li>
                            <li className="w-full rounded-t-lg my-1">
                                <div className="flex items-center">
                                    <input id="list-format-vr" type="radio" value="" name="list-format" className="w-4 h-4 text-[#111111] focus:ring-[#111111] focus:ring-2" />
                                    <label htmlFor="list-format-vr" className="py-1 ml-2 w-full text-sm font-medium text-gray-900 ">VR ready</label>
                                </div>
                            </li>
                        </ul>   

                    </div>
                    <div className="basis-3/4">
                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto overflow-y-auto">
                                <div className="flex flex-wrap mx-4 px-4 h-[800px]">
                                    <div className="pb-8 px-4 md:w-1/2">
                                        <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <Link href="/template-view" >
                                                <Image className="lg:h-80 md:h-36 w-full object-cover object-center cursor-pointer" src={template2} alt="blog" />    
                                            </Link>
                                            <div className='container flex flex-wrap justify-between px-6 pt-6'>
                                                <span className='text-lg font-semibold text-black font-vietnam'>Kicks</span>
                                                <span className='text-lg font-semibold text-black font-vietnam'>Free</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-between px-6 '>
                                                <span className=' text-base font-medium text-black font-vietnam'>11-49 products</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-start px-4 pt-2' >
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>Interactive 2D</span>
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>Interactive 3D</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-8 px-4 md:w-1/2">
                                        <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <Image className="lg:h-80 md:h-36 w-full object-cover object-center" src={template3} alt="blog" />
                                            <div className='container flex flex-wrap justify-between px-6 pt-6'>
                                                <span className='text-lg font-semibold text-black font-vietnam'>The future is now</span>
                                                <span className='text-lg font-semibold text-black font-vietnam'>Free</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-between px-6 '>
                                                <span className=' text-base font-medium text-black font-vietnam'>11-49 products</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-start px-4 pt-2' >
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>Interactive 3D</span>
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>AR ready</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-8 px-4 md:w-1/2">
                                        <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <Image className="lg:h-80 md:h-36 w-full object-cover object-center" src={template4} alt="blog" />
                                            <div className='container flex flex-wrap justify-between px-6 pt-6'>
                                                <span className='text-lg font-semibold text-black font-vietnam'>The future is now</span>
                                                <span className='text-lg font-semibold text-black font-vietnam'>Free</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-between px-6 '>
                                                <span className=' text-base font-medium text-black font-vietnam'>11-49 products</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-start px-4 pt-2' >
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>Interactive 3D</span>
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>AR ready</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-8 px-4 md:w-1/2">
                                        <div className="h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <Image className="lg:h-80 md:h-36 w-full object-cover object-center" src={template5} alt="blog" />
                                            <div className='container flex flex-wrap justify-between px-6 pt-6'>
                                                <span className='text-lg font-semibold text-black font-vietnam'>The future is now</span>
                                                <span className='text-lg font-semibold text-black font-vietnam'>Free</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-between px-6 '>
                                                <span className=' text-base font-medium text-black font-vietnam'>11-49 products</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-start px-4 pt-2' >
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>Interactive 3D</span>
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>AR ready</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
