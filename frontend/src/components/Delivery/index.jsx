import React,{useState} from 'react'



//components
import DeliveryCarousel from './DeliveryCarousel'

const Delivery = () => {

  const [restaurantList, setrestaurantList] = useState([])

  return (
    <>
    <DeliveryCarousel />
    <h1 className='text-xl mt-4 mb-2 md:mt-4 md:text-3xl md:font-semibold'>
      Delivery Restaurant in NCR (Delhi)
    </h1>
    <div className='flex justify-between flex-wrap mt-5'>
      {/* {restaurantList.map((restaurant) =>{
        <RestaurantList {...restaurant} key={restaurant._id} />
      })} */}
    </div>
    </>
  )
}

export default Delivery