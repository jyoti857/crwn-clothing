import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button';
import { addItems } from '../../redux/cart/cart-action';
import {connect} from 'react-redux';

const CollectionItem = ({item, addItems}) =>{
    const { name, price, imageUrl} = item;
    return(
        <div className="collection-item">
            <div className='image'
            style = {{
                backgroundImage:`url(${imageUrl})`
            }} />
                <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItems(item)} > ADD TO CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch =>({
    addItems : (item) => dispatch(addItems(item)),         
})

export default connect(null, mapDispatchToProps)(CollectionItem);