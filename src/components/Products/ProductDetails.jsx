/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct, addToCart } from "../../redux/actions/productsActions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";

const ProductDetails = () => {

    const { productId } = useParams(); // to get the ID from the route rendered/URL Parameter

    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;

    const dispatch = useDispatch();

    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
            dispatch(removeSelectedProduct());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);

    const handleAddCart = (e) => {
        dispatch(addToCart(product));
        alert("Item added to your cart");
    };

    return (
        <>
            <Navbar />
            <div className="ui grid container">
                {Object.keys(product).length === 0 ? (
                    <div>...Loading</div>
                ) : (
                    <div className="ui placeholder segment">
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">AND</div>
                            <div className="middle aligned row">
                                <div className="column lp">
                                    <img className="ui fluid image" src={image} />
                                </div>
                                <div className="column rp">
                                    <h1>{title}</h1>
                                    <h2>
                                        <a className="ui teal tag label">${price}</a>
                                    </h2>
                                    <h3 className="ui brown block header">{category}</h3>
                                    <p>{description}</p>
                                    <div className="ui vertical animated button" tabIndex="0" onClick={(e) => handleAddCart(e)}>
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>

    );
};

export default ProductDetails;
