// Here we will create the reducer and reducer always take the inital state and the action 
import { ActionTypes } from "../constants/action-types";
const intialState = {
    products: [],
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
    // console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const selectedCategoryReducer = (state = {}, { type, payload }) => {
    // console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_CATEGORY:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_CATEGORY:
            return {};
        default:
            return state;
    }
};