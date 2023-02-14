import useStore from "../helpers/store"
import React, { useState, useEffect, useCallback, useRef } from "react";
import Dropzone from "react-dropzone";
import { useDropzone } from 'react-dropzone'
import { useCursor } from '@react-three/drei'
import { fetcher } from '../lib/fetch'
import { useCurrentUser } from '../lib/user';

import { ToastContainer, toast } from 'react-toastify';
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

const PopupModel = (props) => {
  const popUpModelIndex = useStore((s) => s.popupModel)
  const popUpSubIndex = useStore((s) => s.popupSub)
  const models_configs = useStore((s) => s.models_configs)
  const [hovered, setHover] = useState(false)
  const [image, setImage] = useState({ preview: "", raw: "" });

  const [selectedFiles, setSelectedFiles] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [data, setData] = useState('');

  const typeRef = useRef()
  const priceRef = useRef()
  const nameRef = useRef()
  const inventoryRef = useRef()
  const descRef = useRef()
  const addInfoRef = useRef()
  const modelRef = useRef()
  const indexRef = useRef()

  useEffect(() => {
    indexRef.current = popUpModelIndex;
    console.log(indexRef)
  }, [popUpModelIndex])

  // console.log('popUpModelIndex = ', popUpModelIndex)

  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback((files) => {
    // console.log('onDrops files = ', files)
    // console.log('popUpModelIndex = ', popUpModelIndex)
    if (files.length > 0) {
      setSelectedFiles(files);

      let model = files[0];
      // console.log('model = ', model)
      modelRef.current = model;
      setSelectedFile(model);
      // console.log(' ondrop selectedFile = ', modelRef.current)
    }
  }, [])

  const upload = useCallback(
    async (e) => {
      try {
        setIsLoading(true);
        // console.log('here is')
        // console.log('selectedFile = ', modelRef.current)

        const formData = new FormData();

        const type = typeRef.current.value
        const price = priceRef.current.value
        const name = nameRef.current.value
        const inventory = inventoryRef.current.value
        const desc = descRef.current.value
        const notes = addInfoRef.current.value
        const index = indexRef.current

        // console.log('price = ', price, ' ', name, ' ', inventory, ' ', desc, ' ', notes, ' popUpModelIndex = ', index, ' ')

        console.log('index' + index)

        formData.append("productmodel", modelRef.current);
        formData.append("type", type)
        formData.append('price', price);
        formData.append('name', name);
        formData.append('inventory', inventory);
        formData.append('desc', desc);
        formData.append('notes', notes);
        formData.append('product_index', index)

        const response = await fetcher('/api/productModel', {
          method: 'POST',
          body: formData,
        });

        console.log('response = ', response)
        console.log('response = ', response.productmodel.url)
        if (index === 1)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_1: {
                ...state.models_configs.model_1,
                url_model_1: response.productmodel.url
              }
            }
          }))
        else if (index === 2)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_2: {
                ...state.models_configs.model_2,
                url_model_2: response.productmodel.url
              }
            }
          }))
        else if (index === 3)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_3: {
                ...state.models_configs.model_3,
                url_model_3: response.productmodel.url
              }
            }
          }))
        else if (index === 4)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_4: {
                ...state.models_configs.model_4,
                url_model_4: response.productmodel.url
              }
            }
          }))
        else if (index === 5)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_5: {
                ...state.models_configs.model_5,
                url_model_5: response.productmodel.url
              }
            }
          }))
        else if (index === 6)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_6: {
                ...state.models_configs.model_6,
                url_model_6: response.productmodel.url
              }
            }
          }))
        else if (index === 7)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_7: {
                ...state.models_configs.model_7,
                url_model_7: response.productmodel.url
              }
            }
          }))
        else if (index === 8)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_8: {
                ...state.models_configs.model_8,
                url_model_8: response.productmodel.url
              }
            }
          }))
        else if (index === 9)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_9: {
                ...state.models_configs.model_9,
                url_model_9: response.productmodel.url
              }
            }
          }))
        else if (index === 10)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_10: {
                ...state.models_configs.model_10,
                url_model_10: response.productmodel.url
              }
            }
          }))
        else if (index === 11)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_11: {
                ...state.models_configs.model_11,
                url_model_11: response.productmodel.url
              }
            }
          }))
        else if (index === 12)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_12: {
                ...state.models_configs.model_12,
                url_model_12: response.productmodel.url
              }
            }
          }))
        else if (index === 13)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_13: {
                ...state.models_configs.model_13,
                url_model_13: response.productmodel.url
              }
            }
          }))
        else if (index === 14)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_14: {
                ...state.models_configs.model_14,
                url_model_14: response.productmodel.url
              }
            }
          }))
        else if (index === 15)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_15: {
                ...state.models_configs.model_15,
                url_model_15: response.productmodel.url
              }
            }
          }))
        else if (index === 16)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_16: {
                ...state.models_configs.model_16,
                url_model_16: response.productmodel.url
              }
            }
          }))
        else if (index === 17)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_17: {
                ...state.models_configs.model_17,
                url_model_17: response.productmodel.url
              }
            }
          }))
        else if (index === 18)
          useStore.setState(state => ({
            ...state,
            models_configs: {
              ...state.models_configs,
              model_18: {
                ...state.models_configs.model_18,
                url_model_18: response.productmodel.url
              }
            }
          }))

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
    useStore.setState({ popupModel: 0 });
    useStore.setState({ popupSub: 0 });
    useStore.setState({ popup: 0 });
  }

  const back = () => {
    useStore.setState({ popupSub: 0 });
  }

  const onChangeSelect = (e) => {
    // console.log(' type ', typeRef.current.value)
  }

  const changePopUpSub = () => {
    useStore.setState({ popupSub: 1 });
  }

  const changeSizeModel = () => {
    useStore.setState({ popupSub: 2 });
  }

  const changeSizeStore = () => {
    const index = indexRef.current
    if (index === 1)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_1: {
            ...state.models_configs.model_1,
            size_model_1: parseFloat(data)
          }
        }
      }))
    else if (index === 2)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_2: {
            ...state.models_configs.model_2,
            size_model_2: parseFloat(data)
          }
        }
      }))
    else if (index === 3)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_3: {
            ...state.models_configs.model_3,
            size_model_3: parseFloat(data)
          }
        }
      }))
    else if (index === 4)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_4: {
            ...state.models_configs.model_4,
            size_model_4: parseFloat(data)
          }
        }
      }))
    else if (index === 5)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_5: {
            ...state.models_configs.model_5,
            size_model_5: parseFloat(data) 
        }
      } }  ))
    else if (index === 6)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_6: {
            ...state.models_configs.model_6,
            size_model_6: parseFloat(data)
          }
        }
      }))
    else if (index === 7)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_7: {
            ...state.models_configs.model_7,
            size_model_7: parseFloat(data)
          }
        }
      }))
    else if (index === 8)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_8: {
            ...state.models_configs.model_8,
            size_model_8: parseFloat(data)
          }
        }
      }))
    else if (index === 9)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_9: {
            ...state.models_configs.model_9,
            size_model_9: parseFloat(data)
          }
        }
      }))
    else if (index === 10)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_10: {
            ...state.models_configs.model_10,
            size_model_10: parseFloat(data)
          }
        }
      }))
    else if (index === 11)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_11: {
            ...state.models_configs.model_11,
            size_model_11: parseFloat(data)
          }
        }
      }))
    else if (index === 12)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_12: {
            ...state.models_configs.model_12,
            size_model_12: parseFloat(data)
          }
        }
      }))
    else if (index === 13)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_13: {
            ...state.models_configs.model_13,
            size_model_13: parseFloat(data)
          }
        }
      }))
    else if (index === 14)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_14: {
            ...state.models_configs.model_14,
            size_model_14: parseFloat(data)
          }
        }
      }))
    else if (index === 15)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_15: {
            ...state.models_configs.model_15,
            size_model_15: parseFloat(data)
          }
        }
      }))
    else if (index === 16)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_16: {
            ...state.models_configs.model_16,
            size_model_16: parseFloat(data)
          }
        }
      }))
    else if (index === 17)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_17: {
            ...state.models_configs.model_17,
            size_model_17: parseFloat(data)
          }
        }
      }))
    else if (index === 18)
      useStore.setState(state => ({
        ...state,
        models_configs: {
          ...state.models_configs,
          model_18: {
            ...state.models_configs.model_18,
            size_model_18: parseFloat(data)
          }
        }
      }))
  }

  return (
    <>
      <ToastContainer />
      <div
        className="absolute top-0 left-0 w-screen h-screen overflow-hidden backdrop-blur-lg"
        style={{ display: popUpModelIndex !== 0 ? 'block' : 'none', backgroundSize: 'cover', zIndex: 2000000000 }}
      >
        <button
          className="absolute top-8 right-12 text-white text-center text-[18px] rounded-full w-[20px] h-[20px] pointer-events-auto cursor-pointer"
          style={{ zIndex: 2000000000 }}
          onClick={() => close()}
        >
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 41.25C32.8125 41.25 41.25 32.8125 41.25 22.5C41.25 12.1875 32.8125 3.75 22.5 3.75C12.1875 3.75 3.75 12.1875 3.75 22.5C3.75 32.8125 12.1875 41.25 22.5 41.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.1938 27.8059L27.8063 17.1934" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.8063 27.8059L17.1938 17.1934" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <section className="fixed z-10 top-0 w-full h-full flex bg-black bg-opacity-60">
          <div className="extraOutline-1 px-12 pb-8 bg-white w-max bg-whtie m-auto rounded-lg flex flex-col"
            style={{ display: popUpSubIndex === 0 ? 'block' : 'none' }}
          >
            <div className="text-black m-auto py-12 font-vietnam font-semibold text-2xl text-center">Upload 3D product</div>

            <button
              className="text bg-[#111111] bg-opacity-40 text-white border rounded-xl font-semibold cursor-pointer py-1 px-12 text-vietnam"
              onClick={() => { changeSizeModel() }}>
              Change Size
            </button>
            <Dropzone onDrop={onDrop} multiple={false}>
              {({ getRootProps, getInputProps }) => (
                <>
                  <div {...getRootProps({ className: "file_upload relative border-4 border-dotted border-gray-300 rounded-lg py-20 w-[650px]" })}>
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
                          <div className="title text-black font-normal text-lg my-4 text-vietnam">Add .glb file</div>
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
            <aside className="selected-file-wrapper mt-6 flex justify-end">
              <button
                className="text text-[#111111] font-semibold cursor-pointer py-1 px-12 my-2 text-vietnam"
                onClick={() => close()}
              >
                Cancel
              </button>
              <button
                className="text bg-[#111111] bg-opacity-40 text-white border rounded-xl font-semibold cursor-pointer py-1 px-12 text-vietnam"
                onClick={() => changePopUpSub()}
              >
                Next
              </button>
            </aside>
          </div>

          <div className="extraOutline-1 px-12 pb-8 bg-white w-max bg-whtie m-auto rounded-lg flex flex-col"
            style={{ display: popUpSubIndex === 1 ? 'block' : 'none' }}
          >
            <div className="text-black m-auto py-12 font-vietnam font-semibold text-2xl text-center">Add product information</div>
            <div className="file_upload relative border-gray-300 rounded-lg py-4 w-[650px]">
              <div className="flex flex-col justify-center w-full">
                <div className="flex flex-row justify-between w-full">
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="FirstName" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Product type
                    </label>
                    <select
                      ref={typeRef} className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 appearance-none" onChange={onChangeSelect}
                    >
                      <option className="my-2 w-full border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 appearance-none" value="physical">Physical product</option>
                      <option className="my-2 w-full border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 appearance-none" value="digital">Digital product</option>
                    </select>
                  </div>
                  <div className="w-full mb-3 mx-4 relative">
                    <label htmlFor="FirstName" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Price
                      <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </label>
                    <input ref={priceRef} type="text"
                      className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 text-vietnam font-semibold" placeholder='0.00' />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="ProductName" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Product name
                    </label>
                    <input ref={nameRef} type="text"
                      className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 text-vietnam font-semibold" placeholder='Name your product' />
                  </div>
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="Inventory" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Inventory
                    </label>
                    <input ref={inventoryRef} type="text"
                      className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 text-vietnam font-semibold" placeholder='0' />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="Descriptioin" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Product desciption
                    </label>
                    <textarea ref={descRef} id="descRef" rows="4" className="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border-[#DEDEDE] focus:ring-blue-500 focus:border-blue-500 " placeholder="Describe your product."></textarea>
                  </div>
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="Notes" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Additional notes:
                    </label>
                    <textarea ref={addInfoRef} id="addInfoRef" rows="4" className="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border-[#DEDEDE] focus:ring-blue-500 focus:border-blue-500 " placeholder="Any notes?"></textarea>
                  </div>
                </div>
              </div>
            </div>
            {
              isLoading &&
              <Loading isLoading={isLoading} />
            }
            <aside className="selected-file-wrapper mt-6 flex justify-end">
              <button
                className="text text-[#111111] font-semibold cursor-pointer py-1 px-12 my-2 text-vietnam"
                onClick={() => back()}>
                Back
              </button>
              <button
                className="text bg-black text-white border rounded-xl font-semibold cursor-pointer py-1 px-12 text-vietnam"
                onClick={(e) => upload()}>
                Done
              </button>
            </aside>
          </div>

          <div className="extraOutline-1 px-12 pb-8 bg-white w-max bg-whtie m-auto rounded-lg flex flex-col"
            style={{ display: popUpSubIndex === 2 ? 'block' : 'none' }}>
            <div className="text-black m-auto py-12 font-vietnam font-semibold text-2xl text-center">Config Model</div>
            {/* <div className="file_upload relative border-gray-300 rounded-lg py-4 w-[650px]">
              <div className="flex flex-col justify-center w-full">
                <div className="flex flex-row justify-between w-full">
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="FirstName" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Product type
                    </label>
                    <select
                      ref={typeRef} className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 appearance-none" onChange={onChangeSelect}
                    >
                      <option className="my-2 w-full border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 appearance-none" value="physical">Physical product</option>
                      <option className="my-2 w-full border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 appearance-none" value="digital">Digital product</option>
                    </select>
                  </div>
                  <div className="w-full mb-3 mx-4 relative">
                    <label htmlFor="FirstName" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Price
                      <span className="flex absolute right-0 bg-transparent rounded text-base text-gray-600 p-2 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </label>
                    <input ref={priceRef} type="text"
                      className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 text-vietnam font-semibold" placeholder='0.00' />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="ProductName" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Product name
                    </label>
                    <input ref={nameRef} type="text"
                      className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 text-vietnam font-semibold" placeholder='Name your product' />
                  </div>
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="Inventory" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Inventory
                    </label>
                    <input ref={inventoryRef} type="text"
                      className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 text-vietnam font-semibold" placeholder='0' />
                  </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="Descriptioin" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Product desciption
                    </label>
                    <textarea ref={descRef} id="descRef" rows="4" className="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border-[#DEDEDE] focus:ring-blue-500 focus:border-blue-500 " placeholder="Describe your product."></textarea>
                  </div>
                  <div className="w-full mb-3 mx-4">
                    <label htmlFor="Notes" className="block text-sm px-4 text-black text-vietnam font-semibold" >
                      Additional notes:
                    </label>
                    <textarea ref={addInfoRef} id="addInfoRef" rows="4" className="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border-[#DEDEDE] focus:ring-blue-500 focus:border-blue-500 " placeholder="Any notes?"></textarea>
                  </div>
                </div>
              </div>
            </div> */}
            <label htmlFor="FirstName" className="block text-sm px-4 text-black text-vietnam font-semibold" >
              Name:
              <input
                className="my-2 w-full rounded-2xl border-[#DEDEDE] bg-white text-sm text-black shadow-sm px-6 text-vietnam font-semibold" placeholder='usar parametros 1.00'
                type="number" name="name" 
                value={data}
                onChange={(e) => { setData(e.target.value)}}
                />
            </label>
            <button className="text bg-[#111111] bg-opacity-40 text-white border rounded-xl font-semibold cursor-pointer py-1 px-12 text-vietnam"
              onClick={() => { changeSizeStore() }}
            >
              Change
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default PopupModel