import React from 'react';
import {connect} from 'react-redux';

import './collection.scss';
import { selectCollectionById } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../Component/collection-item';

const CollectionPage = ({collectionById}) => {
    console.log("&&&&&&&&& colleciton Page _---------> ", collectionById)
    const {title, items} = collectionById;
    console.log("()$()##$-> ", collectionById);
    return(
        <div className = 'collection-page'>
            <h2 className='title'>{title? title:""}</h2>
            <div className ='items'>
                {items.map(item=> <CollectionItem key = {item.id} item={item} />)}
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) =>({
    collectionById: selectCollectionById(ownProps.match.params.categoryId)(state),
})

export default connect(mapStateToProps, null)(CollectionPage);