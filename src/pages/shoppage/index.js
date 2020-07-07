import React from 'react';
import CollectionOverview from '../../Component/collection-overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection';
import {connect} from 'react-redux';
// import {  fetchCollectionsStartAsync } from '../../redux/shop/shop-action';
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils';
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStart } from '../../redux/shop/shop-sagas';
import { fetchCollectionStartAction, fetchCollectionsStartAsyncSaga } from '../../redux/shop/shop-action';

// const ShopPage = ({match}) => {
    class ShopPage extends React.Component{
        unsubscribedFromSnapshot = null;
        componentDidMount(){
            // const {updateCollection} = this.props;
            // const collectionRef = firestore.collection('collections');
            // console.log("****** from shop page *****, collectionRef---->", collectionRef)
            // this.unsubscribedFromSnapshot = collectionRef.onSnapshot( async snapShot =>{
            //     const collectionMap = convertCollectionsSnapshotToMap(snapShot);
            //     updateCollection(collectionMap);
            //     console.log("(*(@*#(@*#(@#* ---> from shop page --->  ", collectionMap)
            // })
            const { fetchCollectionsStart } = this.props;
            fetchCollectionsStart();

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

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,

})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStartAsyncSaga())
});
// const mapDispatchToProps = dispatch => ({
//     updateCollection: updateCollection => dispatch(updateCollections(updateCollection)),
// })


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);