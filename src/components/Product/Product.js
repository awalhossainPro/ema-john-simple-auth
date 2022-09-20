import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({product, addToCartHandler}) => {
    // const {product, addToCartHandler} = props;
    const {name, img, price, seller, ratings} = product;
    // console.log(props)
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p id='price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={() => addToCartHandler(product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} id='cartIcon'></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;