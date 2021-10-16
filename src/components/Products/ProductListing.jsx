import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts, selectedCategory } from "../../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import { useParams } from "react-router-dom";

const ProductListing = () => {
    const { category } = useParams(); // to get the ID from the route rendered/URL Parameter
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    const fetchCategoryProduct = async (category) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedCategory(response.data));
        // console.log(response.data)
    };

    useEffect(() => {
        // console.log(category)
        if (category && category !== "") fetchCategoryProduct(category);
        else fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return (
        <div className="ui grid container">
            {/* {console.log(category)} */}
            <ProductComponent />
        </div>
    );
}

export default ProductListing