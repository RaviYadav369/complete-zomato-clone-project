import React from 'react'
import { TiStarOutline } from 'react-icons/ti'
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri'
import { BiBookmarkPlus } from 'react-icons/bi'

// Component
import Navbar from '../components/Navbar';
// import ImageGrid from '../components/Restaurant/ImageGrid';
// import InfoButton from '../components/Restaurant/InfoButton';
// import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
// import Tasbs from '../components/Restaurant/Tasbs';
// import CartContainer from '../components/Cart/CartContainer';

const RestaurantLayout = (Component) => ({ ...props }) => {
  return (
    <>
      <Navbar />

      <div>
        <Component {...props} />
      </div>

      {/* <div className='container mx-auto px-4 mt-8 lg:px-20 pb-20'>
        <ImageGrid images={ } />
        <RestaurantInfo name='' restaurantRating='' deliveryRating='' cuisine='' address='' />
        <div className='my-4 flex flex-wrap gap-3 mx-auto'>
          <InfoButton isActive='true'>
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton  >
            <RiDirectionLine /> Direction
          </InfoButton>
          <BiBookmarkPlus >
            <TiStarOutline /> Bookmark
          </BiBookmarkPlus>
          <RiShareForwardLine>
            <TiStarOutline /> Share
          </RiShareForwardLine>
        </div>
        <div className='my-10'>
          <Tasbs />

        <CartContainer/> */}
      
    </>
  )
}

export default RestaurantLayout