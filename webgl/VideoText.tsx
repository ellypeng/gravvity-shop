import { Suspense, useRef, useState, useEffect } from 'react'
import { useCursor} from '@react-three/drei'
import { useVideoTexture, useTexture } from '@react-three/drei'
import useStore from '../helpers/store';



function VideoMaterial({ url }:any) {
    // @ts-ignore
    const texture:any = useVideoTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}
  
function FallbackMaterial({ url }:any) {
    const texture:any = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
}

export function VideoText(props: any) {
  let textureVideo: any = useRef()
  const [hovered, setHover] = useState(false)
  useCursor(hovered)

  const video_url: string = useStore((s) => s.video_url)


  useEffect(() => {
    const changeTexture = () => {
      if (video_url === '') {
        textureVideo.current = "https://res.cloudinary.com/dd8kyaii3/video/upload/v1673776423/shoppy-video/Kicks_n2nlbp.mp4"
      } else {
        textureVideo.current = video_url
      }
    }
    changeTexture();
  }, [video_url, textureVideo])

  return (
    <mesh 
      scale={[10.5, 7.25, 1]} 
      position={props.position} 
      rotation={props.rotation}  
      visible={props.visible} 
      onClick={() => { useStore.setState({ popupVideo: 1 }) }}
      onPointerOver={() => (setHover(true))}
      onPointerOut={() => (setHover(false))} 
    >
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="assets/textures/video.png" />}>
        <VideoMaterial url={textureVideo.current} />
      </Suspense>
    </mesh>
  )
}