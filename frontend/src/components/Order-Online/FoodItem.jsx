import React, { useState, useEffect } from 'react'
import ReactStars from 'react-rating-stars-component'
import { AiOutlinePlus } from 'react-icons/ai'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getFood } from '../../redux/reducers/food/food.action'
import { getImage } from '../../redux/reducers/image/image.action'
import { addIoCart } from '../../redux/reducers/cart/cart.action'

const FoodItem = (props) => {

    const [food, setfood] = useState({})
    const dispatch = useDispatch();

    const cart = useSelector((globalState ) => globalState.cart.cart)

    useEffect(() => {
        dispatch(getFood(props._id)).then((data) => {
            console.log(data);
            setfood(data.payload.foods)

            dispatch(getImage(data.payload.foods.photos)).then((data) => {
                const {images} = data.payload;
                images.length && setfood((prev) => ({...prev, image:images[0].location}))
            });
            return data.payload.foods
        }).then((data)=>{
           cart.forEach((each) => {
            if(each._id === data._id){
                setfood((prev) =>({...prev, isAddedToCart:true}))
            }
           });
        })

    }, [cart])

    const addFoodTOCart = () =>{
        dispatch(addIoCart({...food, quantity:1, totalPrice: food.price}))
        setfood((prev) =>({...prev, isAddedToCart:true}))
    }

    return (
        <>
            <div className='flex items-start gap-2'>
                {food?.name && (
                    <div className='flex items-start gap-4 w-full p-1'>
                        {food?.image && (
                            <div className='w-1/3 h-2/4 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden'>
                                <img src={food?.image} alt="food item" className="w-full h-full object-cover object-center" />
                            </div>
                        )}
                        <div className='w-3/4 md:w-7/12 flex flex-col gap-1'>
                            <div className='flex items-start justify-between'>
                                <h3 className='text-xl font-semibold'> {food?.name} </h3>
                            </div>
                            <ReactStars count={5} value={food?.rating} edit={false} />
                            <h5>₹ {food?.price}</h5>
                            <p>{food?.description}</p>
                            <button className="md:hidden flex items-center justify-center gap-2 text-zomato-400 bg-zomato-50 border-zomato-400 px-2 py-1 rounded-lg">
                                <AiOutlinePlus /> Add
                            </button>
                        </div>
                        <div className="hidden md:block w-2/12">
                            <button className="flex items-center justify-center gap-2 text-zomato-400 bg-zomato-50 border-zomato-400 px-2 py-1 rounded-lg " disabled={food?.isAddedToCart } onClick={addFoodTOCart}>
                                {food.isAddedToCart? ("Added") : (<> <AiOutlinePlus /> Add</>)}
                                
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default FoodItem