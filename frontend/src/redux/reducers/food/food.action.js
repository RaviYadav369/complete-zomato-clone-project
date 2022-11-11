import axios from "axios";

import { GET_FOOD, GET_FOOD_LIST } from "./food.type";

export const getFood =(foodId) => async(dispatch) =>{
    try {
        const food = await axios({
            method:"GET",
            url:`${process.env.REACT_APP_FRONTEND_URL}food/${foodId}`,
        })

        return dispatch({type:GET_FOOD, payload:food.data})
        
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}
export const getFoodList =(menuId) => async(dispatch) =>{
    try {
        const menu = await axios({
            method:"GET",
            url:`${process.env.REACT_APP_FRONTEND_URL}menu/list/${menuId}`,
        })

        return dispatch({type:GET_FOOD_LIST, payload:menu.data})
        
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}