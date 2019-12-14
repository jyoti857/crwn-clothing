// import SHOP_DATA from "./shop.data";
import { UPDATE_COLLECTION } from "./constants";

const initialState = {
    shopData: null,
}

const shopReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_COLLECTION:{
            console.log("**** from shop reducer case 1 ---> ", action.payload)
            return{
                ...state, 
                shopData: action.payload
            }
        }
        default: {
            console.log("*@*@*@--->", initialState.shopData);
            return state;
        }
    }
}

export default shopReducer;