import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, Html, useProgress, PivotControls, Stats } from "@react-three/drei";
import { Physics, Debug } from "@react-three/cannon";

import useStore from '../helpers/store';
import InputNameUI from "../webgl-components/InputNameUI";
// import FirstUI from '../webgl-components/FirstUI';
import ProfileUI from '../webgl-components/ProfileUI';
import PlayerIntroduce from '../webgl-components/PlayerIntroduce';
import Login from './login'

import Room from "../webgl/Room"
import AvatarPlayer from "../webgl/AvatarPlayer";
import PlayerDesktop from "../webgl/PlayerDesktop";
import { Poster1 } from "../webgl/Poster1";
import { Poster2 } from "../webgl/Poster2";
import { Poster3 } from "../webgl/Poster3";
import { Poster4 } from "../webgl/Poster4";
import { Poster5 } from "../webgl/Poster5";
import { Poster6 } from "../webgl/Poster6";
import { Poster7 } from "../webgl/Poster7";
import { LogoMain } from '../webgl/LogoMain';
import { Mirror } from '../webgl/Mirror'
import { Shoes1 } from '../webgl/Shoes1'
import { Shoes2 } from '../webgl/Shoes2'
import { Shoes3 } from '../webgl/Shoes3'
import { Shoes4 } from '../webgl/Shoes4'
import { Shoes5 } from '../webgl/Shoes5'
import { Shoes6 } from '../webgl/Shoes6'
import { Shoes7 } from '../webgl/Shoes7'
import { Shoes8 } from '../webgl/Shoes8'
import { Shoes9 } from '../webgl/Shoes9'
import { Shoes10 } from '../webgl/Shoes10'
import { Shoes11 } from '../webgl/Shoes11'
import { Shoes12 } from '../webgl/Shoes12'
import { Shoes13 } from '../webgl/Shoes13'
import { Shoes14 } from '../webgl/Shoes14'
import { Shoes15 } from '../webgl/Shoes15'
import { Shoes16 } from '../webgl/Shoes16'
import { Shoes17 } from '../webgl/Shoes17'
import { Shoes18 } from '../webgl/Shoes18'
import { ShelfLeft } from '../webgl/ShelfLeft'
import { ShelfMiddle } from '../webgl/ShelfMiddle'

import { VideoText } from '../webgl/VideoText'

import PopupPoster from '../webgl-components/PopupPoster'
import PopupLogo from '../webgl-components/PopupLogo'
import PopupVideo from '../webgl-components/PopupVideo'
import PopupModel from '../webgl-components/PopupModel';

import VirtualWorldUI from "../webgl-components/VirtualWorldUI";
import ShoppingCart from "../webgl-components/ShoppingCart";
import { useCurrentUser } from '../lib/user';
import MyCart from '../webgl-components/MyCart'
import MyCart3D from '../webgl-components/MyCart3D'
import Thanks from '../webgl-components/Thanks'


function loadStorage() {
  if (localStorage.getItem("hairStyle") !== null) {
    const hairStyle = Number(localStorage.getItem("hairStyle"));
    const hairColor = Number(localStorage.getItem("hairColor"));
    const glasses = Number(localStorage.getItem("glasses"));
    const beardStyle = Number(localStorage.getItem("beardStyle"));
    const beardColor = Number(localStorage.getItem("beardColor"));
    const skinColor = Number(localStorage.getItem("skinColor"));
    const topStyle = Number(localStorage.getItem("topStyle"));
    const topColor = Number(localStorage.getItem("topColor"));
    const trousersStyle = Number(localStorage.getItem("trousersStyle"));
    const trousersColor = Number(localStorage.getItem("trousersColor"));
    const accessoriesStyle = Number(localStorage.getItem("accessoriesStyle"));
    const accessoriesColor = Number(localStorage.getItem("accessoriesColor"));
    const shoesStyle = Number(localStorage.getItem("shoesStyle"));
    const shoesColor = Number(localStorage.getItem("shoesColor"));

    useStore.setState({
      hairStyle: hairStyle,
      hairColor: hairColor,
      glasses: glasses,
      beardStyle: beardStyle,
      beardColor: beardColor,
      skinColor: skinColor,
      topStyle: topStyle,
      topColor: topColor,
      trousersStyle: trousersStyle,
      trousersColor: trousersColor,
      accessoriesStyle: accessoriesStyle,
      accessoriesColor: accessoriesColor,
      shoesStyle: shoesStyle,
      shoesColor: shoesColor,
      uiStep: 3,
    });
  } else if (localStorage.getItem("avatarName") !== null && localStorage.getItem("email") !== null) {
    const name = String(localStorage.getItem("avatarName"));
    const email = String(localStorage.getItem("email"));
    useStore.setState({ name: name, email: email, uiStep: 2 });
  }
}

