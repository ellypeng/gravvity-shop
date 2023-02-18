import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls, button } from 'leva'

import useStore from '../helpers/store';

export function Shoes8(props) {

  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()
  const models_configs = useStore((s) => s.models_configs)

  const { scene } = useLoader(GLTFLoader, models_configs.model_12.url_model_12)

  return (
    <primitive
      {...props}
      object={scene}
      rotation={props.rotation}
      position={props.position}
      scale={props.scale}
      visible={props.visible}
      onClick={() => { useStore.setState({ popMyCart3D: 12, popupModelIndex: 12 }) }}
      onPointerOver={() => (setHover(true))}
      onPointerOut={() => (setHover(false))}
    >
    </primitive>
  )
}