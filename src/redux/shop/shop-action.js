import { UPDATE_COLLECTION, FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START,FETCH_COLLECTIONS_START_SAGA, FETCH_COLLECTIONS_SUCCESS } from "./constants";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase-utils";


export const updateCollections = updateCollection =>({
    type: UPDATE_COLLECTION,
    payload: updateCollection
});

export const fetchCollectionsSuccess = collectionMap =>({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage =>({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
}); 
export const fetchCollectionStartAction = () => ({
    type: FETCH_COLLECTIONS_START
})

// action for sagas
export const fetchCollectionsStartAsyncSaga = () => ({
    type: FETCH_COLLECTIONS_START_SAGA

})


// action 
export const fetchCollectionsStartAsync = () => {
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStartAction());
        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(err => dispatch(fetchCollectionsFailure(err.message)));
    }
}