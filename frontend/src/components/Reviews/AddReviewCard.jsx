import React,{useState} from 'react'

import ReviewModal from './ReviewModal'

const AddReviewCard = () => {

const [isOpen, setisOpen] = useState(false)
const [type, settype] = useState("Dining")

const openModal =() =>{
    // if(!localStorage.zomatoUser){
    //     return alert("Please Sign In to post a Review")
    // }
    setisOpen(true)
}
const getReviewType = (type) =>{
    settype(type) 
}


  return (
    <>
    <ReviewModal isOpen={isOpen} setisOpen={setisOpen} />
    <h3 className='text-xl font-medium'> Rate your experience for</h3>
    <div className='flex items-center gap-3'>
        <div className='flex items-center gap-2'>
            <input type={"radio"} name="review" id='dining' onChange={(each) => getReviewType(each.target.name)} />
            <label htmlFor='dining'>Dining</label>
        </div>
        <div className='flex items-center gap-2'>
            <input type={"radio"} name="review" id='delivery' />
            <label htmlFor='delivery'>Delivery</label>
        </div>
    </div>
    <button onClick={openModal} className="text-zomato-500 w-28"> Write a review</button>
    </>
  )
}

export default AddReviewCard