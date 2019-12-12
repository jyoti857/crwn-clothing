import React from 'react';
import CollectionOverview from '../../Component/collection-overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection';

const ShopPage = ({match}) => {
    console.log("from shop page --->", match)
        return(
            <div>
                <Route exact path ={`${match.path}`}  component = {CollectionOverview} />
                <Route exact path = {`${match.path}/:categoryId`} component = {CollectionPage} />
            </div>
    )
}


export default ShopPage;