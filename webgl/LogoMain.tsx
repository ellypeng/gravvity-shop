import React, { useRef, useState, useEffect} from 'react'
import { useCursor} from '@react-three/drei'
import { TextureLoader } from 'three'
import useStore from '../helpers/store';

export function LogoMain(props:any) {

    // const textureLogo = useLoader(TextureLoader, 'assets/textures/logo.png')

    let textureLogo:any = useRef()
    const [hovered, setHover] = useState(false)
    useCursor(hovered)
    
    const logo_url: string = useStore((s) => s.logo_url)

    useEffect(() => {
        const changeTexture = () => {
            if (logo_url === '') {
                textureLogo.current = new TextureLoader().load('assets/textures/logo.png')
            } else {
                textureLogo.current = new TextureLoader().load(logo_url)
            }
        } 
        changeTexture();
    }, [logo_url])

    return (
        <>
            <mesh
                scale={props.scale}
                position={props.position}
                rotation={props.rotation}
                visible={props.visible}  
                onClick={() => {useStore.setState({ popupLogo: 1 })}}
                onPointerOver={() => (setHover(true))}          
                onPointerOut={() => (setHover(false))} 
            >      
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial map={textureLogo.current} transparent={true} alphaTest={0.2} />
            </mesh>
        </>
    )
}