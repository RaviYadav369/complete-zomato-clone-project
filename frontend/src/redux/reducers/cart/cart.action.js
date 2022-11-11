
import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./cart.type";

export const getCart = () => (dispatch) => {
    try {
        let cartData = { cart: [] }

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem('zomatoCart'))

            cartData.cart = cart;
        }
        return dispatch({ type: GET_CART, payload: cartData.cart })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const addIoCart = (newFood) => (dispatch) => {
    try {
        let cartData = { cart: [] }

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem('zomatoCart'))

            cartData.cart = cart;
        }
        cartData.cart.push(newFood);
        localStorage.setItem('zomatoCart', JSON.stringify({ cart: cartData.cart }))

        return dispatch({ type: ADD_TO_CART, payload: cartData.cart })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const deleteCart = (foodId) => (dispatch) => {
    try {
        let cartData = { cart: [] }

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem('zomatoCart'))

            cartData.cart = cart;
        }

        if (!cartData.cart.length) {
            alert("cart is empty");
            return dispatch({ type: "ERROR", payload: "Cart is Empty" })
        }

        cartData.cart = cartData.cart.filter(({ _id }) => _id !== foodId)

        localStorage.setItem('zomatoCart', JSON.stringify({ cart: cartData.cart }))

        return dispatch({ type: DELETE_FROM_CART, payload: cartData.cart })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const incrementQuantity = (foodId) => (dispatch) => {
    try {
        let cartData = { cart: [] }

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem('zomatoCart'))

            cartData.cart = cart;
        }
        cartData.cart = cartData.cart.map((food) =>
            food._id === foodId ?
                {
                    ...food,
                    quantity: food.quantity + 1,
                    totalPrice: food.price * (food.quantity + 1)
                }
                : food)

        localStorage.setItem('zomatoCart', JSON.stringify({ cart: cartData.cart }))

        return dispatch({ type: INCREMENT_QUANTITY, payload: cartData.cart })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}

export const decrementQuantity = (foodId) => (dispatch) => {
    try {
        let cartData = { cart: [] }

        if (localStorage.zomatoCart) {
            const { cart } = JSON.parse(localStorage.getItem('zomatoCart'))

            cartData.cart = cart;
        }
        cartData.cart = cartData.cart.map((food) =>
            food._id === foodId ?
                {
                    ...food,
                    quantity: food.quantity - 1,
                    totalPrice: food.quantity === 0
                        ? food.price * food.quantity
                        : food.price * (food.quantity - 1)
                }
                : food)

        localStorage.setItem('zomatoCart', JSON.stringify({ cart: cartData.cart }))

        return dispatch({ type: DECREMENT_QUANTITY, payload: cartData.cart })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
}