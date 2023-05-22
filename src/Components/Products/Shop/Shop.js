import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';


const Shop = () => {

    useEffect(() => {
        document.title = 'Product'
    }, []);

    const products = useLoaderData();


    const [cart, setCarts] = useState([]);

    // add to cart
    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCarts(newCart);
    }

    // clear cart
    const clearCart = () => {
        setCarts([])
    }

    return (
        <div className='py-5 mt-5 container'>
            <div className="cart-container">
                {
                    <Cart clearCart={clearCart} cart={cart}></Cart>
                }
            </div>
            <div className=''>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;