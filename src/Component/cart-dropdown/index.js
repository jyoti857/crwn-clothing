import React from 'react';
import CustomButton from '../custom-button';
import './cartdropdown.scss';

const CartDropdown = () =>(
    <div className = 'cart-dropdown'>
        <div className = 'cart-items'>
            <CustomButton>CHECKOUT</CustomButton>
            </div>
        </div>
)

export default CartDropdown;