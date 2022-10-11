import React from 'react'
import { Outlet } from 'react-router-dom'
import RestaurantLayout from '../layouts/Restaurant-layout'

const RestaurantPage = () => {
  return (
    <>
    <h2>restaurant</h2>
    <Outlet/>
    </>
  )
}

export default RestaurantLayout(RestaurantPage) 