import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
// import thunk  from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { fetchCollectionsStart } from './shop/shop-sagas';

const sagaMiddleware  = createSagaMiddleware();
let middlewares = [sagaMiddleware];
if(process.env.NODE_ENV ===  'development'){
    middlewares.push(logger);
};

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);
const persistor = persistStore(store);

export  {store, persistor};