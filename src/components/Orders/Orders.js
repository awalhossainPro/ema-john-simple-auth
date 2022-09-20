import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import './Orders.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const Orders = () => {
    const addToCartHandler = (selectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(item => item.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    const navigate = useNavigate();
    return (
        <div>
            <div className="shop-container">
                <div className="review-product-container">
                    {
                        cart.map(product => <ReviewItem
                            key={cart.id}
                            product={product}
                            addToCartHandler={addToCartHandler}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>

                <div className="cart-container">                    
                    <Cart cart={cart}>
                        <button onClick={() => navigate('/inventory')}>Proceed Checkout <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                    </Cart>                    
                </div>
            </div>
        </div>
    );
};

export default Orders;