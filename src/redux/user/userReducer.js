import {SET_CURRENT_USER} from '../constants';

const initialState = {
    currentUser : null
}


const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_CURRENT_USER :{
            return{
                ...state,
                currentUser:action.user
            }
        }
        default: return state;
    }
}

export default userReducer;