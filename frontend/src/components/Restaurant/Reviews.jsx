import React, { useState,useEffect } from 'react'
import AddReviewCard from '../Reviews/AddReviewCard'
import { useParams } from 'react-router-dom'

//redux
import { useDispatch, useSelector } from 'react-redux'

//componenet
import ReviewCard from '../Reviews/ReviewCard'
import { getReview } from '../../redux/reducers/review/review.action'

const Reviews = () => {
  const {id} = useParams();

  const [reviews, setreviews] = useState([]);
  const dispatch = useDispatch();
  const updateReviews = useSelector((globalState) => globalState.review.reviews.reviews);

useEffect(() => {
  dispatch(getReview(id)).then((data) =>{
    setreviews(data.payload.reviews)
  }) 
}, [])

useEffect(() => {
  if (updateReviews) {
    setreviews(updateReviews);
  }
}, [updateReviews]);



  return (
    <div className='w-full h-full  flex-col md:flex md:flex-row relative gap-5'>
      <div className='w-full md:w-8/12 flex flex-col gap-3'>
        <div className='md:hidden mb-4 flex flex-col gap-2'>
          <AddReviewCard />
        </div>
        {reviews.map((review, index) => (
          <ReviewCard {...review} key={index} />
        ))}
      </div>
      <aside style={{ height: 'fit-content' }} 
      className='hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white p-3 shadow-md flex-col gap-4'>
        <AddReviewCard />
      </aside>
    </div>
  )
}

export default Reviews

    // {
    //   rating: 3.5,
    //   isRestaurantReviews: false,
    //   createdAt: "Fri Oct 14 2022 20:20:34 GMT+0530 (India Standard Time)",
    //   reviewsText: "Very bad experience.",
    // },
    // {
    //   rating: 4.5,
    //   isRestaurantReviews: false,
    //   createdAt: "Fri Oct 14 2022 20:19:34 GMT+0530 (India Standard Time)",
    //   reviewsText: "Very good experience.",
    // },