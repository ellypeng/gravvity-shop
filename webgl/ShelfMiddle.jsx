import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls, button } from 'leva'

import useStore from '../helpers/store';

export function ShelfMiddle(props) {

  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()
  
  // const model_5_url = 'assets/models/shoes/darth_vader.glb'

  const models_configs = useStore((s) => s.models_configs)

  const { scene } = useLoader(GLTFLoader, models_configs.model_8.url_model_8)

  return (
    <primitive 
      {...props}       
      object={scene} 
      position={props.position}
      rotation={props.rotation}
      scale={props.scale} 
      visible={props.visible}
      onClick={() => { useStore.setState({ popupModel: 8 }) }}
      onPointerOver={() => (setHover(true))}
      onPointerOut={() => (setHover(false))} 
    >
    </primitive>
  )
}