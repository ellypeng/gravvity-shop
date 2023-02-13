import { useCursor} from '@react-three/drei'

import React, { useEffect, useState, useRef } from 'react'
import { TextureLoader } from 'three'
import useStore from '../helpers/store';

export function Poster4(props:any) {

    let textureFront:any = useRef()
    const [hovered, setHover] = useState(false)
    useCursor(hovered)

    const poster_4_url: string = useStore((s) => s.poster_4_url)
    // console.log('poster_4_url = ', poster_4_url)

    useEffect(() => {
        const changeTexture = () => {
            if (poster_4_url === '') {
                textureFront.current = new TextureLoader().load('assets/textures/Placement2.jpg')
            } else {
                textureFront.current = new TextureLoader().load(poster_4_url)
            }
        } 
        changeTexture();
    }, [poster_4_url])
    
    

    return (
        <>
            <mesh
                scale={props.scale}
                position={props.position}
                rotation={props.rotation}
                visible={props.visible} 
                // onClick={() => {useStore.setState({ popup: 4 })}}
                // onPointerOver={() => (setHover(true))}          
                // onPointerOut={() => (setHover(false))} 
            >      
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial map={textureFront.current} transparent={true} needsUpdate={true} alphaTest={0.2} />
            </mesh>
        </>
    )
}