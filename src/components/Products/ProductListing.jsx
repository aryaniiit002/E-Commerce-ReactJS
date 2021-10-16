import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

// We will get the data from the server and then dispatch an action and update our store.
const ProductListing = () => {
    // Fetch the product we have in our redux store 
    // const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="ui grid container">
            
            <ProductComponent />
        </div>
    );
}

export default ProductListing