import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart, clearCart } = props;

    let total = 0;
    let quantity = 0;
    let shipping = 0;

    for (const product of cart) {
        console.log(product);

        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <button className="btn-cart-preview position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"><i className="fa-solid fa-cart-shopping"></i> View Cart <span className="notification translate-middle badge rounded-pill notification-bg text-light">{quantity}</span></button>

            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-bold" id="staticBackdropLabel">Order Summary</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className='order-info'>
                        <div className="order-cus">
                            <p>Selected Iems:</p><span className="fw-semibold">{quantity}</span>
                        </div>
                        <div className="order-cus">
                            <p>Total Price: </p><span className="fw-semibold">${total}</span>
                        </div>
                        <div className="order-cus">
                            <p>Shipping Charge: </p><span className="fw-semibold">${shipping}</span>
                        </div>
                        <div className="order-cus">
                            <p>Tax: </p><span className="fw-semibold">${tax}</span>
                        </div>
                        <span className='span-col'></span>
                        <div className="order-cus">
                            <h6>Grand Total: </h6><span className='fw-bold'>${grandTotal}</span>
                        </div>
                        <div className="pt-4">
                            <button className='clear-btn' onClick={clearCart}>Clear Cart</button>
                        </div>
                        <div className="pt-4">
                            <button className='order-btn'>Order Now <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;