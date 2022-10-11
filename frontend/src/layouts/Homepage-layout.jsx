import React from 'react'

const HomeLayout = (Component) => ({ ...props }) => {
  return (
    <>
    <div className='container'>
      <Component {...props} />
    </div>
    </>
  )
}

export default HomeLayout