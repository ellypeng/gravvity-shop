import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/animation.scss'

import { useCallback, useRef, useState, useEffect } from 'react';
import { useCurrentUser } from '../lib/user';
import { useRouter } from 'next/navigation'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    localStorage.removeItem("hairStyle");
    localStorage.removeItem("hairColor");
    localStorage.removeItem("glasses");
    localStorage.removeItem("beardStyle");
    localStorage.removeItem("beardColor");
    localStorage.removeItem("skinColor");
    localStorage.removeItem("topStyle");
    localStorage.removeItem("topColor");
    localStorage.removeItem("trousersStyle");
    localStorage.removeItem("trousersColor");
    localStorage.removeItem("accessoriesStyle");
    localStorage.removeItem("accessoriesColor");
    localStorage.removeItem("shoesStyle");
    localStorage.removeItem("shoesColor");
    localStorage.removeItem("avatarName");
    localStorage.removeItem("email");
    // console.log('removed')
  }, [])


  return (
    <>
      <div>
        <div>
            <Component {...pageProps} />
        </div>
      </div>
  </>
  )
}
