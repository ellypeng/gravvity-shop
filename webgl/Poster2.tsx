import React, { useEffect, useState, useRef } from 'react'
import { useCursor} from '@react-three/drei'
import { TextureLoader } from 'three'
import useStore from '../helpers/store';

export function Poster2(props:any) {

    let textureFront:any = useRef()
    const [hovered, setHover] = useState(false)
    useCursor(hovered)
    
    const poster_2_url: string = useStore((s) => s.poster_2_url)
    // console.log('poster_2_url = ', poster_2_url)

    useEffect(() => {
        const changeTexture = () => {
            if (poster_2_url === '') {
                textureFront.current = new TextureLoader().load('assets/textures/NFT_wall_poster_2.png')
            } else {
                textureFront.current = new TextureLoader().load(poster_2_url)
            }
        } 
        changeTexture();
    }, [poster_2_url])
    
    

    return (
        <>
            <mesh
                scale={props.scale}
                position={props.position}
                rotation={props.rotation}
                visible={props.visible} 
                onClick={() => { useStore.setState({ popMyCart: 2, popupIndex: 2 })}}
                onPointerOver={() => (setHover(true))}          
                onPointerOut={() => (setHover(false))} 
            >      
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial map={textureFront.current} transparent={true} needsUpdate={true} alphaTest={0.2} />
            </mesh>
        </>
    )
}