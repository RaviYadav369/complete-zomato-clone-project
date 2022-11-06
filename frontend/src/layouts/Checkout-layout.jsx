import React from 'react'
import CheckOutNavbar from '../components/Navbar/CheckOutNavbar'


const CheckoutLayout = (Component) => ({ ...props }) =>  {
  return (
    <>
    <CheckOutNavbar />
    <div className='container'>
      <Component {...props} />
    </div>
    </>
  )
}

export default CheckoutLayout