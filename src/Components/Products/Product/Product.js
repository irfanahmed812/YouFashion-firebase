import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {

    const { name, brand, price, img, stock } = product;

    return (
        <div>
            <div className="col">
                <div className="card card-img">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body product-info">
                        <h5 className="card-title">{name}</h5>
                        <p><small>Brand: {brand}</small></p>
                        <p><small>Stock: {stock}</small></p>
                        <p><small>Price: <span className="fw-bold">${price}</span></small></p>
                    </div>
                    <button className='btn-cart' onClick={() => handleAddToCart(product)}><i className="fa-solid fa-cart-shopping"></i> Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;