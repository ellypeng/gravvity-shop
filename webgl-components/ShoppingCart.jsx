import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import useStore from '../helpers/store'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcStripe, FaChevronLeft } from 'react-icons/fa';




export default function ShoppingCart() {
  const router = useRouter()

  const popupCart = useStore((s) => s.popupCart)
  const shooping = useStore((s) => s.shooping)
  const [state, setstate] = useState(shooping);

  useEffect(() => {
    console.log(shooping)
    console.log(state.length === 0)
  }, [shooping]);

  const cartItems1 = [
    {
      id: 1,
      name: "Camisa de algodón",
      price: 25.99,
      quantity: 2,
      category: "Ropa",
      image: "https://via.placeholder.com/150x150?text=Camisa+algodón",
    },
    {
      id: 2,
      name: "Botines de cuero",
      price: 59.99,
      quantity: 1,
      category: "Calzado",
      image: "https://via.placeholder.com/150x150?text=Botines+cuero",
    },
    {
      id: 3,
      name: "Gafas de sol",
      price: 14.99,
      quantity: 3,
      category: "Accesorios",
      image: "https://via.placeholder.com/150x150?text=Gafas+de+sol",
    },
    {
      id: 4,
      name: "Gafas de luna",
      price: 15.99,
      quantity: 1,
      category: "Accesorios",
      image: "https://via.placeholder.com/150x150?text=Gafas+de+sol",
    },

  ];


  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [isOpen3, setIsOpen3] = useState(false);

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleToggleDropdown = () => {
    setInput1(!isOpen1);
  };

  const handleInputChange = (event, inputName) => {
    switch (inputName) {
      case 'input1':
        setInput1(event.target.value);
        break;
      case 'input2':
        setInput2(event.target.value);
        break;
      case 'input3':
        setInput3(event.target.value);
        break;
      case 'input4':
        setInput4(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden "
      style={{
        display: popupCart !== 0 ? 'block' : 'none', zIndex: 2000000000,
        backgroundColor: '#FAFAFA', bottom: 0
      }}
    >
      {/*aqui empieza cuadro "header"*/}

      <div className='header'>
        <div className='logo1'>
          <Image src={'/assets/img/Logo.png'} width={60} height={50} alt={'logo'} />
        </div>
        <div className='boton'>
          <button className='botonHelp' >Help ?</button>
        </div>
      </div>
      <div className='pannelShopping'>
        {/*A  aqui empieza "<CheckOut>" */}
        <div className='checkOut'>
          <div style={{ margin: '15px 0px' }}>
            <button className='buttonBack' onClick={() => { useStore.setState({ popupCart: 0 }) }}>
              <span style={{ fontSize: '18px', marginRight: '5px' }}>
                <FaChevronLeft />
              </span>
              <span style={{ fontSize: '16px' }}>
                Back to shop
              </span>
            </button>
          </div>
          <div style={{ padding: '0px 20px' }}>
            <h1 style={{ fontSize: 30, fontWeight: 500 }}>CheckOut Details</h1>
          </div>

          <div className='panelCheck'>
            <div className="dropdown" style={{}}>
              <button className='dropButton' onClick={() => { setIsOpen1(!isOpen1) }}
                style={{ borderBottom: !isOpen1 ? '1px solid #000' : 'none', }}>
                <span style={{ fontWeight: 600, fontSize: 20 }}>Personal details</span>
                <span style={{ marginLeft: '10px', fontSize: 30 }}> {!isOpen1 ? '+' : '-'}</span>

              </button>
              {isOpen1 && (
                <div className="dropdown-menu" >
                  <div className='columna'>
                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                      <label className='labeldetails' htmlFor='firstName'>First Name</label>
                      <input className='inputsDetails' type="text" placeholder="Input 1"
                        value={input1}
                        name='firtsName'
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='email'>Email:</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        name='email'
                        value={input1}
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                  </div>
                  <div className='columna'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='lastName'>Last Name</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        value={input1}
                        name='lastName'
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='phone'>Phone Number</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        name='phone'
                        value={input1}
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                  </div>

                </div>
              )}
            </div>

            <div className="dropdown" style={{}}>
              <button className='dropButton'
                onClick={() => { setIsOpen2(!isOpen2) }}
                style={{ borderBottom: !isOpen2 ? '1px solid #000' : 'none' }}>
                <span style={{ fontWeight: 600, fontSize: 20 }}>Shipping details</span>
                <span style={{ marginLeft: '10px', fontSize: 30 }}> {!isOpen2 ? '+' : '-'} </span>
              </button>
              {isOpen2 && (
                <div className="dropdown-menu">
                  <div className='columna'>
                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                      <label className='labeldetails' htmlFor='firstName'>Country</label>
                      {/* <input className='inputsDetails' type="text" placeholder="Input 1"
                        value={input1}
                        name='firtsName'
                        onChange={(event) => handleInputChange(event, 'input1')}
                      /> */}
                      <select className='inputsDetails'>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='email'>Addres line 1</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        name='email'
                        value={input1}
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='email'>Province/state/region</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        name='email'
                        value={input1}
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                  </div>
                  <div className='columna'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='lastName'>City</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        value={input1}
                        name='lastName'
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='email'>Address line 2</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        name='email'
                        value={input1}
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='phone'>Postal code</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        name='phone'
                        value={input1}
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="dropdown" style={{}}>

              <button className='dropButton' onClick={() => { setIsOpen3(!isOpen3) }} style={{
                borderBottom: !isOpen3 ? '1px solid #000' : 'none',
              }}>
                <span style={{ fontWeight: 600, fontSize: 20 }}>Payment details</span>
                <span style={{ marginLeft: '10px', fontSize: 30 }}> {!isOpen3 ? '+' : '-'}</span>

              </button>

              {isOpen3 && (
                <div className="dropdown-menu">
                  <form className='form-car'>

                    <label className='label-card' htmlFor="cardNumber">Número de tarjeta de crédito</label>
                    <div className='inputs-div'>
                      <input className='input-card1' type="text" placeholder="1234 1234 1234 1234" />
                      <span className='card-icon'>
                        <FaCcVisa />
                      </span>
                      <span className='card-icon'>
                        <FaCcMastercard />
                      </span>
                      <span className='card-icon'>
                        <FaCcAmex />
                      </span>
                      <span className='card-icon'>
                        <FaCcStripe />
                      </span>
                    </div>
                    <div className="cvv-card-holder-container">
                      <div>
                        <input className='input-card' placeholder='MM/YY' type="text" id="cvv" />
                      </div>
                      <div>
                        <input className='input-card' placeholder='CVC' type="text" id="cardHolderName" />
                      </div>
                    </div>

                    <label className='label-card' htmlFor="cardNumber">Número de tarjeta de crédito</label>
                    <input className='input-card' type="text" id="cardNumber" />
                  </form>

                  {/* <div className='columna'>
                    <div style={{ display: 'flex', flexDirection: 'column' }} >
                      <label className='labeldetails' htmlFor='firstName'>First Name</label>
                      <input className='inputsDetails' type="text" placeholder="Input 1"
                        value={input1}
                        name='firtsName'
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='email'>Email:</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        name='email'
                        value={input1}
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                  </div>
                  <div className='columna'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='lastName'>Last Name</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        value={input1}
                        name='lastName'
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='labeldetails' htmlFor='phone'>Phone Number</label>
                      <input
                        className='inputsDetails'
                        type="text"
                        placeholder="Input 1"
                        name='phone'
                        value={input1}
                        onChange={(event) => handleInputChange(event, 'input1')}
                      />
                    </div>
                  </div> */}
                </div>
              )}
            </div>
          </div>


        </div>
        {/*aqui empieza cuadro "My Order"*/}
        <div className='myOrder'>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '90%' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '28px' }}>
                My Order
              </h1>
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', overflow: 'auto', height: 200, justifyContent: 'center' }}>
            {shooping.length === 0 ? null :


              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginRight: 10, marginLeft: 15, width: '90%' }}>
                {shooping.map(item => (

                  <li key={item.id} style={{ display: "flex", alignItems: "center", margin: "15px 0px", padding: '15px 0px', borderBottom: '1px solid #CFCFCF' }}>
                    <div>
                      <img src={item.img} alt={item.name} style={{ width: "50px", marginRight: "20px", borderRadius: '10px', }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontWeight: "bold" }}>{item.category}</span>
                        <span style={{ fontWeight: "bold", fontSize: '20px' }}>${item.price}</span>
                      </div>
                      <h3 style={{ marginBottom: "5px" ,  fontSize: '20px'}}>{item.cantidad} x {item.name}</h3>
                    </div>
                  </li>))}
              </ul>
            }

          </div>
          <div style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '90%' }}>
              <input type="text" placeholder="add discount code"
                style={{
                  padding: "15px 15px", backgroundColor: "white",
                  color: "black", border: "1px solid #DEDEDE",
                  width: '80%', marginTop: 15, marginBottom: 15, borderRadius: 10,
                }}
              />
              <button
                style={{
                  backgroundColor: "black", color: "white", border: "none",
                  padding: "5px 10px", borderRadius: "10px", width: '20%', marginLeft: 15, marginTop: 15, marginBottom: 15
                }}
              >
                Apply
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'column', }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <table style={{ width: '90%', margin: 10 }} >
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'left', padding: '5px' }}>Subtotal</td>
                    <td style={{ textAlign: 'right', padding: '5px' }}>$10</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'left', padding: '5px' }}>Tax</td>
                    <td style={{ textAlign: 'right', padding: '5px' }}>$10</td>
                  </tr>
                  <tr style={{ paddingBottom: 20 }}>
                    <td style={{ textAlign: 'left', borderBottom: '3px solid black', padding: '5px' }}>Shipping</td>
                    <td style={{ textAlign: 'right', borderBottom: '3px solid black', padding: '5px' }}>$10</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'left', padding: '5px' }}>Total amount</td>
                    <td style={{ textAlign: 'right', padding: '5px' }}>$ 1000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                style={{
                  backgroundColor: "black", color: "white", border: "none",
                  padding: "10px 10px", borderRadius: "10px", width: '90%', marginLeft: 15, marginRight: 15
                }} onClick={() => { useStore.setState({ popThanks: 1, popupCart : 0})}}
              >
                Make payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
