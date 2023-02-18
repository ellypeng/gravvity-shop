import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import useStore from '../helpers/store'

export default function Thanks() {
    const popThanks = useStore((s) => s.popThanks)

    return (
        <div className='absolute top-0 left-0 w-screen h-screen overflow-hidden ' style={{
            display: popThanks !== 0 ? 'block' : 'none', zIndex: 2000000000,
            backgroundColor: '#FAFAFA', bottom: 0
        }}>
            <div className='header'>
                <div className='logo1'>
                    <Image src={'/assets/img/Logo.png'} width={60} height={50} alt={'logo'} />
                </div>
                <div className='boton'>
                    <button className='botonHelp' >Help ?</button>
                </div>
            </div>
            <div style={{ textAlign: "center", display: 'flex', alignContent: 'center', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center',alignItems: 'center' , height: '100%' , backgroundColor: '#FFF' }}>
                <FaCheckCircle size={60} color="green" />
                <h1 style={{fontSize: '30px',  textAlign: 'center' , fontWeight: 600}}>Thanks for shopping John. Your order is confirmed.</h1>
                <p>We have received your order and our team are now preparing your order.</p>
                <button style={{
                    padding: "15px 40px", border: "1px solid #DEDEDE",
                     marginTop: 15, marginBottom: 15, borderRadius: 10,
                    backgroundColor: "black", color: "white", display: 'flex', justifyContent: 'space-between'

                }} onClick={() => { useStore.setState({ popThanks: 0 }) }}>Back to shop</button>
            </div>
        </div>
    )
}
