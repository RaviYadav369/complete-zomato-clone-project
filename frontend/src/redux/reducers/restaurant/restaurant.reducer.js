import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

const initialState = {
  restaurants: [],
  specificRestaurant: {},
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT:
      return {
        ...state,
        restaurants: [...action.payload],
      };
    case GET_SPECIFIC_RESTAURANT:
      return {
        ...state,
        specificRestaurant: { ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;