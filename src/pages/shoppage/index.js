import React from 'react';
import CollectionOverview from '../../Component/collection-overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection';
import {connect} from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-action';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils';

// const ShopPage = ({match}) => {
    class ShopPage extends React.Component{
        unsubscribedFromSnapshot = null;
        componentDidMount(){
            const {updateCollection} = this.props;
            const collectionRef = firestore.collection('collections');
            console.log("****** from shop page *****, collectionRef---->", collectionRef)
            this.unsubscribedFromSnapshot = collectionRef.onSnapshot( async snapShot =>{
                const collectionMap = convertCollectionsSnapshotToMap(snapShot);
                updateCollection(collectionMap);
                console.log("(*(@*#(@*#(@#* ---> from shop page --->  ", collectionMap)
            })
        }
        render(){
            const {match} = this.props;
            console.log("from shop page --->", match)
            return(
                <div>
                <Route exact path ={`${match.path}`}  component = {CollectionOverview} />
                <Route exact path = {`${match.path}/:categoryId`} component = {CollectionPage} />
            </div>
            )
        }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: updateCollection => dispatch(updateCollections(updateCollection)),
})


export default connect(null, mapDispatchToProps)(ShopPage);