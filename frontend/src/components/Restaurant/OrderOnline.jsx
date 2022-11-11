import React, { useState,useEffect } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//components
import FoodList from "../Order-Online/FoodList";
import FoodMenuBtn from "../Order-Online/FoodMenuBtn";
import MenuListContainer from "../Order-Online/MenuListContainer";

//redux 
import {useSelector, useDispatch} from 'react-redux'
import {getFoodList} from '../../redux/reducers/food/food.action'

const OrderOnline = () => {
  const [menu, setMenu] = useState([ ]);

  const [selected, setselected] = useState("");

  const dispatch = useDispatch();
  const restaurant = useSelector((globaldata) => globaldata.restaurant.specificRestaurant.restaurantData)

  useEffect(() => {
   restaurant && dispatch(getFoodList(restaurant.menu)).then((data) => {
    // console.log(data);
    setMenu(data.payload.menus.menus)
   })
  }, [restaurant])
  

  const onClickHandler = (e) => {
    if (e.target.id) {
      setselected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="w-full items-start flex">
        <aside className="hidden sticky top-16 h-screen md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200  w-1/4">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
              target={index}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4 sticky overflow-y-scroll h-screen top-16">
          <div className="pl-3 mb-3">
            <h2 className="text-xl font-semibold ">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  overflow-y-scroll flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList {...item} key={index} />
            ))}
          </section>
        </div>
      </div>
      <FoodMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
};

export default OrderOnline;


 // {
    //   name: "Today's Special",
    //   items: [
    //     {
    //       image:
    //         "https://b.zmtcdn.com/data/dish_photos/af1/fd1b012ebfbe82f2e5212b702ce19af1.jpg",
    //       name: "Butter Pancakes with Bacon",
    //       rating: 4.5,
    //       price: 695,
    //       description: "Rashers and bourbon caramel sauce.",
    //     },
    //     {
    //       image:
    //         "https://b.zmtcdn.com/data/dish_photos/077/28e7baadea310b7b337fd2fb3f653077.jpg",
    //       name: "Amritsari Fish Tikka",
    //       rating: 5,
    //       price: 545,
    //       description:
    //         "Fish marinated in flavourful lemon-chilli masala roasted in the tandoor with care. Serves 2-3 people.",
    //     },
    //     {
    //       image:
    //         "https://b.zmtcdn.com/data/dish_photos/599/111dd44381fecc63bb4bf37ab8179599.jpg",
    //       name: "Amritsari Fish Tikka",
    //       rating: 3.5,
    //       price: 375,
    //       description:
    //         "Spiced chicken minced and toasted served with butter buns.",
    //     },
    //   ],
    // },
    // {
    //   name: "Soup",
    //   items: [
    //     {
    //       image:
    //         "https://b.zmtcdn.com/data/dish_photos/c7b/da86667e2a69ff4467c4155a7219fc7b.jpg",
    //       name: "Chicken & Corn Soup",
    //       rating: "4.5",
    //       price: "1970",
    //       description: "",
    //     },
    //     {
    //       image:
    //         "https://b.zmtcdn.com/data/dish_photos/c3c/7ed2652d58a67ce963704db111b44c3c.jpg",
    //       name: "Chicken Manchow Soup",
    //       rating: "4",
    //       price: "190",
    //       description: "",
    //     },
    //     {
    //       image:
    //         "https://b.zmtcdn.com/data/dish_photos/03e/1834a3a8fb1d08bba554e6c35ee6d03e.jpg",
    //       name: "Hot & Sour Soup",
    //       rating: "3",
    //       price: "165",
    //       description: "",
    //     },
    //   ],
    // },
