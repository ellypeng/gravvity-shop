import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { fetcher } from '../lib/fetch';
import { useCurrentUser } from '../lib/user';
import { useCallback, useRef, useState, useEffect } from 'react';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Navbar from '../components/navbar'
import signup from '../public/assets/signup.png'
import logo from '../public/assets/logo.png'
import googleIcon from '../public/assets/google-icon.png'
import useStore from '../helpers/store';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()

    const uiStep = useStore((s) => s.uiStep)
    const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
  

    useEffect(() => {
        if (isValidating) return;
        if (user) router.replace('/dashboard');
        console.log('user = ', user)
    }, [user, router, isValidating]);

    const onSubmit = useCallback(
        async (event) => {
            setIsLoading(true);
            event.preventDefault();
            try {
              const response = await fetcher('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                }),
              });
              mutate({ user: response.user }, false);
              toast.success('You have been logged in.');
            } catch (e) {
              toast.error('Incorrect email or password.');
            } finally {
              setIsLoading(false);
            }
          },
          [mutate]
    )

    return (
        <main
            style={{
                display: uiStep === 1 ? 'block' : 'none', pointerEvents: 'auto' }}>
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
                                Log into your account
                            </h1>

                            <p className="mt-4 leading-relaxed text-[#111111] mx-auto font-vietnam font-normal text-lg">
                                Welcome back. Enter your details below
                            </p>

                            <form onSubmit={onSubmit} className="mt-8 flex flex-col justify-center">
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

                                <div className="w-full flex justify-between mb-3 pl-4 pr-4 mt-4">
                                    <label htmlFor="MarketingAccept" className="flex gap-2">
                                        <input type="checkbox" 
                                            className="h-3 w-3 rounded-md border-black bg-white accent-black"
                                        />
                                        <span className="text-sm text-black">
                                            <p className="text-black font-vietnam font-normal text-xs">
                                                Remember me
                                            </p>
                                        </span>
                                    </label>

                                    <label htmlFor="MarketingAccept" className="flex gap-2">
                                        <span className="text-sm text-black">
                                            <p className="text-black font-vietnam font-normal text-xs">
                                                <Link href="/forget-password" className="text-[#00DCC3] underline">
                                                    forget password 
                                                </Link>
                                            </p>
                                        </span>
                                    </label>
                                </div>
                                
                                <div className="w-full mb-3 mt-1">
                                    <button className="w-full rounded-3xl inline-block shrink-0 border border-[#00DCC3] bg-[#00DCC3] px-12 py-2 text-black transition 
                                    focus:outline-none focus:ring active:text-black
                                    items-center font-semibold font-vietnam text-base" onClick={() => { useStore.setState({ uiStep: 2 })}} >
                                        Log in
                                    </button>
                                </div>

                                {/* <div className="w-full mb-3">
                                    <button className="w-full shrink-0 rounded-3xl border border-black bg-white px-12 py-2 text-black transition hover:text-black focus:outline-none focus:ring active:text-black flex justify-center items-center font-semibold font-vietnam text-base" >
                                        <Image alt="google icon" src={googleIcon} className="h-4 w-4 mx-1 object-cover" />
                                        Log up with Google
                                    </button>
                                </div> */}

                            </form>

                            <div className="w-full mb-3 mt-2 flex justify-center">
                                <p className="mt-4 text-sm text-black sm:mt-0">
                                    Don&apos;t have an account?&nbsp;
                                    <Link href="/signup" className="text-[#00DCC3] underline">Sign up</Link>.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </main>
    )
}
