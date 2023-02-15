import * as THREE from 'three'
import React, { useEffect, useRef, useState, useLayoutEffect, use } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshBVH, acceleratedRaycast } from 'three-mesh-bvh';

import { useAnimations, OrbitControls } from "@react-three/drei"
import useStore from '../helpers/store'
import usePlayerControls from '../hooks/usePlayerControls'
import gsap from 'gsap'
import { Clock, Raycaster } from 'three'

export default function Avatar(props: any) {

  //we load the model that comes from "Ready Player Me"
  const gltf: any = useLoader(GLTFLoader, props.urlPlayer)
  //we load the model with the animations compatible with the "Ready Player Me" model
  const gltf1: any = useLoader(GLTFLoader, '/assets/models/avatars/animationModel.glb')

  //We enter where the animations of the model are
  const animations = gltf1.animations
  //you can see the animations in console
  // console.log(animations)

  const uiStep: number = useStore((s) => s.uiStep)
  const avatarRef: any = useRef()
  const modelRef: any = useRef()
  const controlRef: any = useRef()
  const { actions }: any = useAnimations(animations, gltf.scene)
  const [actionName, setAction] = useState({ action: '01 idle', during: false })
  const { forward, backward, left, right } = usePlayerControls()
  const { camera, scene } = useThree()
  const startWorld: boolean = useStore((s) => s.startWorld)
  let playerPosition: any = useStore((s) => s.playerPosition)
  const joystickDistance: number = useStore((s) => s.joystickDistance)
  const joystickAngle: number = useStore((s) => s.joystickAngle)
  const emojiAnimation: string = useStore((s) => s.emojiAnimation)
  const playerCameraRotation: any = useStore((s) => s.playerCameraRotation)
  const raycaster = useThree(state => state.raycaster)
  const sceneMeshes: any[] = [];
  const clock = new THREE.Clock();
  const mixer = new THREE.AnimationMixer(gltf.scene);
  let dir = new THREE.Vector3();
  let intersects = [];


  useEffect(() => {
    useStore.setState({ playerCameraRotation: playerCameraRotation })
  }, [playerCameraRotation])

  useEffect(() => {
    if (props.avatarSetting) {
      controlRef.current.minPolarAngle = 0
    } else {
      controlRef.current.minPolarAngle = Math.PI / 2
    }
  }, [props.avatarSetting])

  useEffect(() => {
    // const v = new THREE.Vector3(-6, 1.5, 2.5)
    const v0 = new THREE.Vector3(-7, 1.7, 17)
    controlRef.current.target = v0
    camera.position.set(playerCameraRotation[0], playerCameraRotation[1], playerCameraRotation[2])
    // camera.position.set(-9.2, 1.7, 21)
    camera.lookAt(v0)
  }, [])


  useEffect(() => {

    // let found = animations.find((element) => element.name === emojiAnimation);
    let found = animations.findIndex((x: { name: string; }) => x.name === emojiAnimation)
    console.log('estramos en el useEffect', found)

    if (emojiAnimation !== "01 idle") {
      var action = mixer.clipAction(animations[found]);
      action.fadeIn(0.5);
      action.play();
      const animate = () => {
        requestAnimationFrame(animate)
        var delta = clock.getDelta();
        mixer.update(delta);
      }
      animate();

      return () => {
        // action.stop()
        action.fadeOut(0.5)

      }
    }

    // console.log(animations)
  }, [emojiAnimation])



  useEffect(() => {
    if (actionName.action === "01 idle") {
      var action = mixer.clipAction(animations[5]);
      action.stop()
      action.play();
      // action.fadeIn(0.5);
      const animate = () => {
        requestAnimationFrame(animate)
        var delta = clock.getDelta();
        mixer.update(delta);
      }
      animate();


      return () => {
        // action.fadeOut(0.5)
        action.stop()
      }
    }
  }, [actionName, props.urlPlayer])

  useEffect(() => {
    const l = joystickDistance * Math.cos(Math.PI * joystickAngle / 180) * 1.8
    // if (emojiAnimation !== "01 idle")
    //   return
    let newActionName: string
    controlRef.current.autoRotate = true


    if (left)
    controlRef.current.autoRotateSpeed = -90
  else if (right)
    controlRef.current.autoRotateSpeed = 90
  else if (joystickDistance && 90 !== joystickAngle && joystickAngle !== 270)
    controlRef.current.autoRotateSpeed = l
  else
    controlRef.current.autoRotateSpeed = 0

    if (forward || (joystickDistance > 0 && joystickAngle < 180)) {
      newActionName = "02 walk"
      var action = mixer.clipAction(animations[9]);
      action.play();
      const animate = () => {
        requestAnimationFrame(animate)
        var delta = clock.getDelta();
        mixer.update(delta);
      }
      animate();

      if (actionName.action === "01 idle") {
        return () => {
          action.stop()
          action.fadeOut(0.5)
        }
      }

    }
    else if (backward || (joystickDistance > 0 && joystickAngle > 180)) {
      newActionName = "04 walk back"
      var action = mixer.clipAction(animations[10]);
      action.play();
      const animate = () => {
        requestAnimationFrame(animate)
        var delta = clock.getDelta();
        mixer.update(delta);
      }
      animate();

      if (actionName.action === "01 idle") {
        return () => {
          action.stop()
          action.fadeOut(0.5)
        }
      }

      // return () => {
      //   action.stop()
      //   action.fadeOut(0.5)
      // }
    }
    else if (!forward && !backward && (left || right || joystickAngle === 0 || joystickAngle === 180)) {
      newActionName = "05_turn"
      var action = mixer.clipAction(animations[8]);
      action.stop().play();
      const animate = () => {
        requestAnimationFrame(animate)
        var delta = clock.getDelta();
        mixer.update(delta);
      }
      animate();

      if (actionName.action === "01 idle") {
        return () => {
          action.stop()
          action.fadeOut(0.5)
        }
      }


      return () => {
        // action.stop()
        // action.fadeOut(0.5)
      }
    }
    else {
      newActionName = "01 idle"
    }
    setAction({ action: newActionName, during: true })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forward, backward, left, right, joystickDistance, joystickAngle, props.urlPlayer, props.avatarSetting, playerCameraRotation])

  let originalIntersectsPoint = new THREE.Vector3(0, 0, 0)


  useFrame((delta) => {
    if (startWorld && !props.avatarSetting) {
      const v1 = new THREE.Vector3(playerPosition.x, playerPosition.y - 0.78, playerPosition.z)
      avatarRef.current.position.lerp(v1, 0.7)
      gsap.to(controlRef.current.target, 0.5, { x: v1.x, y: uiStep === 2 ? v1.y + 1.4 : v1.y + 2.7, z: v1.z })
      if (forward || backward || left || right || joystickDistance > 0) {
        if (emojiAnimation !== "01 idle") return
        avatarRef.current.rotation.copy(camera.rotation)
      }
    } else if (props.avatarSetting) {
      if (playerPosition === undefined) {
        playerPosition = new THREE.Vector3(-7, 1.7, 17)
      }
      const v1 = new THREE.Vector3(playerPosition.x, playerPosition.y - 0.78, playerPosition.z)
      avatarRef.current.position.lerp(v1, 0.7)
      gsap.to(controlRef.current.target, 0.5, { x: v1.x, y: uiStep === 2 ? v1.y + 1.4 : v1.y + 2.7, z: v1.z })
    }
  })

  let plane1 = new THREE.PlaneGeometry(20, 10);
  let geometry1 = new THREE.BufferGeometry();
  geometry1.copy(plane1);

  const wall1 = new THREE.Mesh(
    // new THREE.PlaneGeometry(20, 10),
    geometry1,
    // new THREE.MeshBasicMaterial({ color: 0xFF3200, reflectivity: 0 })
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall1.position.set(-10.2, 3, 1.);
  wall1.rotateY(Math.PI * 1.19 / 2);
  scene.add(wall1);
  sceneMeshes.push(wall1);

  let plane21 = new THREE.PlaneGeometry(1.5, 20);
  let geometry21 = new THREE.BufferGeometry();
  geometry21.copy(plane21);

  // lobby
  const wall21 = new THREE.Mesh(
    // new THREE.PlaneGeometry(1.5, 20),
    geometry21,
    // new THREE.MeshBasicMaterial({color: 0xffffff })
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall21.position.set(-6.8, -2, 11);
  wall21.rotateY(Math.PI * 0.7 / 11 - Math.PI / 4 + Math.PI);
  scene.add(wall21);
  sceneMeshes.push(wall21);


  // lobby
  let plane2 = new THREE.PlaneGeometry(1.5, 20);
  let geometry2 = new THREE.BufferGeometry();
  geometry2.copy(plane2);
  const wall2 = new THREE.Mesh(
    // new THREE.PlaneGeometry(1.5, 20),
    geometry2,
    // new THREE.MeshBasicMaterial({color: 0xffffff })
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall2.position.set(-6.5, -2, 12);
  wall2.rotateY(Math.PI * 0.7 / 11 + Math.PI / 4);
  scene.add(wall2);
  sceneMeshes.push(wall2);

  let plane3 = new THREE.PlaneGeometry(3.2, 20);
  let geometry3 = new THREE.BufferGeometry();
  geometry3.copy(plane3);
  const wall3 = new THREE.Mesh(
    // new THREE.PlaneGeometry(3.2, 20),
    geometry3,
    // new THREE.MeshBasicMaterial({color: 0xffffff })
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall3.position.set(-8.3, -2, 11.8);
  wall3.rotateY(Math.PI * 1 / 11 - Math.PI / 4);
  scene.add(wall3);
  sceneMeshes.push(wall3);

  // Lobby poster 1 wall
  let plane4 = new THREE.PlaneGeometry(14, 24);
  let geometry4 = new THREE.BufferGeometry();
  geometry4.copy(plane4);
  const wall4 = new THREE.Mesh(
    // new THREE.PlaneGeometry(14, 24),
    geometry4,
    // new THREE.MeshBasicMaterial({color: 0x808080})
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall4.position.set(-14.56, -2, 18.5);
  wall4.rotateY(Math.PI * 1 / 11 + Math.PI / 4);
  scene.add(wall4);
  sceneMeshes.push(wall4);

  let plane5 = new THREE.PlaneGeometry(14, 20);
  let geometry5 = new THREE.BufferGeometry();
  geometry5.copy(plane5);
  const wall5 = new THREE.Mesh(
    // new THREE.PlaneGeometry(14, 20),
    geometry5,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall5.position.set(-11.3, -2, 23.5);
  wall5.rotateY(Math.PI * 1 / 11 - Math.PI / 4 + Math.PI);
  scene.add(wall5);
  sceneMeshes.push(wall5);

  // Lobby poster 2 wall
  let plane6 = new THREE.PlaneGeometry(18, 20);
  let geometry6 = new THREE.BufferGeometry();
  geometry6.copy(plane6);
  const wall6 = new THREE.Mesh(
    // new THREE.PlaneGeometry(18, 20),
    geometry6,
    // new THREE.MeshBasicMaterial({color: 0x808080})
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  // wall6.position.set(-5.3, -2, 23);
  wall6.position.set(-2.96, -2, 23);
  wall6.rotateY(Math.PI * 1 / 11 + Math.PI / 4 + Math.PI);
  scene.add(wall6);
  sceneMeshes.push(wall6);

  let plane7 = new THREE.PlaneGeometry(3.2, 20);
  let geometry7 = new THREE.BufferGeometry();
  geometry7.copy(plane7);
  const wall7 = new THREE.Mesh(
    // new THREE.PlaneGeometry(3.2, 20),
    geometry7,
    // new THREE.MeshBasicMaterial({reflectivity: 0, color: 0xffffff})
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall7.position.set(-1.7, -2, 15.2);
  wall7.rotateY(Math.PI * 1 / 11 - Math.PI / 4);
  scene.add(wall7);
  sceneMeshes.push(wall7);

  let plane8 = new THREE.PlaneGeometry(1.5, 20);
  let geometry8 = new THREE.BufferGeometry();
  geometry8.copy(plane8);
  const wall8 = new THREE.Mesh(
    // new THREE.PlaneGeometry(1.5, 20),
    geometry8,
    // new THREE.MeshBasicMaterial({opacity: 0, transparent: true, reflectivity: 0,color: 0xffffff})
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall8.position.set(-2.8, -2, 13.8);
  wall8.rotateY(Math.PI * 0.7 / 11 + Math.PI / 4 + Math.PI);
  scene.add(wall8);
  sceneMeshes.push(wall8);

  {/* Hall */ }
  let plane9 = new THREE.PlaneGeometry(20, 20);
  let geometry9 = new THREE.BufferGeometry();
  geometry9.copy(plane9);
  const wall9 = new THREE.Mesh(
    // new THREE.PlaneGeometry(20, 20),
    geometry9,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall9.position.set(7.5, -2, 13.0);
  wall9.rotateY(Math.PI * 0.1 / 11 + Math.PI);
  scene.add(wall9);
  sceneMeshes.push(wall9);

  let plane10 = new THREE.PlaneGeometry(18, 20);
  let geometry10 = new THREE.BufferGeometry();
  geometry10.copy(plane10);
  const wall10 = new THREE.Mesh(
    // new THREE.PlaneGeometry(18, 20),
    geometry10,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
    // new THREE.MeshBasicMaterial({ color: "red" })
  );
  wall10.position.set(-2.5, -2, -12.7);
  wall10.rotateY(Math.PI * -0.05 / 11);
  scene.add(wall10);
  sceneMeshes.push(wall10);

  let plane11 = new THREE.PlaneGeometry(16, 20);
  let geometry11 = new THREE.BufferGeometry();
  geometry11.copy(plane11);
  const wall11 = new THREE.Mesh(
    // new THREE.PlaneGeometry(16, 20),
    geometry11,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall11.position.set(15.5, -2, -11.4);
  wall11.rotateY(Math.PI * -0.05 / 11);
  scene.add(wall11);
  sceneMeshes.push(wall11);

  let plane12 = new THREE.PlaneGeometry(20, 20);
  let geometry12 = new THREE.BufferGeometry();
  geometry12.copy(plane12);
  const wall12 = new THREE.Mesh(
    // new THREE.PlaneGeometry(20, 20),
    geometry12,
    // new THREE.MeshBasicMaterial({ color: "gray" })
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall12.position.set(16.26, -2, -3.8);
  wall12.rotateY(Math.PI * 0.05 / 11 + Math.PI / 2 + Math.PI);
  scene.add(wall12);
  sceneMeshes.push(wall12);

  let plane13 = new THREE.PlaneGeometry(8, 20);
  let geometry13 = new THREE.BufferGeometry();
  geometry13.copy(plane13);
  const wall13 = new THREE.Mesh(
    // new THREE.PlaneGeometry(8, 20),
    geometry13,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall13.position.set(13.5, -2, 7.3);
  wall13.rotateY(Math.PI * 0.05 / 11 + Math.PI / 2 + Math.PI);
  scene.add(wall13);
  sceneMeshes.push(wall13);

  let plane14 = new THREE.PlaneGeometry(20, 20);
  let geometry14 = new THREE.BufferGeometry();
  geometry14.copy(plane14);
  const wall14 = new THREE.Mesh(
    // new THREE.PlaneGeometry(20, 20),
    geometry14,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall14.position.set(17.8, -2, 8.4);
  wall14.rotateY(Math.PI * -0.5 / 11 + Math.PI / 4 + Math.PI);
  scene.add(wall14);
  sceneMeshes.push(wall14);

  let plane15 = new THREE.PlaneGeometry(3.4, 20);
  let geometry15 = new THREE.BufferGeometry();
  geometry15.copy(plane15);
  const wall15 = new THREE.Mesh(
    // new THREE.PlaneGeometry(3.4, 20),
    geometry15,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall15.position.set(14.8, -2, 2.5);
  wall15.rotateY(Math.PI * -0.5 / 11 + Math.PI / 4 + Math.PI);
  scene.add(wall15);
  sceneMeshes.push(wall15);

  let plane16 = new THREE.PlaneGeometry(6, 20);
  let geometry16 = new THREE.BufferGeometry();
  geometry16.copy(plane16);
  const wall16 = new THREE.Mesh(
    // new THREE.PlaneGeometry(6, 20),
    geometry16,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall16.position.set(14.8, -2, -9.5);
  wall16.rotateY(Math.PI * -0.5 / 11 - Math.PI / 4);
  scene.add(wall16);
  sceneMeshes.push(wall16);

  let plane17 = new THREE.PlaneGeometry(1.5, 20);
  let geometry17 = new THREE.BufferGeometry();
  geometry17.copy(plane17);
  const wall17 = new THREE.Mesh(
    // new THREE.PlaneGeometry(1.5, 20),
    geometry17,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall17.position.set(7., -2, -11.8);
  wall17.rotateY(Math.PI * -0.5 / 11 - Math.PI / 4 + Math.PI / 4);
  scene.add(wall17);
  sceneMeshes.push(wall17);

  let plane18 = new THREE.PlaneGeometry(8, 20);
  let geometry18 = new THREE.BufferGeometry();
  geometry18.copy(plane18);
  const wall18 = new THREE.Mesh(
    // new THREE.PlaneGeometry(8, 20),
    geometry18,
    new THREE.MeshBasicMaterial({ opacity: 0, transparent: true })
  );
  wall18.position.set(-10., -2, -11.8);
  wall18.rotateY(Math.PI * -0.5 / 11 + Math.PI / 4);
  scene.add(wall18);
  sceneMeshes.push(wall18);

  return (
    <>
      <OrbitControls
        enableDamping={false}
        ref={controlRef}
        autoRotate
        minDistance={2.5}
        maxDistance={3.5}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
      <mesh ref={avatarRef} visible={props.visible}  >
        <primitive object={gltf.scene} scale={props.scale} position={[0, 0.3, 0]} ref={modelRef} rotation={props.rotation} />
      </mesh>
    </>
  )
}
