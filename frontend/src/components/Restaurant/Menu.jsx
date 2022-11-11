import React,{useState, useEffect} from 'react'

//redux 
import { useDispatch,useSelector } from 'react-redux'
import { getImage } from '../../redux/reducers/image/image.action'

import MenuCollection from './MenuCollection'

const Menu = () => {

const [menu, setmenu] = useState([])
const dispatch = useDispatch();
const reduxState = useSelector((globalState) => globalState.restaurant.specificRestaurant.restaurantData);


useEffect(() => {
  if (reduxState) {
    dispatch(getImage(reduxState?.menuImages)).then((data) => {
      const images = [];
      data.payload.images.map(({location}) => images.push(location))
      setmenu(images);
    });
  }
}, [reduxState])

  return (
    <div className='flex flex-col gap-3'>
      <MenuCollection menuTitle="Menu" pages={menu.length} images={menu} />

    </div>
  )
}

export default Menu


//"https://b.zmtcdn.com/data/menus/931/931/d40e86a957d1ed6e6fabe5a67a161904.jpg",
//   "https://b.zmtcdn.com/data/menus/931/931/36f8a3b9e5dbf6435f903c9a8745bcc8.jpg",
//   "https://b.zmtcdn.com/data/menus/931/931/8d6623791860b054953b6c2c14d61bcb.jpg",
//   "https://b.zmtcdn.com/data/menus/931/931/6d462a04051c0eabb0067149aa84cc64.jpg",
