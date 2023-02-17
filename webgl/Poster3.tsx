import { useCursor} from '@react-three/drei'

import React, { useEffect, useState, useRef } from 'react'
import { TextureLoader } from 'three'
import useStore from '../helpers/store';

export function Poster3(props:any) {

    let textureFront:any = useRef()
    const [hovered, setHover] = useState(false)
    useCursor(hovered)

    const poster_3_url: string = useStore((s) => s.poster_3_url)
    // console.log('poster_3_url = ', poster_3_url)

    useEffect(() => {
        const changeTexture = () => {
            if (poster_3_url === '') {
                textureFront.current = new TextureLoader().load('assets/textures/NFT_wall_poster_3.png')
            } else {
                textureFront.current = new TextureLoader().load(poster_3_url)
            }
        } 
        changeTexture();
    }, [poster_3_url])

    
    

    return (
        <>
            <mesh
                scale={props.scale}
                position={props.position}
                rotation={props.rotation}
                visible={props.visible} 
                onClick={() => {useStore.setState({ popup: 3 })}}
                onPointerOver={() => (setHover(true))}          
                onPointerOut={() => (setHover(false))} 
            >      
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial map={textureFront.current} transparent={true} needsUpdate={true} alphaTest={0.2} />
            </mesh>
        </>
    )
}