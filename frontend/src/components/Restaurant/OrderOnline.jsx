import React, { useState } from 'react'
import { AiOutlineCompass } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'

//components
import FoodList from '../Order-Online/FoodList'
import FoodMenuBtn from '../Order-Online/FoodMenuBtn'
import MenuListContainer from '../Order-Online/MenuListContainer'



const OrderOnline = () => {

  const [menu, setmenu] = useState([])
  const [selected, setselected] = useState('')

  const onClickHandler = (e) => {
    if (e.target.id) {
      setselected(e.target.id)
    }
    return
  }

  return (
    <>
      <div className='w-full h-screen flex'>
        <aside className='hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 h-screen w-1/4'>
          {menu.map((item, index) => (
            <MenuListContainer {...item} key={index} onClickHandler={onClickHandler} selected={selected} />
          ))}
        </aside>
        <div className='w-full px-3 md:w-3/4'>
          <div className='pl-3 mb-3'>
            <h2 className='text-xl font-semibold '>Order Online</h2>
            <h4 className='flex items-center gap-2 font-light text-gray-500'>
              <AiOutlineCompass /> Live Track Your Order <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className='flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5'>
            {menu.map((item,index) =>(
              <FoodList {...item} key={index} />
            ))}
          </section>
        </div>
      </div>
      <FoodMenuBtn menu={menu} onClickHandler={onClickHandler} selected={selected} />
    </>
  )
}

export default OrderOnline