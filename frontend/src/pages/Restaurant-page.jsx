import React, { useEffect } from 'react'
import { Outlet, useParams, useLocation, Navigate } from 'react-router-dom'

//redux
import { useDispatch } from 'react-redux';
import { getCart } from '../redux/reducers/cart/cart.action';


const RestaurantPage = () => {

  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart())
  }, [])


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