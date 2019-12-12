import React from 'react';
import './checkoutpage.scss';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart-selectors';
import CheckoutItem from '../../Component/checkout-item';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutPage = ({cartItems, total}) =>{
    return(
        <div className = 'checkout-page'>
            <div className = 'checkout-header'>
                <div className='checkout-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-block'>
                    <span>Description</span>
                </div>
                <div className='checkout-block'>
                    <span>Price</span>
                </div>
                <div className='checkout-block'>
                    <span>Reomve</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem  key  = {cartItem.id} cartItem = {cartItem}/>
            ))}
            <div className = 'total'>
                <span>Total: ${total}</span>
            </div>
            <div className = 'test-warning'>
                *please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242  - Exp: 01/20  - cvv: 123
            </div>
            <StripeCheckout price = {total} />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage);