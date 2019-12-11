import React from 'react';
import CustomButton from '../custom-button';
import {withRouter} from 'react-router-dom';
import './cartdropdown.scss';
import {connect} from 'react-redux';
import CartItem from '../cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { setToggleCartHidden } from '../../redux/cart/cart-action';

const CartDropdown = ({cartItems, history, ...otherProps}) =>{
    console.log('... other props from cartDropdown --->', otherProps)
    return(
        <div className = 'cart-dropdown'>
            <div className = 'cart-items'>
                {cartItems.length ? cartItems.map(cartItem  => <CartItem key={cartItem.id} item = {cartItem}/>) : 
                <div className = 'empty-cart'>Your cart is empty</div>}
                </div>
                <CustomButton onClick = {
                    () => {history.push('/checkout');
                    otherProps.dispatch(setToggleCartHidden());
                }}>CHECKOUT</CustomButton>
            </div>
    );
}
const mapStateToProps = (state) =>({
    cartItems : selectCartItems(state),
})
export default withRouter(connect(mapStateToProps, null)(CartDropdown));