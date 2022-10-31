import React from 'react'
import { Outlet, useParams, useLocation, Navigate } from 'react-router-dom'
import RestaurantLayout from '../layouts/Restaurant-layout'

const RestaurantPage = () => {

  const { id } = useParams();
  const { pathname } = useLocation();

  if (`/restaurant/${id}` === pathname) {
    return <Navigate to={`/restaurant/${id}/overview`} />;
  }


  return (
    <>
      <Outlet />
    </>
  )
}

export default RestaurantPage 