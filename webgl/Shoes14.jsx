import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls, button } from 'leva'

import useStore from '../helpers/store';

export function Shoes14(props) {

  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()

  const model_14_url = 'assets/models/clothes/spider.glb'

  const { scene } = useLoader(GLTFLoader, model_14_url)
  // console.log('scene = ', scene)

  return (
    <primitive 
      {...props}       
      object={scene} 
      rotation={props.rotation}
      position={props.position} 
      scale={props.scale} 
      visible={props.visible}
    >
    </primitive>
  )
}