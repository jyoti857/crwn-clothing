import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';
import './carticon.scss';
import { setToggleCartHidden } from '../../redux/cart/cart-action';
import {connect} from 'react-redux';

const CartIcon = ({setToggleCartHidden})  =>{
    return(<div className = 'cart-icon' onClick = {setToggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon' />
        <span className = 'item-count'>0</span>
    </div>
    )
}
const mapDispatchToProps = dispatch =>({
    setToggleCartHidden : () => dispatch(setToggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon);