const Loading = (props: any) => {
  const [show, setShow] = useState("block");
  const [percent, setPercent] = useState(0);
  let intervalId: any;

  const increasePercent = () => {
    const delta = Math.floor(Math.random() * 5);
    setPercent((percent) => (percent + delta > 100 ? 100 : percent + delta));
  };
  useEffect(() => {
    intervalId = setInterval(increasePercent, 1500);
  }, []);

  useEffect(() => {
    // console.log(percent);
    if (percent == 100) {
      clearInterval(intervalId);
      setShow("none");
    }
  }, [percent]);
  return (
    <div className="loader" style={{ display: show }}>
      <div className="loader_spinner">
        <div className="loader_ring1" />
        <div className="loader_ring2" />
        <div className="loader_ring3" />
      </div>
      <Image className="logo" src={'/assets/img/Logo.png'} width={100} height={100} alt={'logo'} />
      <Image className="brand" src={'/assets/img/brand.png'} width={160} height={100} alt={'brand'} />
      <div className="enter_text">Enter the store</div>
      <div className="loader_text">{percent} %</div>
    </div>
  );
};

export default function Home() {

  //the default model of ready player me
  // const [urlModel, setUrlModel] = useState('https://models.readyplayer.me/63c18a08b7a4f54ed11e2d67.glb')
  const [urlModel, setUrlModel] = useState('https://api.readyplayer.me/v1/avatars/6317749e666e9239d9d464d9.glb')
  const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
  const router = useRouter()
  const uiStep: number = useStore((s) => s.uiStep);
  const goto: string = useStore((s) => s.goto);
  const test: any = useStore((s) => s.testPoster);
  const rotacionTes: any = useStore((s) => s.testRotacion);
  const models_configs: any = useStore((s) => s.models_configs)

  useEffect(() => {
    loadStorage();
  }, []);

  useEffect(() => {
    if (isValidating) return;
    if (!user) router.replace('/signup');
  }, [user, router, isValidating]);

  

  const handleDataFromChild = (data: any) => {
    setUrlModel(data)
  };

  useEffect(() => {
  }, [uiStep])

  useEffect(() => {
  }, [goto])

  return (
    <main className="w-screen h-screen">
      <Head>
        <title>Virtual Shopping Mall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="canvas-container" className="w-screen h-screen">
        <Canvas frameloop="demand" performance={{ min: 0.5 }}>
          {/* <axesHelper args={[5]} /> */}
          <Environment near={1} far={10} resolution={256} preset="sunset" />
          <ambientLight intensity={0.4} color={"#ffffff"} />
          <pointLight intensity={0.05} decay={2} color="#ffffff" position={[-7.44, 9.43, 9.21]} rotation={[-Math.PI / 2, 0, 0]} />
          <pointLight intensity={0.05} decay={2} color="#ffffff" position={[-10.65, 9.43, -1.62]} rotation={[-Math.PI / 2, 0, 0]} />
          <pointLight intensity={0.05} decay={2} color="#ffffff" position={[-9.12, 9.43, -12.47]} rotation={[-Math.PI / 2, 0, 0]} />
          <pointLight intensity={0.05} decay={2} color="#ffffff" position={[13.48, 9.43, 4.1]} rotation={[-Math.PI / 2, 0, 0]} />
          <Suspense fallback={null}>
            <Physics gravity={[0, -65, 0]}>
              {/* <Debug color="green" scale={1.1}> */}
              <Room visible={uiStep === 3 ? true : false} />

              <PlayerDesktop />
              <AvatarPlayer
                urlPlayer={urlModel}
                position={[-4.5, -0.13, 11]}
                rotation={[0, uiStep === 4 ? 0 : Math.PI, 0]}
                scale={[1.3, 1.3, 1.3]}
                visible={uiStep === 3 ? true : false}
                avatarSetting={uiStep === 4 ? true : false} />

              {/* Lightning Poster */}
              <Poster1 position={[16.22, 4.0, -4.8]} rotation={[0, -Math.PI * 89.6 / 180, 0]} scale={[4.62, 7, 2]} visible={uiStep === 3 ? true : false} />
              <Poster2 position={[9.8, 4.03, -11.47]} rotation={[0, -Math.PI * 2 / 360, 0]} scale={[4.0, 6.79, 2]} visible={uiStep === 3 ? true : false} />
              {/* Wall */}
              <Poster3 position={[-0.96, 4.26, -12.67]} rotation={[0, -Math.PI * 2 / 360, 0]} scale={[4.3, 6.96, 2]} visible={uiStep === 3 ? true : false} />

              <Poster4 position={[-8.12, 4.26, -12.67]} rotation={[0, -Math.PI*0.1/360, 0]} scale={[4.3, 6.96, 2]} visible={uiStep === 3 ? true : false}/>
              {/* Video */}
              <Poster5 position={[-7.8, 3.94, 8.16]} rotation={[0, Math.PI * 106 / 180, 0]} scale={[3.3, 7.2, 2]} visible={uiStep === 3 ? true : false} />
              {/* Lobby Poster */}
              <Poster6 position={test} rotation={[0, -Math.PI * rotacionTes / 180, 0]} scale={[4.3, 6.96, 2]} visible={uiStep === 3 ? true : false} />
              <Poster7 position={[-13.26, 4.8, 16.28]} rotation={[0, Math.PI * 61.94 / 180, 0]} scale={[5.1, 7.6, 2.]} visible={uiStep === 3 ? true : false} />

              {/* Logo */}
              <LogoMain position={[2.14, 4.58, 13.14]} rotation={[0, Math.PI * 181.4 / 180, 0]} scale={[4, 4, 1]} visible={uiStep === 3 ? true : false} />
              <LogoMain position={[-4.9, 6.53, 13.5]} rotation={[0, -Math.PI * 2.15 / 14, 0]} scale={[2.1, 2.1, 1]} visible={uiStep === 3 ? true : false} />

              <Mirror position={[-4.3, 3, -12]} rotation={[0, Math.PI / 2, 0]} visible={uiStep === 3 ? true : false} />

              <Shoes1 position={models_configs.model_1.position_1} scale={models_configs.model_1.size_model_1} visible={uiStep === 3 ? true : false} />
              <Shoes2 position={models_configs.model_2.position_2} scale={models_configs.model_2.size_model_2} visible={uiStep === 3 ? true : false} />
              <Shoes15 position={models_configs.model_3.position_3} scale={models_configs.model_3.size_model_3} visible={uiStep === 3 ? true : false} />
              <Shoes16 position={models_configs.model_4.position_4} scale={models_configs.model_4.size_model_4} visible={uiStep === 3 ? true : false} />
              <Shoes17 position={models_configs.model_5.position_5} scale={models_configs.model_5.size_model_5} visible={uiStep === 3 ? true : false} />
              <Shoes18 position={models_configs.model_6.position_6} scale={models_configs.model_6.size_model_6} visible={uiStep === 3 ? true : false} />
              {/* <Shoes3 position={[-1.4, 2, -6.04]} visible={uiStep === 3 ? true : false}/>
              <Shoes4 position={[[-1.4, 2, -6.04]]} visible={uiStep === 3 ? true : false}/> */}

              <ShelfLeft position={models_configs.model_7.position_7} scale={models_configs.model_7.size_model_7}
                rotation={models_configs.model_7.rotation_7} visible={uiStep === 3 ? true : false} />
              
              <ShelfMiddle position={models_configs.model_8.position_8} scale={models_configs.model_8.size_model_8}
                rotation={models_configs.model_8.rotation_8} visible={uiStep === 3 ? true : false} />

              {/* hall center */}
              <Shoes5 position={models_configs.model_9.position_9} scale={models_configs.model_9.size_model_9}
                rotation={models_configs.model_9.rotation_9} visible={uiStep === 3 ? true : false} />

              {/* lighening */}
              <Shoes6 position={models_configs.model_10.position_10} scale={models_configs.model_10.size_model_10}
                rotation={models_configs.model_10.rotation_10} visible={uiStep === 3 ? true : false} />
              
              <Shoes7 position={models_configs.model_11.position_11} scale={models_configs.model_11.size_model_11}
                rotation={models_configs.model_11.rotation_11} visible={uiStep === 3 ? true : false} />

              <Shoes8 position={models_configs.model_12.position_12} scale={models_configs.model_12.size_model_12}
                rotation={models_configs.model_12.rotation_12} visible={uiStep === 3 ? true : false} />
              
              <Shoes9 position={models_configs.model_13.position_13} scale={models_configs.model_13.size_model_13}
                rotation={models_configs.model_13.rotation_13} visible={uiStep === 3 ? true : false} />
              
              <Shoes10 position={models_configs.model_14.position_14} scale={models_configs.model_14.size_model_14}
                rotation={models_configs.model_14.rotation_14} visible={uiStep === 3 ? true : false} />
              
              <Shoes11 position={models_configs.model_15.position_15} scale={models_configs.model_15.size_model_15}
                rotation={models_configs.model_15.rotation_15} visible={uiStep === 3 ? true : false} />
              
              <Shoes12 position={models_configs.model_16.position_16} scale={models_configs.model_16.size_model_16}
                rotation={models_configs.model_16.rotation_16} visible={uiStep === 3 ? true : false} />
              
              <Shoes13 position={models_configs.model_17.position_17} scale={models_configs.model_17.size_model_17}
                rotation={models_configs.model_17.rotation_17} visible={uiStep === 3 ? true : false} />
              
              <Shoes14 position={models_configs.model_18.position_18} scale={models_configs.model_18.size_model_18}
                rotation={models_configs.model_18.rotation_18} visible={uiStep === 3 ? true : false} />

              <VideoText position={[-10.25, 3.95, 0.8]} rotation={[0, Math.PI * 1.1843 / 2, 0]} visible={uiStep === 3 ? true : false} />
              {/* </Debug> */}
            </Physics>
          </Suspense>
          <Stats />
        </Canvas>
        <VirtualWorldUI
          show={uiStep === 3 ? "block" : "none"}
          opacity={uiStep === 3 ? 1 : 0}
        />
      </div>

      <div
        className="dom-elements absolute top-0 left-0 w-screen h-screen overflow-hidden z-10 pointer-events-none"
        style={{ display: uiStep < 5 ? "block" : "none" }}
      >
        {/* <FirstUI /> */}
        {/* <Login /> */}
        <InputNameUI />
        <ProfileUI onDataFromChild={handleDataFromChild} />
        <PlayerIntroduce />
      </div>

      <PopupPoster />
      <PopupLogo />
      <PopupVideo />
      <PopupModel />
      <Loading />
      <ShoppingCart />
      <MyCart />
      <MyCart3D />
      <Thanks />
    </main>
  )
}

