import React, { useState, useEffect } from 'react'

import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowDropup, IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import FoodItem from './FoodItem';

//redux
import { useSelector } from 'react-redux';

const CartSm = ({ toggle }) => {
  
  // const [cart, setcart] = useState([])

  const navigate = useNavigate();
  const continueToCheckout = () => navigate('/checkout/orders');

  const cart = useSelector((globalState) => globalState.cart.cart)

  useEffect(() => {
    
  }, [])
  

  return (
    <>
      <div className=' flex items-center justify-between'>
        <div className='flex flex-col items-start'>
          <small className='flex items-center gap-1' onClick={toggle}>
            {cart.length} Item <IoMdArrowDropup />
          </small>
          <h4>
          ₹{cart.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}{" "}
            <sub> plus tax </sub>
          </h4>
        </div>
        <button onClick={continueToCheckout} className='flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg'>
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  )

}



const CartContainer = () => {
  const [isOpen, setisOpen] = useState(false);

  // const [cart, setcart] = useState([])
  
  const cart = useSelector((globalState) => globalState.cart.cart)

  const toggleCart = () => setisOpen((prev) => !prev);
  const closeCart = () => setisOpen(false)

  return (
    <>
      {cart.length && (<>
        {isOpen && (
          <div className='fixed w-full overflow-y-scroll h-48 bg-white z-20 p-2 bottom-14 px-3'>
            <div className='flex items-center justify-between md:px-20'>
              <h3 className='font-semibold text-xl '>Your Orders</h3>
              <IoCloseSharp onClick={closeCart} className='cursor-pointer' />
            </div>
            <hr className='my-2' />
            <div className='flex flex-col gap-2 md:px-20'>
              {cart.map((food, index) => (
                <FoodItem key={index} {...food} />
              ))}
            </div>
          </div>
        )}

        <div className='fixed w-full bg-white z-10 p-2 px-3 bottom-0 mx-auto lg:px-20'>
          <CartSm toggle={toggleCart} />
        </div>
      </>)}
    </>
  )
}

export default CartContainer



  //  { image:
  //     "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
  //   name: "Butter Pancakes with Bacon",
  //   rating: 4.5,
  //   price: 200,
  //   description: "Rashers and bourbon caramel sauce.",
  //   quantity: 3,
  //   totalPrice: 600,
  // },
  // {
  //   image:
  //     "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
  //   name: "Amritsari Fish Tikka",
  //   rating: 5,
  //   price: 250,
  //   quantity: 1,
  //   totalPrice: 250,
  //   description:
  //     "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
  // },

      // {
    //   image:
    //     "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
    //   name: "Butter Pancakes with Bacon",
    //   rating: 4.5,
    //   price: 200,
    //   description: "Rashers and bourbon caramel sauce.",
    //   quantity: 3,
    //   totalPrice: 600,
    // },
    // {
    //   image:
    //     "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
    //   name: "Amritsari Fish Tikka",
    //   rating: 5,
    //   price: 250,
    //   quantity: 1,
    //   totalPrice: 250,
    //   description:
    //     "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
    // },