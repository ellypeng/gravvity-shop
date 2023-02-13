import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls, button } from 'leva'

import useStore from '../helpers/store';

export function Shoes9(props) {

  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()

  const model_9_url = 'assets/models/clothes/men.glb'


  const models_configs = useStore((s) => s.models_configs)

  const { scene } = useLoader(GLTFLoader, models_configs.model_13.url_model_13)
  // console.log('scene = ', scene)

  return (
    <primitive 
      {...props}       
      object={scene} 
      rotation={props.rotation}
      position={props.position} 
      scale={props.scale} 
      visible={props.visible}
      onClick={() => { useStore.setState({ popupModel: 13 }) }}
      onPointerOver={() => (setHover(true))}
      onPointerOut={() => (setHover(false))} 
    >
    </primitive>
  )
}