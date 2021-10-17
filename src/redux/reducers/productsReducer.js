// Here we will create the reducer and reducer always take the inital state and the action 
import { ActionTypes } from "../constants/action-types";
const intialState = {
    products: [],
};

const intialCategoryState = {
    product: [],
};

const intialCartProductState = {
    cartProduct: [],
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

export const selectedCategoryReducer = (state = intialCategoryState, { type, payload }) => {
    // console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_CATEGORY:
            return {...state, product: payload };
        default:
            return state;
    }
};

export const selectedCartProductReducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_CART_PRODUCT:
            return state.concat(action.item)
        case ActionTypes.REMOVE_FROM_CART:
            const indx = state.indexOf(action.item)
            return state.filter((_, idx) => indx !== idx)

        default:
            return state;
    }
};