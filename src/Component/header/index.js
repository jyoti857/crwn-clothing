import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import './header.scss';
import { auth } from '../../firebase/firebase-utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';

const Header = ({currentUser, hidden}) =>{
    console.log("from header --->", currentUser);
    return(
        <div className = 'header'>
            <Link className = 'logo-container' to = '/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {currentUser ? <div className='option' onClick = {() => auth.signOut()}>
                    SIGNOUT
                </div>: <Link className = 'option' to = '/signin'>
                        SIGNIN
                    </Link>}
                <CartIcon />
                </div>
                {hidden ?<CartDropdown />: ""}
        </div>
    )
};
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
//     currentUser,
//     hidden,
// const mapStateToProps = state =>({
//     currentUser: selectCurrentUser(state),
//     hidden : selectCartHidden(state)
// });
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps, {})(Header);

// export default Header;