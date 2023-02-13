import { useCursor} from '@react-three/drei'

import React, { useEffect, useState, useRef } from 'react'
import { TextureLoader } from 'three'
import useStore from '../helpers/store';

export function Poster6(props:any) {

    let textureFront:any = useRef()
    const [hovered, setHover] = useState(false)
    useCursor(hovered)
    
    const poster_6_url: string = useStore((s) => s.poster_6_url)
    // console.log('poster_6_url = ', poster_6_url)

    useEffect(() => {
        const changeTexture = () => {
            if (poster_6_url === '') {
                textureFront.current = new TextureLoader().load('assets/textures/poster1.jpg')
            } else {
                textureFront.current = new TextureLoader().load(poster_6_url)
            }
        } 
        changeTexture();
    }, [poster_6_url])

    

    return (
        <>
            <mesh
                scale={props.scale}
                position={props.position}
                rotation={props.rotation}
                visible={props.visible} 
                onClick={() => {useStore.setState({ popup: 6 })}}
                onPointerOver={() => (setHover(true))}          
                onPointerOut={() => (setHover(false))} 
            >      
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial map={textureFront.current} transparent={true} needsUpdate={true} alphaTest={0.2} />
            </mesh>
        </>
    )
}