import React from 'react';
import CollectionPreview from '../collection-preview';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollectionforPrerview } from '../../redux/shop/shop-selectors';

const CollectionOverview = ({collection, match}) =>{
    console.log("from collection preview --> ", match )
    return(
        <div className = 'collection-overview'>
            {
                collection.map(({id, ...otherProps}) => (
                    <CollectionPreview key = {id} {...otherProps}/>
                ))
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collection: selectCollectionforPrerview
});
export default connect(mapStateToProps, null)(CollectionOverview);