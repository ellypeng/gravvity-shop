import * as THREE from "three";
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useCursor, PivotControls, Html } from "@react-three/drei"
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls, button } from 'leva'

import useStore from '../helpers/store';

export function Shoes4(props) {

  const [hovered, setHover] = useState(false)
  useCursor(hovered)
  const ref = useRef()
  
  const model_4_url = useStore((s) => s.model_4_url)

  const { scene } = useLoader(GLTFLoader, model_4_url)
  const copiedScene = useMemo(() => scene.clone(), [scene])
  const copiedScene1 = useMemo(() => scene.clone(), [scene])

  // console.log('model_4_url = ', model_4_url)
  // console.log('model_4_url = ', model_4_url == 'assets/models/shoes/shoes4.glb')

  // copiedScene1.traverse(function(object) {
  //   if (!object.isMesh) return;
  //   object.material.wireframe = true;
  //   if (object.material)
  //     object.material.color.setHex(0x218cca)
  //   object.material.needsUpdate = true; // not sure if this is needed?
  // });

  const { position_y, scale, rotation } = useControls({
    position_y: 2,
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    save: button((get) => updatePosition(position_y, rotation, scale)),
  })

  const updatePosition = (position_y, rotation, scale) => {
    // console.log(position_y.toFixed(2), rotation, scale)
  }
  const onSetAttach = (e) => {
    const levaDom = document.getElementById('leva__root')
    levaDom.style.display = "block";

    useStore.setState({ popup: 0 })
  }

  useEffect(() => {
    const levaDom = document.getElementById('leva__root')
    levaDom.style.display = "none";
  }, [])

  return (
    <>
      {
        model_4_url === 'assets/models/shoes/shoes4.glb' ? 
        <>
          <primitive 
            {...props}       
            object={copiedScene1} 
            position={props.position} 
            scale={0.7} 
            visible={props.visible}
          >
            <Html position={[0, 0.6, 0]} style={{ display: 'block' }} distanceFactor={9} zIndexRange={[1, 0]} occlude>
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
                  onClick={() => {useStore.setState({ popupModel: 4 })}}
                  onPointerOver={() => (setHover(true))}          
                  onPointerOut={() => (setHover(false))} 
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
                    ADD PRODUCT
                  </div> 
                </div>
              </div>
            </Html>
          </primitive>
        </>
        :
        <>
          <primitive 
            {...props}       
            object={scene} 
            // position={[props.position.x, position_y, props.position.z]} 
            position={props.position}
            rotation={rotation}
            scale={scale} 
            visible={props.visible}
          >
            <Html position={[0, 0.6, 0]} style={{ display: 'block' }} distanceFactor={9} zIndexRange={[1, 0]}>
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
                  onClick={() => {useStore.setState({ popupModel: 4 })}}
                  onPointerOver={() => (setHover(true))}          
                  onPointerOut={() => (setHover(false))} 
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
                    ADD PRODUCT
                  </div> 
                </div>
                <div
                  style={{
                    padding: '8px',
                    color: 'white',
                    borderRadius: '12px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    cursor: 'pointer'
                  }}
                  onClick={() => {onSetAttach()}}
                  onPointerOver={() => (setHover(true))}          
                  onPointerOut={() => (setHover(false))} 
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
                    EDIT POSITION
                  </div> 
                </div>
              </div>
            </Html>
          </primitive>
        </>
      }
    </>
  )
}