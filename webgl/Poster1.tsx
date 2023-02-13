import { useCursor} from '@react-three/drei'

import React, { useEffect, useState, useRef } from 'react'
import { TextureLoader } from 'three'
import useStore from '../helpers/store';

export function Poster1(props:any) {

    let textureFront:any = useRef()
    const [hovered, setHover] = useState(false)
    useCursor(hovered)

    const poster_1_url: string = useStore((s) => s.poster_1_url)
    // console.log('poster_1_url = ', poster_1_url)

    useEffect(() => {
        const changeTexture = () => {
            if (poster_1_url === '') {
                textureFront.current = new TextureLoader().load('assets/textures/Placement5.jpg')
            } else {
                textureFront.current = new TextureLoader().load(poster_1_url)
            }
        } 
        changeTexture();
    }, [poster_1_url, textureFront])

    return (
        <>
            <mesh
                scale={props.scale}
                position={props.position}
                rotation={props.rotation}
                visible={props.visible} 
                onClick={() => {useStore.setState({ popup: 1 })}}
                onPointerOver={() => (setHover(true))}          
                onPointerOut={() => (setHover(false))} 
            >      
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial map={textureFront.current} transparent={true} needsUpdate={true} alphaTest={0.2} />
            </mesh>
        </>
    )
}