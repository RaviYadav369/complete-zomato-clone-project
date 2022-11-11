import axios from 'axios'

import { GET_REVIEW, POST_REVIEW } from './review.type'

export const getReview = (resId) => async (dispatch) => {
    try {
        const reviewList = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_FRONTEND_URL}review/${resId}`,
        })
// console.log(reviewList);
       return dispatch({ type: GET_REVIEW, payload: reviewList.data })

    } catch (error) {
        dispatch({ type: 'ERROR', payload: error })
    }
}
export const postReview = (reviewData) => async (dispatch) => {
    try {
        await axios({
            method: "POST",
            url: `${process.env.REACT_APP_FRONTEND_URL}review/new`,
            data: { reviewData },
        })

// console.log(reviewData);
       return dispatch({ type: POST_REVIEW, payload: reviewData })

    } catch (error) {
        dispatch({ type: 'ERROR', payload: error })
    }
}