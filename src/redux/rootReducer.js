import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';


const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'directory', 'shop']  // as user reducer is handled by Firebase so not included here
}

export default persistReducer(persistConfig, rootReducer);