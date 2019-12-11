import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, REMOVE_ONE_ITEM } from "../constants";


const setToggleCartHidden = () =>({
    type: TOGGLE_CART_HIDDEN,
});

const addItems = item =>({
    type: ADD_ITEM,
    payload: item,
});

const removeItem = item =>({
    type: REMOVE_ITEM,
    payload: item,
});

const removeOneItem = item =>({
    type: REMOVE_ONE_ITEM,
    payload: item
})


export {setToggleCartHidden, addItems, removeItem, removeOneItem};