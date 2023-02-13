import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { fetcher } from '../lib/fetch';
import { useCurrentUser } from '../lib/user';
import { useCallback, useRef, useState } from 'react';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Navbar from '../components/navbar'
import signup from '../public/assets/signup.png'
import logo from '../public/assets/logo.png'
import googleIcon from '../public/assets/google-icon.png'

export default function SignUp() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const cpasswordRef = useRef()

    const { mutate } = useCurrentUser()

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const onSubmit = useCallback(
        async (e) => {
            // e.peventDefault();
            // console.log('inside async')
            try {
                setIsLoading(true)
                // console.log('before response= ');
                const response = await fetcher('/api/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      email: emailRef.current.value,
                      name: nameRef.current.value,
                      password: passwordRef.current.value,
                    }),
                })
                // console.log('response= ', response);
                mutate({user: response.user}, false);
                toast.success('Your account has been created', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                router.replace('/template')
               
            } catch (e) {
                toast.error(e.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    
                router.replace('/login')
            } finally {
                setIsLoading(false)
                
                router.replace('/login')
            }
            router.replace('/login')
        },
        [mutate, router]
    )

    return (
        <main>
            <ToastContainer />
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block lg:order-last lg:col-span-7 lg:h-full xl:col-span-7">
                        <Image alt="signup" src={signup} className="absolute h-full w-full object-cover" />
                    </aside>

                    <main aria-label="Main" className="flex items-center justify-center px-8 py-4 sm:px-12 lg:col-span-5 lg:py-4 lg:px-16 xl:col-span-5">
                        <div className="flex flex-col justify-center">
                            <Link className="block text-[#00DCC3] mx-auto" href="/">
                                <Image src={logo}  className="h-14 mr-3 sm:h-14" alt="Gravvity Logo" /> 
                            </Link>

                            <h1 className="mt-4 text-4xl font-semibold text-black sm:text-3xl md:text-4xl mx-auto text-poppins">
                                Create an account
                            </h1>

                            <p className="mt-4 leading-relaxed text-[#111111] mx-auto font-vietnam font-normal text-lg">
                                Sign up & start designing your store now
                            </p>

                            <form onSubmit={onSubmit} className="mt-8 flex flex-col justify-center mx-auto">
                                <div className="w-full mb-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium px-4 text-black" >
                                        First Name
                                    </label>
                                    <input ref={nameRef} type="text" 
                                    className="my-2 w-full rounded-3xl border-black bg-white text-sm text-black shadow-sm px-6" placeholder='Your name'/>
                                </div>

                                {/* <div className="w-full mb-3">
                                    <label htmlFor="LastName" className="block text-sm font-medium px-4 text-black">
                                        Last Name
                                    </label>

                                    <input type="text" id="LastName" name="last_name" className="my-2 w-full rounded-3xl border-black bg-white text-sm text-black shadow-sm px-6" placeholder='Last Name'/>
                                </div> */}

                                <div className="w-full mb-3">
                                    <label htmlFor="Email" className="block text-sm font-medium px-4 text-black">
                                    Email
                                    </label>

                                    <input ref={emailRef} type="email" 
                                    className="my-2 w-full rounded-3xl border-black bg-white text-sm text-black shadow-sm px-6" placeholder='name@example.com' />
                                </div>

                                <div className="w-full mb-3">
                                    <label htmlFor="Password" className="block text-sm font-medium px-4 text-black">
                                    Password
                                    </label>

                                    <input ref={passwordRef} type="password" 
                                    className="my-2 w-full rounded-3xl border-black bg-white text-sm text-black shadow-sm px-6" placeholder='Enter a password'
                                    />
                                </div>

                                <div className="w-full mb-6">
                                    <label htmlFor="PasswordConfirmation" className="block text-sm px-4 font-medium text-black" >
                                    Confirm Password
                                    </label>

                                    <input ref={cpasswordRef} type="password" 
                                    className="my-2 w-full rounded-3xl border-black bg-white text-sm text-black shadow-sm px-6" placeholder='Re-enter password'
                                    />
                                </div>

                                <div className="w-full mb-3">
                                    <label htmlFor="MarketingAccept" className="flex gap-2">
                                    <input type="checkbox" 
                                    className="h-3 w-3 rounded-md border-black bg-white accent-black"
                                    />

                                    <span className="text-sm text-black">
                                        <p className="text-black font-vietnam font-normal text-xs">
                                            I agree to Gravvitys&nbsp; 
                                            <Link href="/terms" className="text-[#00DCC3] underline">
                                                terms and conditions 
                                            </Link>
                                            &nbsp;&&nbsp;
                                            <Link href="/privacy" className="text-[#00DCC3] underline">privacy policy</Link>
                                        </p>
                                    </span>
                                    </label>
                                </div>

                                <div className="w-full mb-3 mt-1">
                                    <button className="w-full rounded-3xl inline-block shrink-0 border border-[#00DCC3] bg-[#00DCC3] px-12 py-2 text-black transition focus:outline-none focus:ring active:text-black  items-center font-semibold font-vietnam text-base" >
                                        Get started
                                    </button>
                                </div>

                                {/* <div className="w-full mb-3">
                                    <button className="w-full shrink-0 rounded-3xl border border-black bg-white px-12 py-2 text-black transition hover:text-black focus:outline-none focus:ring active:text-black flex justify-center items-center font-semibold font-vietnam text-base" >
                                        <Image alt="google icon" src={googleIcon} className="h-4 w-4 mx-1 object-cover" />
                                        Sign up with Google
                                    </button>
                                </div> */}
                            </form>

                            <div className="w-full mb-3 mt-2 flex justify-center">
                                <p className="mt-4 text-sm text-black sm:mt-0">
                                    Already have an account?&nbsp;
                                    <Link href="/login" className="text-[#00DCC3] underline">Log in</Link>.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </main>
    )
}
