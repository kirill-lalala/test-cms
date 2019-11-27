import {API} from "../../api/api";
import {storage} from "../../api/localStorage";

const SET_DATA = 'SET_DATA';
const CHANGE_SORT_PARAMS = 'CHANGE_SORT_PARAMS';
const CHANGE_CHECKED = 'CHANGE_CHECKED';

let initialState = {
    direction: false,
    data: []
};

export const toolsReducer = (state = initialState, action) => {

    switch (action.type) {
        case(SET_DATA):
            return{
                ...state,
                ...action.data
            };

        case(CHANGE_SORT_PARAMS):
            return{
                ...state,
                sortBy: action.sortBy,
                direction: action.direction,
                currentPageUrl: action.currentPageUrl
            };

        case(CHANGE_CHECKED):
            return{
                ...state,
                data: state.data.map( cms => {
                    if(cms.id === action.id) {
                        return {...cms, checked: !action.checked}
                    }
                    return cms;
                })
            };

        default: return state;
    }
};

export const setData = (data) => ({type: SET_DATA, data});
export const changeSortParams = (sortBy, direction, page) => ({type: CHANGE_SORT_PARAMS, sortBy, direction, currentPageUrl: page});
export const changeChecked = (checked, id) => ( {type: CHANGE_CHECKED, checked, id} );

export const getDataSuccess = (page, sortBy, direction) => {
    return dispatch => {
        API.getCrmSuccess(page, sortBy, direction).then( data => {
                sortBy && dispatch( changeSortParams(sortBy, direction, page));

                let locFavoriteState = [];
                if(storage.getItem(`favoriteState`)){
                     locFavoriteState = storage.getItem(`favoriteState`);
                }

                let newData = { ...data,
                                   data: data.data.map(cms => ( {...cms, checked: locFavoriteState.some( locStateCrm => locStateCrm.id === cms.id)   } ) )
                              };
                debugger;
                dispatch( setData(newData) );
        });
    }
};