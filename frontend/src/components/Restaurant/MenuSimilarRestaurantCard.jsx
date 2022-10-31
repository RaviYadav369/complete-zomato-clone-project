import React from 'react'
import { TiStar } from 'react-icons/ti'

const MenuSimilarRestaurantCard = (props) => {
  return (
    <div className='my-2 mx-2'>
      <div className='w-full h-48'>
        <img src={props.image} alt={props.title} className='w-full h-full object-cover rounded-t-md' />
      </div>
      <div className='flex flex-col gap-2 p-3'>
        <div className='font-semibold text-lg'>
          {props.title}
        </div>
        <div className='flex items-center justify-start text-sm gap-4'>
          <span className='flex items-center justify-between text-sm gap-2'>
            <span className='flex text-sm gap-2 justify-center bg-green-700 text-white px-2 py-1 rounded'>
              4.9 <TiStar />
            </span>
            Dining
          </span>
          <span className='flex items-center justify-start text-sm gap-2'>
            <span className='flex text-sm gap-2 justify-center bg-green-700 text-white px-2 py-1 rounded'>
              4.5 <TiStar />
            </span>
            Delivery
          </span>
        </div>
        <h4>Street Food, Tea, Bunerages </h4>
      </div>
    </div>

  )
}

export default MenuSimilarRestaurantCard