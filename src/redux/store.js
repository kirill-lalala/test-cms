import {applyMiddleware, combineReducers, createStore} from "redux";
import {toolsReducer} from "./reducers/tools-reducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    toolsPage: toolsReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;



