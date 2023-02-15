import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import useStore from '../helpers/store'



export default function ShoppingCart() {
  const router = useRouter()

  const popupCart = useStore((s) => s.popupCart)
  const cartItems = [
    {
      id: 1,
      name: 'Camiseta',
      price: 20.99,
      quantity: 1
    },
    {
      id: 2,
      name: 'Pantalones',
      price: 45.99,
      quantity: 2
    },
    {
      id: 3,
      name: 'Zapatos',
      price: 80.99,
      quantity: 1
    }
  ];

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
      <div style={{ height: '10%', backgroundColor: '#FF0000', display: 'flex' }}>
        <div style={{ textAlign: 'center' }}>
          <Image className="" style={{ marginRight: 10 }} src={'/assets/img/Logo.png'} width={60} height={50} alt={'logo'} />
        </div>
        <div>
          <h3 style={{ position: 'absolute', right: 0 }}>Help?</h3>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', height: '90%' }}>
        <div style={{ padding: '25px', height: '100%', width: '50%', display: 'flex', flexDirection: 'column' }}>
          <div>
            <button style={{
              backgroundColor: 'white', border: '1px solid #d3d3d3',
              borderRadius: '4px', padding: '8px 16px',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }} onClick={() => { useStore.setState({ popupCart: 0 }) }}>
              Back
            </button>
          </div>
          <div>
            <h1>CheckOut Details</h1>
          </div>

          <div className="dropdown" style={{}}>
            <button onClick={() => { setIsOpen1(!isOpen1) }} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FFF',
              color: 'black',
              borderrRadius: '10px',
              padding: '12px 24px',
              fontSize: '16px',
              cursor: 'pointer',
              borderBottom: !isOpen1 ? '2px solid #000' : 'none',
              width: '100%'
            }}>
              <span style={{ fontWeight: 'bold' }}>Personal details</span>
              <span style={{ marginLeft: '10px' }}> {!isOpen1 ? '+' : '-'}</span>

            </button>
            {isOpen1 && (
              <div className="dropdown-menu" style={{
                display: 'flex', flexWrap: 'wrap',
                alignContent: 'center', justifyContent: 'center',
                alignItems: 'center', borderBottom: isOpen1 ? '2px solid #000' : 'none',
                padding: '10px'
              }}>
                <div>
                  <input type="text" placeholder="Input 1"
                    value={input1}
                    onChange={(event) => handleInputChange(event, 'input1')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Input 1"
                    value={input1}
                    onChange={(event) => handleInputChange(event, 'input1')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Input 1"
                    value={input1}
                    onChange={(event) => handleInputChange(event, 'input1')}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Input 1"
                    value={input1}
                    onChange={(event) => handleInputChange(event, 'input1')}
                  />
                </div>

              </div>
            )}
          </div>

          <div className="dropdown" style={{}}>
            <button onClick={() => { setIsOpen2(!isOpen2) }} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FFF',
              color: 'black',
              borderrRadius: '10px',
              padding: '12px 24px',
              fontSize: '16px',
              cursor: 'pointer',
              borderBottom: !isOpen2 ? '2px solid #000' : 'none',
              width: '100%'
            }}>
              <span style={{ fontWeight: 'bold' }}>Shipping details</span>
              <span style={{ marginLeft: '10px' }}> {!isOpen2 ? '+' : '-'} </span>

            </button>

            {isOpen2 && (
              <div className="dropdown-menu" style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: isOpen2 ? '2px solid #000' : 'none',
                padding: '10px'

              }}>
                <input
                  type="text"
                  placeholder="Input 1"
                  value={input1}
                  onChange={(event) => handleInputChange(event, 'input1')}
                />
                <input
                  type="text"
                  placeholder="Input 2"
                  value={input2}
                  onChange={(event) => handleInputChange(event, 'input2')}
                />
                <input
                  type="text"
                  placeholder="Input 3"
                  value={input3}
                  onChange={(event) => handleInputChange(event, 'input3')}
                />
                <input
                  type="text"
                  placeholder="Input 4"
                  value={input4}
                  onChange={(event) => handleInputChange(event, 'input4')}
                />
              </div>
            )}
          </div>

          <div className="dropdown" style={{}}>

            <button onClick={() => { setIsOpen3(!isOpen3) }} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FFF',
              color: 'black',
              borderrRadius: '10px',
              padding: '12px 24px',
              fontSize: '16px',
              cursor: 'pointer',
              width: '100%',
              borderBottom: !isOpen3 ? '2px solid #000' : 'none',
            }}>
              <span style={{ fontWeight: 'bold' }}>Payment details</span>
              <span style={{ marginLeft: '10px' }}> {!isOpen3 ? '+' : '-'}</span>

            </button>

            {isOpen3 && (
              <div className="dropdown-menu" style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: isOpen3 ? '2px solid #000' : 'none',
                padding: '10px'
              }}>
                <input
                  type="text"
                  placeholder="Input 1"
                  value={input1}
                  onChange={(event) => handleInputChange(event, 'input1')}
                />
                <input
                  type="text"
                  placeholder="Input 2"
                  value={input2}
                  onChange={(event) => handleInputChange(event, 'input2')}
                />
                <input
                  type="text"
                  placeholder="Input 3"
                  value={input3}
                  onChange={(event) => handleInputChange(event, 'input3')}
                />
                <input
                  type="text"
                  placeholder="Input 4"
                  value={input4}
                  onChange={(event) => handleInputChange(event, 'input4')}
                />
              </div>
            )}
          </div>

        </div>
        <div style={{
          backgroundColor: '#000', borderRadius: '25px',
          padding: '0px 30px', height: '100%', width: '50%', display: 'flex',
          flexDirection: 'column', justifyContent: 'center', border: "1px solid #000",
        }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '90%' }}>
              <h1 style={{ fontWeight: 'bold', fontSize: '28px' }}>
                My Order
              </h1>
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginRight: 10, marginLeft: 15, width: '90%' }}>
              {cartItems1.map(item => (

                <li style={{ display: "flex", alignItems: "center", marginBottom: "10px", }}>
                  <div>
                    <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "20px", borderRadius: '10px', }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontWeight: "bold" }}>{item.category}</span>
                      <span style={{ fontWeight: "bold" }}>${item.price}</span>
                    </div>
                    <h3 style={{ marginBottom: "5px" }}>{item.quantity} x {item.name}</h3>
                  </div>
                </li>))}
            </ul>
          </div>
          <div style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '90%' }}>
              <input type="text" placeholder="add discount code"
                style={{
                  padding: "5px 15px", backgroundColor: "white",
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
                }}
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
