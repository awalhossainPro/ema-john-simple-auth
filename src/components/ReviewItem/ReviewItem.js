import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const {name, shipping, price, img} = props.product;
    return (
        <div className='review-items'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-info-area'>
                <div className='review-item-info'>
                    <h3 title={name}>{name.length > 40 ? name.slice(0, 40)+"..." : name}</h3>
                    <p>Price: {price}</p>
                    <p>Shipping Charge: {shipping}</p>
                </div>
                <div>
                    <button onClick={ ()=> handleRemoveProduct(product)} className='delete-button-area'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;