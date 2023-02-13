import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useRef, useState, useEffect } from 'react';
import { fetcher } from '../lib/fetch';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useSWR from 'swr';

import Navbar from '../components/navbar'
import template2 from '../public/assets/templates/template2.png'
import preview1 from '../public/assets/template-detail/preview1.png'
import preview2 from '../public/assets/template-detail/preview2.png'
import preview3 from '../public/assets/template-detail/preview3.png'
import preview4 from '../public/assets/template-detail/preview4.png'

export default function TemplateDetail() {

    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const preview = () =>{
        // router.replace('/preview')
        router.push('/preview')
    }

    const customize = () =>{
        // router.replace('/preview')
        router.push('/templates-custom')
    }



    // const preview = useCallback(async () => {
    //     try {
    //         await fetcher('/api/exec', { method: 'POST' });
    //         // console.log("response")
            
    //         toast.success('Successful', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //         // mutate({ user: response.user }, false);
    //         router.replace('/preview')
    //     } catch (e) {
    //         toast.error('Failed', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             });
    //         //   setStatus('');
    //         // console.log('catch')
    //     }
    //   }, []);

    return (
        <>
            <ToastContainer />
            <Navbar />
            <div className="container mx-auto sm:px-16 xl:px-8 mt-8">
                <div className="flex justify-between px-8 pb-8">
                    <Link href="/templates" >
                        <div className="flex flex-row items-center ">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.575 19.4129L12.175 15.0004L16.575 10.5879" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className='flex font-vietnam font-normal text-base text-[#111111] px-4'>All templates</span>
                        </div>
                    </Link>
                    <div className='flex justify-end'>
                        <button className='px-8 border  py-2 font-vietnam font-semibold text-sm text-[#111111] border-[#00DCC3] rounded-3xl mr-4' onClick={() => preview()}>Open preview</button>
                        <button className='px-8 border  py-2 font-vietnam font-semibold text-sm bg-[#00DCC3] rounded-3xl' onClick={() => customize()}>Customize template</button>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="basis-1/4 px-8 py-12 bg-white rounded-2xl">
                        <h2 className="mb-1 font-semibold text-black font-poppins  text-2xl">Kicks template</h2>
                        <h3 className="my-4 font-semibold text-[#111111] font-vietnam text-sm italic">by Gravvity</h3>

                        <h3 className="mt-8 mb-4 font-semibold text-[#111111] font-vietnam text-lg">Key features</h3>
                        <ul className="w-72 text-sm font-medium text-gray-900 rounded-lg ">
                            <li className="w-full rounded-t-lg my-1 flex items-center py-1">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.33252 10.5003L9.44127 12.6178L13.6675 8.38281" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.40627 2.14305C10.01 1.6268 10.9988 1.6268 11.6113 2.14305L12.9938 3.33305C13.2563 3.56055 13.7463 3.7443 14.0963 3.7443H15.5838C16.5113 3.7443 17.2725 4.50555 17.2725 5.43305V6.92055C17.2725 7.2618 17.4563 7.76055 17.6838 8.02305L18.8738 9.40555C19.39 10.0093 19.39 10.998 18.8738 11.6105L17.6838 12.993C17.4563 13.2555 17.2725 13.7455 17.2725 14.0955V15.583C17.2725 16.5105 16.5113 17.2718 15.5838 17.2718H14.0963C13.755 17.2718 13.2563 17.4555 12.9938 17.683L11.6113 18.873C11.0075 19.3893 10.0188 19.3893 9.40627 18.873L8.02377 17.683C7.76127 17.4555 7.27127 17.2718 6.92127 17.2718H5.40752C4.48002 17.2718 3.71877 16.5105 3.71877 15.583V14.0868C3.71877 13.7455 3.53502 13.2555 3.31627 12.993L2.13502 11.6018C1.62752 10.998 1.62752 10.018 2.13502 9.4143L3.31627 8.02305C3.53502 7.76055 3.71877 7.27055 3.71877 6.9293V5.4243C3.71877 4.4968 4.48002 3.73555 5.40752 3.73555H6.92127C7.26252 3.73555 7.76127 3.5518 8.02377 3.3243L9.40627 2.14305Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='flex font-vietnam font-normal text-sm text-[#111111] px-3'>Gravvity approved</span>
                            </li>
                            <li className="w-full rounded-t-lg my-1 flex items-center  py-1">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.77374 6.50977L10.5 10.981L18.1737 6.53602" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.5 18.9089V10.9727" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.68875 2.16915L4.01625 4.75915C2.9575 5.3454 2.09125 6.8154 2.09125 8.0229V12.9666C2.09125 14.1741 2.9575 15.6441 4.01625 16.2304L8.68875 18.8291C9.68625 19.3804 11.3225 19.3804 12.32 18.8291L16.9925 16.2304C18.0512 15.6441 18.9175 14.1741 18.9175 12.9666V8.0229C18.9175 6.8154 18.0512 5.3454 16.9925 4.75915L12.32 2.1604C11.3137 1.60915 9.68625 1.60915 8.68875 2.16915Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='flex font-vietnam font-normal text-sm text-[#111111] px-3'>Up to 25 products</span>
                            </li>
                            <li className="w-full rounded-t-lg my-1 flex items-center py-1">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 8.75L5.25 10.5L7 12.25" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14 8.75L15.75 10.5L14 12.25" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.375 8.46094L9.625 12.5385" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='flex font-vietnam font-normal text-sm text-[#111111] px-3'>Web browser</span>
                            </li>
                            <li className="w-full rounded-t-lg my-1 flex items-center py-1">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.75 14.8304H5.43375C2.485 14.8304 1.75 14.0954 1.75 11.1466V5.89664C1.75 2.94789 2.485 2.21289 5.43375 2.21289H14.6475C17.5962 2.21289 18.3313 2.94789 18.3313 5.89664" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.75 18.787V14.832" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1.75 11.332H8.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.89752 18.7871H8.75002" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.25 11.1994V16.1956C19.25 18.2694 18.7337 18.7856 16.66 18.7856H13.5537C11.48 18.7856 10.9637 18.2694 10.9637 16.1956V11.1994C10.9637 9.12563 11.48 8.60938 13.5537 8.60938H16.66C18.7337 8.60938 19.25 9.12563 19.25 11.1994Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.0889 15.9688H15.0968" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='flex font-vietnam font-normal text-sm text-[#111111] px-3'>Mobile & desktop ready</span>
                            </li>
                        </ul>

                        <h3 className="mt-8 mb-4 font-semibold text-[#111111] font-vietnam text-lg">Customizable features</h3>
                        <ul className="w-72 text-sm font-medium text-gray-900 rounded-lg ">
                            <li className="w-full rounded-t-lg my-1 flex items-center py-1">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.78125 10.4997L9.2575 12.9759L14.2187 8.02344" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='flex font-vietnam font-normal text-sm text-[#111111] px-3'>Brand logo</span>
                            </li>
                            <li className="w-full rounded-t-lg my-1 flex items-center py-1">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.78125 10.4997L9.2575 12.9759L14.2187 8.02344" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='flex font-vietnam font-normal text-sm text-[#111111] px-3'>In-store posters</span>
                            </li>
                            <li className="w-full rounded-t-lg my-1 flex items-center py-1">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.78125 10.4997L9.2575 12.9759L14.2187 8.02344" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='flex font-vietnam font-normal text-sm text-[#111111] px-3'>Featured video</span>
                            </li>
                            <li className="w-full rounded-t-lg my-1 flex items-center py-1">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.78125 10.4997L9.2575 12.9759L14.2187 8.02344" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className='flex font-vietnam font-normal text-sm text-[#111111] px-3'>Interior textures</span>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-3/4">
                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto overflow-y-auto">
                                <div className="flex flex-wrap mx-4 px-4">
                                    <div className="pb-2 px-4 md:w-3/4">
                                        <div className="border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <Image 
                                                className="lg:h-180 md:h-180 w-full object-cover object-center cursor-pointer" 
                                                src={preview1} 
                                                alt="blog" 
                                                onClick={() => preview()}    
                                            />    

                                        </div>
                                    </div>
                                    <div className="md:w-1/4 ">
                                        <div className="border-gray-200 border-opacity-60">
                                            <Image className="mb-4 h-[148px] w-full object-cover object-center rounded-lg" src={preview2} alt="blog" />
                                        </div>
                                        <div className="border-gray-200 border-opacity-60">
                                            <Image className="mb-4 h-[148px] w-full object-cover object-center rounded-lg" src={preview3} alt="blog" />
                                        </div>
                                        <div className="border-gray-200 border-opacity-60">
                                            <Image className="h-[148px] w-full object-cover object-center rounded-lg" src={preview4} alt="blog" />
                                        </div>
                                    </div>
                                    <div className="pb-2 px-4 md:w-3/4">
                                        <div className="border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className='container flex flex-wrap justify-between px-6 pt-6'>
                                                <span className='text-lg font-semibold text-black font-vietnam'>Kicks</span>
                                            </div>
                                            <div className='container flex flex-wrap justify-start pt-2' >
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>Interactive 2D</span>
                                                <span className='text-xs font-semibold text-black font-vietnam  bg-[#F3F3F3] mx-4 py-2 px-4 rounded-3xl'>Interactive 3D</span>
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
