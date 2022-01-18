import { combineReducers } from "redux";
import { reducer } from "./reducer";

const reducers = combineReducers({
    allImages: reducer,
});

export default reducers;