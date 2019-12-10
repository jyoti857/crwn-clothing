import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "../constants";


const setToggleCartHidden = () =>({
    type: TOGGLE_CART_HIDDEN,
});

const addItems = items =>({
    type: ADD_ITEM,
    payload: items,
})

export {setToggleCartHidden, addItems};