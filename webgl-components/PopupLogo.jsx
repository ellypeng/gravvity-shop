import useStore from "../helpers/store"
import React, { useState, useEffect, useCallback, useRef } from "react";
import Dropzone from "react-dropzone";
import {useDropzone} from 'react-dropzone'
import { useCursor} from '@react-three/drei'
import { fetcher } from '../lib/fetch'
import { useCurrentUser } from '../lib/user';

import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image"


const Loading = (props) => {
  const { isLoading } = props 
  const [show, setShow] = useState("block");
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setShow("none");
    }
  }, [isLoading]);
  return (
    <div className="loader_product" style={{ display: show }}>
      <div className="loader_spinner">
        <div className="loader_ring1" />
        <div className="loader_ring2" />
        <div className="loader_ring3" />
      </div>
      <Image className="logo" src={'/assets/img/Logo.png'} width={100} height={100} alt={'logo'} />
    </div>
  );
};

const PopupLogo = (props) => {
  const popUpLogo = useStore((s) => s.popupLogo)
  const [hovered, setHover] = useState(false)
  const [image, setImage] = useState({ preview: "", raw: "" });

  const [selectedFiles, setSelectedFiles] = useState();
  const [selectedFile, setSelectedFile] = useState();

  const indexRef = useRef();
  const imageRef = useRef()

  useEffect(() => {
    indexRef.current = popUpLogo;
  }, [popUpLogo])

  // console.log('popUpLogo = ', popUpLogo)

  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback((files) => {
    // console.log('onDrops files = ', files)
    // console.log('popUpLogo = ', popUpLogo)
    if (files.length > 0) {
      setSelectedFiles(files);

      let image = files[0];
      // console.log('image = ', image)
      imageRef.current = image;
      setSelectedFile(image);
      // console.log(' ondrop selectedFile = ', selectedFile)
    }
  }, [])

  const upload = useCallback(
    async (e) => {
      try {
        setIsLoading(true);
        // console.log('here is')
        // console.log('selectedFile = ', imageRef.current)

        const formData = new FormData();

        formData.append("productlogo", imageRef.current);
        
        const response = await fetcher('/api/productlogo', {
          method: 'POST',
          body: formData,
        });

        // console.log('response = ', response)
        useStore.setState({logo_url: response.productlogo.url})

        toast.success('Uploading Success', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // alert('success')
        close();
        setSelectedFile('')
      } catch (e) {
        toast.error("Uploading Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useCursor(hovered)

  const close = () => {
    useStore.setState({ popupLogo: 0 });
  }

  return (
    <>
      <ToastContainer />
      <div
        className="absolute top-0 left-0 w-screen h-screen overflow-hidden backdrop-blur-lg"
        style={{display:popUpLogo!==0?'block':'none', backgroundSize: 'cover', zIndex:2000000000}}
      >
        <button 
          className="absolute top-8 right-12 text-white text-center text-[18px] rounded-full w-[20px] h-[20px] pointer-events-auto cursor-pointer"
          style={{zIndex: 2000000000}}
          onClick={()=>close()}
        >
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 41.25C32.8125 41.25 41.25 32.8125 41.25 22.5C41.25 12.1875 32.8125 3.75 22.5 3.75C12.1875 3.75 3.75 12.1875 3.75 22.5C3.75 32.8125 12.1875 41.25 22.5 41.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.1938 27.8059L27.8063 17.1934" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27.8063 27.8059L17.1938 17.1934" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
       
        <section className="fixed z-10 top-0 w-full h-full flex bg-black bg-opacity-60">
          <div className="extraOutline-1 px-12 pb-8 bg-white w-max bg-whtie m-auto rounded-lg flex flex-col">
            <div className="text-black m-auto py-12 font-vietnam font-semibold text-2xl text-center">Upload 2D product</div>
            <Dropzone onDrop={onDrop} multiple={false}>
              {({ getRootProps, getInputProps }) => (
                <>

                    <div {...getRootProps({ className: "file_upload relative border-4 border-dotted border-gray-300 rounded-lg py-20 w-[650px]"})}>
                      <div className="input_field flex flex-col w-max mx-auto text-center">
                        {/* @ts-ignore */}
                        {selectedFiles && selectedFiles[0].name ? (
                          <div className="selected-file title text-black font-normal text-lg text-vietnam">
                            {/* @ts-ignore */}
                            {selectedFiles && selectedFiles[0].name}
                          </div>
                        ) : (
                          <>
                            <div className="title text-black font-semibold text-xl mt-12 text-vietnam">Drag files here</div>
                            <div className="title text-black font-normal text-lg my-4 text-vietnam">Add .png or .jpeg image file</div>
                          </>
                        )}

                        <label>
                            <div className="text bg-[#111111] text-white border rounded-2xl font-semibold cursor-pointer p-2 px-3 hover:bg-black">Select from device</div>
                        </label>
                      </div>
                    </div>
                    <input {...getInputProps()} />
                  </>
              )}
            </Dropzone>
            {
              isLoading && 
              <Loading isLoading={isLoading}/>
            }
            <aside className="selected-file-wrapper mt-6 flex justify-end">
              <button
                className="text text-[#111111] font-semibold cursor-pointer py-1 px-12 my-2 text-vietnam"
                onClick={()=>close()}
              >
                Cancel
              </button>
              <button
                className="text bg-black text-white border rounded-xl font-semibold cursor-pointer py-1 px-12 text-vietnam"
                onClick={(e)=>upload()}
              >
                Done
              </button>
            </aside>
          </div>
        </section>
      </div>
    </>
  )
}

export default PopupLogo