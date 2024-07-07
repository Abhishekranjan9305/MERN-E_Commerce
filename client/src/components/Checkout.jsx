import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import TableProduct from './TableProduct';



const Checkout = ()=>{
  const {cart,userAddress}=useContext(AppContext)
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(0)

  
  //console.log(cart);

  console.log("user Address", userAddress)

  // const [qty, setQty] = useState(0)
  // const [price, setPrice] = useState(0)


  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (cart?.items) {
      for (let i = 0; i < cart.items?.length; i++) {
        qty += cart.items[i].qty;
        price += cart.items[i].price;
      }
    }
    setPrice(price)
    setQty(qty)

  }, [cart])

 




  return (
    <>
      <div className="container my-3">
        <h1 className='text-center'>Order Summary</h1>



        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className='bg-dark text-light text-center '>
                Product Details
              </th>
              <th scope="col" className='bg-dark text-light text-center '>
                Shipping Address
              </th>
            </tr>
          </thead>
          <tbody className='bg-dark'>
            <tr>

              <td className='bg-dark text-light'>
                <TableProduct cart={cart} />
              </td>
              <td className='bg-dark text-light'>
                <ul style={{fontWeight:'bold'}}>

                  <li>Name :{" "} {userAddress?.fullName}</li>
                  <li>Phone :{" "} {userAddress?.phoneNumber}</li>
                  <li>Country :{" "} {userAddress?.country}</li>
                  <li>State :{" "} {userAddress?.state}</li>
                  <li>Pincode :{" "} {userAddress?.pincode}</li>
                  <li>Near By :{" "} {userAddress?.address}</li>
          
                </ul>
              </td>

            </tr>
          </tbody>
        </table>


      </div>

      <div className="container text-center my-5">
        <button className="btn btn-secondary btn-lg" style={{fonweight:'bold'}}>
          Proceed To Pay
          </button>
      </div>

    </>
  )
}
  

export default Checkout