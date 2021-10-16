// 3 Actions - for the set products , selected products and remove selected products
import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        // Action always returns an object (Plain JS obj) which has a key as type and the payload.
        type: ActionTypes.SET_PRODUCTS, // Type of the action we want to perform
        payload: products, // Data
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };

};
export const selectedCategory = (product) => {
    return {
        type: ActionTypes.SELECTED_CATEGORY,
        payload: product,
    };
};