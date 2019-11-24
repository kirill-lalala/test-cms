import {applyMiddleware, combineReducers, createStore} from "redux";
import {toolsReducer} from "./reducers/tools-reducer";
import thunk from 'redux-thunk';
import {favoriteReducer} from "./reducers/favorites-reducer";

let reducers = combineReducers({
    toolsPage: toolsReducer,
    favoritePage: favoriteReducer
});


let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;



