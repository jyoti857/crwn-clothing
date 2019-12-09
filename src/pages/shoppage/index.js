import React from 'react';
import shopData from './shop.data';
import CollectionPreview from '../../Component/collection-preview';

class ShopPage extends React.Component{

    constructor(){
        super();
        this.state = {
            collection: shopData
        }
    }
    render(){
        const {collection} = this.state;
        return(

        <div>
            {
                collection.map(({id, ...otherProps}) => (
                    <CollectionPreview key = {id} {...otherProps}/>
                ))
            }
        </div>
        )
    }
}

export default ShopPage;