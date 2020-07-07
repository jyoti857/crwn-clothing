import { takeEvery, put, call } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils';
import { fetchCollectionStartAction, fetchCollectionsSuccess,fetchCollectionsFailure } from './shop-action';
import {FETCH_COLLECTIONS_START_SAGA} from './constants';


function* fetchCollectionAsync(){
    try{
        const collectionRef = yield firestore.collection('collections');
        yield put(fetchCollectionStartAction());
        const snapshot =  yield collectionRef.get()
        const collectionsMap = call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(err) {
        put(fetchCollectionsFailure(err.message));
    }
    yield console.log("  7^^^^^^^^^^^^^^^&&&&&&&&&^^^^^^^^ I am just started from saga!")
}

export function* fetchCollectionsStart(){
    yield takeEvery(FETCH_COLLECTIONS_START_SAGA, fetchCollectionAsync);
};





