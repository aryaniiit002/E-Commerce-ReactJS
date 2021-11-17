// Here we will create the reducer and reducer always take the inital state and the action 
import { ActionTypes } from "../constants/action-types";
const intialState = {
    products: [],
};

const intialCategoryState = {
    product: [],
};

const cartItems = {
    item: [],
};

// Reducers
export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        // We will update the state with the payload that we have received the data from the server
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const selectedCategoryReducer = (state = intialCategoryState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CATEGORY:
            return {...state, product: payload };
        default:
            return state;
    }
};

export const selectedCartProductReducer = (state = cartItems, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_CART_PRODUCT:
            const inCart = state.item.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                item: inCart ?
                    state.item.map((item) =>
                        item.id === action.payload.id ? {...item, qty: item.qty + 1 } : item) : [...state.item, {...action.payload, qty: 1 }],
            };

        case ActionTypes.REMOVE_FROM_CART:
            const alreadyInCart = state.item.find((item) =>
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                item: alreadyInCart ?
                    state.item.map((item) =>
                        item.id === action.payload.id ? {...item, qty: item.qty - 1 } : item) : [state.item.filter((item) => item.id !== action.payload.id)],
            };

        default:
            return state;
    }
};