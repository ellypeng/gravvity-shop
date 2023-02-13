import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls, button, Leva } from 'leva'

import useStore from '../helpers/store';

export function Shoes1(props) {

  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()
  
  const model_1_url = 'assets/models/comic/dragonball_1.glb'

  const { scene } = useLoader(GLTFLoader, model_1_url)
  const copiedScene = useMemo(() => scene.clone(), [scene])
  const copiedScene1 = useMemo(() => scene.clone(), [scene])

  return (
    <primitive 
      {...props}       
      object={scene} 
      position={props.position} 
      rotation={props.rotation}
      scale={props.scale} 
      visible={props.visible}
    >
    </primitive>
        
  )
}