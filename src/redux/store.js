import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {toolsReducer} from "./reducers/tools-reducer";
import thunk from 'redux-thunk';
import {favoriteReducer} from "./reducers/favorites-reducer";

let reducers = combineReducers({
    toolsPage: toolsReducer,
    favoritePage: favoriteReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));

window.store = store;
export default store;