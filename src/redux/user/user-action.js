import {SET_CURRENT_USER} from '../constants';


const setCurrentUser = user =>({
    type: SET_CURRENT_USER,
    user
});


export {setCurrentUser};