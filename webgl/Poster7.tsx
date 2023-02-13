import { useCursor} from '@react-three/drei'

import React, { useEffect, useState, useRef } from 'react'
import { TextureLoader } from 'three'
import useStore from '../helpers/store';

export function Poster7(props:any) {

    let textureFront:any = useRef()
    const [hovered, setHover] = useState(false)
    useCursor(hovered)

    const poster_7_url: string = useStore((s) => s.poster_7_url)
    console.log('poster_7_url = ', poster_7_url)

    useEffect(() => {
        const changeTexture = () => {
            if (poster_7_url === '') {
                textureFront.current = new TextureLoader().load('assets/textures/poster2.jpg')
            } else {
                textureFront.current = new TextureLoader().load(poster_7_url)
            }
        } 
        changeTexture();
    }, [poster_7_url])
    
    

    return (
        <>
            <mesh
                scale={props.scale}
                position={props.position}
                rotation={props.rotation}
                visible={props.visible} 
                onClick={() => {useStore.setState({ popup: 7 })}}
                onPointerOver={() => (setHover(true))}          
                onPointerOut={() => (setHover(false))} 
            >      
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial map={textureFront.current} transparent={true} needsUpdate={true} alphaTest={0.2} />
            </mesh>
        </>
    )
}