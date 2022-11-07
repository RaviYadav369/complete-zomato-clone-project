import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from './pages/Home-page'
import RestaurantPage from './pages/Restaurant-page'
import GoogleAuthPage from './pages/GoogleAuth-page'
import CheckoutPage from './pages/Checkout-page'
import Overview from './components/Restaurant/Overview'
import OrderOnline from './components/Restaurant/OrderOnline'
import Reviews from './components/Restaurant/Reviews'
import Menu from './components/Restaurant/Menu'
import Photos from './components/Restaurant/Photos'
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getMySelf } from './redux/reducers/user/user.action';

import RestaurantLayout from './layouts/Restaurant-layout';


function App() {
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getMySelf());
  }, [localStorage])
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/delivery' />} />
        <Route path='/:type' element={<HomePage />} />
        <Route path='/google/:token' element={<GoogleAuthPage />} />
        {/* <Route path='/restaurant/:id' element={<RestaurantPage />} /> */}
        {/* <Route path='restaurant/:id' element={<RestaurantPage />}> */}
        <Route
          path="/restaurant/:id"
          element={
            <RestaurantLayout>
              <RestaurantPage />
            </RestaurantLayout>
          }
        >
          <Route path='overview' element={<Overview />} />
          <Route path='order-online' element={<OrderOnline />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='menu' element={<Menu />} />
          <Route path='photos' element={<Photos />} />
        </Route>
        <Route path='/checkout/orders' element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
