import {GET_USER, CLEAR_USER,SELF} from './user.type'

const initialState = {
    user:{}
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_USER:
        return{
            ...state,
        }
        case SELF :
            return{
                ...state,
                ...action.payload,
            }
        case CLEAR_USER :
            return {
                
            }
        default :
            return {
                ...state,
            }

    }
}

export default userReducer;