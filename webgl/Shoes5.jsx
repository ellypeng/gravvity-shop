import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRouter } from 'next/navigation'

import useStore from '../helpers/store';

export function Shoes5(props) {
  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()
  const router = useRouter()
  
  const models_configs = useStore((s) => s.models_configs)

  const { scene } = useLoader(GLTFLoader, models_configs.model_9.url_model_9)
  
  return (
    <primitive 
      {...props}       
      object={scene} 
      position={props.position}
      rotation={props.rotation}
      scale={props.scale} 
      visible={props.visible}
      onClick={() => { useStore.setState({ popupModel: 9 }) }}
      onPointerOver={() => (setHover(true))}          
      onPointerOut={() => (setHover(false))} 
    >
      {/* <Html position={[1, 2, 1]} style={{ display: 'block' }} distanceFactor={9} zIndexRange={[1, 0]} occlude>
        <div style={{ transform: 'translate3d(-50%, -117%, 0px)' }}>
          <div
            style={{
              padding: '8px',
              color: 'white',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'flex-start',
              cursor: 'pointer'
            }}

          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13" cy="13" r="13" fill="#00DCC3"/>
                <path d="M7.75 13.5H17.25" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 18.25V8.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{margin:'8px 12px 8px 0px', paddingLeft:'6px', width: '140px', fontSize:'16px', fontWeight:'600', lineHeight:'20px'}}>
              Freedom Gundam
            </div> 
          </div>
        </div>
      </Html> */}
    </primitive>
  )
}