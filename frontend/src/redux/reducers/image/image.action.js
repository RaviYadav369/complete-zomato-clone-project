import axios from "axios";
//redux
import { GET_IMAGE } from './image.type'

export const getImage =(_id) =>async (dispatch) =>{
    try {
        const image = await axios({
            method:"GET",
            url:`${process.env.REACT_APP_FRONTEND_URL}images/${_id}`,
        })
        // console.log(image.data.image);
        return dispatch({type:GET_IMAGE, payload:image.data.image})
        
    } catch (error) {
        return dispatch({type:"ERROR", payload:error})
    }
}