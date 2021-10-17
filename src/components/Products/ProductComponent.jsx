import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const categoryProducts = useSelector((state) => state.category.product);
    // console.log(categoryProducts)

    const renderList = (categoryProducts.length !==0 ?categoryProducts:products).map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/category/${category}/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default ProductComponent;
