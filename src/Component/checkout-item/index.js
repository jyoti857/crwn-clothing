import React from 'react';
import './checkoutitem.scss';
import {connect} from 'react-redux';
import { removeItem, removeOneItem, addItems } from '../../redux/cart/cart-action';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CheckoutItem =({cartItem, addItems, removeItem, removeOneItem}) =>{
    const {name, price, imageUrl, quantity} = cartItem;
    return(
        <div className = 'checkout-item'>
            <div className = 'image-container'>
                <img alt = 'item' src ={imageUrl} />
            </div>
            <span className = 'name'>{name}</span>
            <span className = 'quantity'>
                <div className='arrow' onClick={()=>removeOneItem(cartItem)}>&#10094;</div>
                {quantity}
                <div className = 'arrow' onClick={()=> addItems(cartItem)}>&#10095;</div>
            </span>
            <span className = 'price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapStateToProps =createStructuredSelector({
    item_count: selectCartItemsCount,
})
const mapDispatchToProps = dispatch =>({
    removeItem : item => dispatch(removeItem(item)),
    removeOneItem : item => dispatch(removeOneItem(item)),
    addItems: item => dispatch(addItems(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);