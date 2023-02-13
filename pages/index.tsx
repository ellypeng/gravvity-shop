import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Navbar from '../components/navbar'
import dashboard from '../public/assets/dashboard.png'

export default function Dashboard() {
  const router = useRouter()

  return (
    <main>
      <Navbar />
      <div className="container items-start mx-auto">
        <div className="w-full introduction sm:px-16 xl:px-48 flex flex-col justify-center">
          <Image className="h-12 w-12 mt-48 mx-auto" src={dashboard} alt="blog" />
          <div className="pt-6 text-center ">
            <h3 className="text-poppins font-semibold text-3xl">Welcome to Gravvity</h3>
            <p className=" text-vietnam font-normal text-lg mt-4">
            Let’s get you up and running. Select a
            <br />
            template to get started.
            </p>
            <button type="button" className=" text-vietnam font-semibold text-[20px] text-white bg-[#111111] w-[244px] h-[60px] mt-[44px] mx-auto rounded-2xl" onClick={() => router.push('/templates')}>
              Browse templates
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
