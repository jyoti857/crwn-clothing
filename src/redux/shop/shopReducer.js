// import SHOP_DATA from "./shop.data";
import {FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_SUCCESS } from "./constants";

const initialState = {
    shopData: null,
    isFetching: false
}

const shopReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_COLLECTIONS_SUCCESS:{
            console.log("**** from shop reducer case 1 ---> ", action.payload)
            return{
                ...state, 
                shopData: action.payload,
                isFetching: false,
            }
        }
        case FETCH_COLLECTIONS_FAILURE :{
            return{
                ...state, 
                isFetching: false,
                shopData: action.payload   
            }
        }
        case FETCH_COLLECTIONS_START :{
            return{
                ...state,
                isFetching: true
            }
        }
        default: {
            console.log("*@*@*@--->", initialState.shopData);
            return state;
        }
    }
}

export default shopReducer;