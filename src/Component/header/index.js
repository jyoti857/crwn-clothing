import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import './header.scss';
import { auth } from '../../firebase/firebase-utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

const Header = ({currentUser, hidden}) =>{
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


const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) =>({
    currentUser,
    hidden
});

export default connect(mapStateToProps, {})(Header);

// export default Header;