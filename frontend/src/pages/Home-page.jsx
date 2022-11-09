import React from 'react'
import { useParams } from 'react-router-dom'
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/NightLife';
import Nutrition from '../components/Nutrition';
import HomeLayout from '../layouts/Homepage-layout'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRestaurant } from '../redux/reducers/restaurant/restaurant.action';

const HomePage = () => {

  const { type } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurant())
  }, [])


  return (
    <>
      <div className='my-5 sm:mb-20 md:mb-10'>

        {type === 'delivery' && <Delivery />}
        {type === 'dining' && <Dining />}
        {type === 'night' && <NightLife />}
        {type === 'nutri' && <Nutrition />}
      </div>
    </>

  )
}

export default HomeLayout(HomePage) 