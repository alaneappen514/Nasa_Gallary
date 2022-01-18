import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    images:[{
        id:1,
        title: "Alan",
        category:"programmer" 
    }]
}
export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_IMAGES:
            return state;
        default:
            return state;
    }
}