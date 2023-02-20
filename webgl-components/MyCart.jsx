import React, { useEffect, useState } from 'react'
import { FaRegSun, FaRegTimesCircle, FaTimes } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'
import useStore from '../helpers/store'

export default function MyCart() {
  const popMyCart = useStore((s) => s.popMyCart)
  const popupIndex = useStore((s) => s.popupIndex)
  const shooping = useStore((s) => s.shooping)

  const objetos = useStore((s) => s.objetos)
  const [ipOpen1, setIpOpen1] = useState(false);
  const [ipOpen2, setIpOpen2] = useState(false);
  const [data, DataSet] = useState(objetos)
  const [selectedValue, setSelectedValue] = useState("1");
  const [test1, setTest1] = useState({});

  const notify = () => toast.success("Added to cart!", {
    autoClose: 2000,
  });

  const sumitChange = () => {
    let test3 = {
      id: shooping.length + 1,
      name: data[popMyCart].nombre,
      category: data[popMyCart].categoria,
      img: data[popMyCart].imagen.src,
      price: data[popMyCart].precio,
      cantidad: selectedValue
    }

    useStore.setState((state) => ({
      ...state,
      shooping: [...state.shooping, test3]

    }))

    notify();
  };

  return (
    <div className="absolute"
      style={{
        display: popMyCart !== 0 ? 'flex' : 'none', zIndex: 2000000000,
        backgroundColor: '#FAFAFA', bottom: 10, right: 10, width: '100%', height: '100%', maxHeight: '416px', maxWidth: '500px',
        borderRadius: '25px', overflow: 'auto', flexDirection: 'column'
      }}>
      <ToastContainer />

      <div>
        <div style={{ display: "flex", alignItems: "center", margin: "15px 0px 0px 0px", padding: '15px 15px 0px 15px' }}>
          <div>
            <img src={data[popMyCart].imagen.src} alt={'zapatos'} style={{ width: "75px", marginRight: "20px", borderRadius: '10px', }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 700, fontSize: '14px', fontFamily: 'Be Vietnam' }}>{data[popMyCart].categoria}</span>
              {/* <span style={{ fontWeight: "bold" }}>$123.32</span> */}
              <button onClick={() => { useStore.setState({ popMyCart: 0 }) }}><FaRegTimesCircle style={{ fontSize: '25px' }} /></button>
            </div>
            <h3 style={{ marginBottom: "5px", fontFamily: 'Poppins', fontSize: '25px', fontWeight: 600 }}>{data[popMyCart].nombre}</h3>
            <h3 style={{ marginBottom: '5px', color: '#111111', fontSize: '16px', fontFamily: 'Be Vietnam', fontStyle: 'italic', fontWeight: 400 }}>onlY 12 left</h3>
          </div>
        </div>
        <div style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
          <div style={{ display: 'flex', width: '90%' }}>
            <select style={{
              backgroundColor: "white", color: "black", border: "1px solid #000",
              padding: "5px 15px", borderRadius: "10px", width: '20%', marginRight: 15, marginTop: 15, marginBottom: 15,
              fontWeight: 'bold'
            }} value={selectedValue} onChange={(e) => { setSelectedValue(e.target.value) }}>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button style={{
              padding: "15px 15px", border: "1px solid #DEDEDE",
              width: '80%', marginTop: 15, marginBottom: 15, borderRadius: 10,
              backgroundColor: "black", color: "white", display: 'flex', justifyContent: 'space-between'
            }} onClick={() => { sumitChange() }}>
              <span style={{ color: 'white', fontFamily: 'Be Vietnam' }}>
                Add to cart
              </span>
              <span style={{ color: 'white', fontFamily: 'Be Vietnam', borderLeft: '1px solid #FFF', fontSize: '16px', paddingLeft: '10px' }}>
                ${data[popMyCart].precio}
              </span>
            </button>
          </div>
        </div>
        <div >
          <div className="dropdown1" style={{}}>
            <button className='dropButton1' onClick={() => { setIpOpen1(!ipOpen1) }} style={{
              borderBottom: !ipOpen1 ? '1px solid #000' : 'none',
            }}>
              <span style={{ fontWeight: 600, fontSize: 20 }}>Product Details</span>
              <span style={{ marginLeft: '10px', fontSize: 30 }}> {!ipOpen1 ? '+' : '-'}</span>
            </button>
            {ipOpen1 && (
              <div className="dropdown-menu">
                <p>
                  Air Max 1/97 VF Nike x Sean Wotherspoon sneakers Multicolour cotton
                </p>
              </div>
            )}
          </div>
          {/* <div className="dropdown1" style={{}}>
            <button className='dropButton1' onClick={() => { setIpOpen2(!ipOpen2) }} style={{
              borderBottom: !ipOpen2 ? '1px solid #000' : 'none',
            }}>
              <span style={{ fontWeight: 600, fontSize: 20 }}>Additional info</span>
              <span style={{ marginLeft: '10px', fontSize: 30 }}> {!ipOpen2 ? '+' : '-'}</span>
            </button>
            {ipOpen2 && (
              <div className="dropdown-menu">
                <p>
                  Air Max 1/97 VF Nike x Sean Wotherspoon sneakers Multicolour cotton
                </p>
              </div>
            )}
          </div> */}
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '16px 16px' }}>
          <button onClick={() => { useStore.setState({ popMyCart: 0, popup: popupIndex }) }} style={{ fontSize: '30px' }}>
            <FaRegSun />
          </button>
        </div>
      </div>

    </div>
  )
}
