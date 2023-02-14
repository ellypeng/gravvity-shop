import React from 'react'
import useStore from '../helpers/store'



export default function ShoppingCart() {
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



  console.log(popupCart)
  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden "
      style={{
        display: popupCart !== 0 ? 'block' : 'none', zIndex: 2000000000,
        backgroundColor: '#FFF', bottom: 0
      }}
    >
      <div style={{ height: '15%', backgroundColor: '#FF0000' }}></div>
      <div style={{ display: 'flex', flexDirection: 'row', height: '85%' }}>
        <div style={{ backgroundColor: '#000', height: '100%', width: '50%' }}>
          <button style={{
            backgroundColor: 'white', border: '1px solid #d3d3d3',
            borderRadius: '4px', padding: '8px 16px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            Back
          </button>
        </div>
        <div style={{ backgroundColor: '#EEE', height: '100%', width: '50%' }}>
          <h1>Carrito de compras</h1>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 , marginRight: 10, marginLeft: 15 }}>
            {cartItems1.map(item => (

              <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div>
                  <img src={item.image} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: "bold" }}>{item.category}</span>
                    <span style={{ fontWeight: "bold" }}>${item.price}</span>
                  </div>
                  <h3 style={{ marginBottom: "5px" }}>{item.name}</h3>
                  <p style={{ display: "inline-block", marginRight: "10px" }}>Cantidad: {item.quantity}</p>
                </div>
              </li>

            ))}

            {/* <li key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr 100px',
            alignItems: 'center', padding: 10, borderBottom:' 1px solid #ccc'}}>
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">${item.price}</div>
              </li> */}
          </ul>
          <div style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="add discount code"
              style={{
                padding: "5px",
                backgroundColor: "white",
                color: "black",
                border: "3px solid black",
                width: '80%',
                margin: 15,
                borderRadius: 10,
              }}
            />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "10px",
                width: '20%',
                margin: 15,
              }}
            >
              Apply
            </button>
          </div>
 
          <div style={{display: 'flex'}}>
          <table >
            <tbody>
              <tr>
                <td style={{ textAlign: 'left', borderTop: '1px solid black' }}>Subtotal</td>
                <td style={{ textAlign: 'right', borderTop: '1px solid black' }}>$10</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderTop: '1px solid black' }}>Tax</td>
                <td style={{ textAlign: 'right', borderTop: '1px solid black' }}>$10</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', borderTop: '1px solid black' }}>Shipping</td>
                <td style={{ textAlign: 'right', borderTop: '1px solid black' }}>$10</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}
