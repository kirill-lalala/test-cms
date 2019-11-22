import {getCrm} from "../../api/api";

const SET_DATA = 'SET_DATA';
const CHANGE_SORT_PARAMS = 'CHANGE_SORT_PARAMS';

let initialState = {
    direction: false,
    data: {
        data: []
    }
};

export const toolsReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SET_DATA):
            return{
                ...state,
                data: action.data
            };
        case(CHANGE_SORT_PARAMS):
            return{
                ...state,
                sortBy: action.sortBy,
                direction: action.direction
            };
        default: return state;
    }
};

export const setData = (data) => ({type: SET_DATA, data});
export const changeSortParams = (sortBy, direction) => ({type: CHANGE_SORT_PARAMS, sortBy, direction});

export const getData = (sortBy, direction) => {
    return dispatch => {
        getCrm(sortBy, direction).then( data => {
                console.log(data);
                sortBy && dispatch( changeSortParams(sortBy, direction));
                dispatch( setData(data.data) );

        });
    }
};