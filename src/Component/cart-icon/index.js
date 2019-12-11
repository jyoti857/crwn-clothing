import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import './carticon.scss';
import { setToggleCartHidden } from '../../redux/cart/cart-action';
import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CartIcon = ({setToggleCartHidden, item_count})  =>{
    return(<div className = 'cart-icon' onClick = {setToggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon' />    
        <span className = 'item-count'>{item_count}</span>
    </div>
    )
}

// it was working fine, then I refractored with reselect, notice below code 
// const mapStateToProps = ({cart:{cartItems}}) =>({
//     item_count: cartItems.reduce((acc, cartItem)=> acc+cartItem.quantity, 0),
// })


const mapStateToProps = state =>({
    item_count: selectCartItemsCount(state),
})

const mapDispatchToProps = dispatch =>({
    setToggleCartHidden : () => dispatch(setToggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
