import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls, button } from 'leva'

import useStore from '../helpers/store';

export function Shoes7(props) {

  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()
  
  const model_6_url = 'assets/models/shoes/transformer.glb'

  // const { scene } = useLoader(GLTFLoader, model_6_url)
  // const copiedScene = useMemo(() => scene.clone(), [scene])

  const models_configs = useStore((s) => s.models_configs)

  const { scene } = useLoader(GLTFLoader, models_configs.model_11.url_model_11)

  const copiedScene = useMemo(() => scene.clone(), [scene])


  return (
    <primitive 
      {...props}       
      object={copiedScene} 
      position={props.position}
      rotation={props.rotation}
      scale={props.scale} 
      visible={props.visible}
      onClick={() => { useStore.setState({ popMyCart3D: 11, popupModelIndex: 11 }) }}
      onPointerOver={() => (setHover(true))}
      onPointerOut={() => (setHover(false))} 
    >
    </primitive>
  )
}