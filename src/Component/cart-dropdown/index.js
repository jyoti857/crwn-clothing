import React from 'react';
import CustomButton from '../custom-button';
import './cartdropdown.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item';

const CartDropdown = ({cartItems}) =>(
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            {cartItems.map(cartItem  => <CartItem key={cartItem.id} item = {cartItem}/>)}
            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
);

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})
export default connect(mapStateToProps, null)(CartDropdown);