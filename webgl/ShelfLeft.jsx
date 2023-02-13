import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls, button } from 'leva'

import useStore from '../helpers/store';

export function ShelfLeft(props) {

  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()
  
  const model_5_url = 'assets/models/shoes/spiderman.glb'
  const { scene } = useLoader(GLTFLoader, model_5_url)

  return (
    <primitive 
      {...props}       
      object={scene} 
      position={props.position}
      rotation={props.rotation}
      scale={props.scale} 
      visible={props.visible}
      onClick={() => { useStore.setState({ popupModel: 1 }) }}
      onPointerOver={() => (setHover(true))}
      onPointerOut={() => (setHover(false))} 
    >
    </primitive>
  )
}