import React from 'react'


const CheckoutLayout = (Component) => ({ ...props }) =>  {
  return (
    <>
    
    {/* <Navbar/> */}
    <div className='container'>
      <Component {...props} />
    </div>
    </>
  )
}

export default CheckoutLayout