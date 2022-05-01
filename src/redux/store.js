import {applyMiddleware, combineReducers, createStore} from "redux";
import searchPhotoReducer from "./searchPhotoReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    searchPhotoReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
export default store;