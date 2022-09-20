import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    let tax = parseFloat((total * 0.15).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: <span className='bold'>{quantity}</span></p>
            <p>Total Price: <span className='bold'>${total}</span> </p>
            <p>Total Shipping: <span className='bold'>${shipping}</span> </p>
            <p>Tax: <span className='bold'>${tax}</span> </p>
            <h4>Grand Total: <span className='bold'>${grandTotal}</span> </h4>
            <p className='child-button'>
                {props.children}
            </p>
        </div>
    );
};

export default Cart;