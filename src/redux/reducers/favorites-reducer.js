import {localStorageSetItem} from "../../api/localStorage";

const ADD_CMS = 'ADD_CMS';
const REMOVE_CMS = 'REMOVE_CMS';
const SET_FAVORITES_STATE = 'SET_FAVORITES_STATE';

let initialState = {
    selectedCmsSystems: []
};

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_CMS):
            let newAddCms =  {
                ...state,
                selectedCmsSystems: [ ...state.selectedCmsSystems, action.props]
            };
            localStorageSetItem(`favoriteState`, newAddCms.selectedCmsSystems);
            return newAddCms;

        case(REMOVE_CMS):
            let newRemoveCms =  {
                ...state,
                selectedCmsSystems: [ ...state.selectedCmsSystems.filter(c => c.id !== action.id )]
            };
            localStorageSetItem(`favoriteState`, newRemoveCms.selectedCmsSystems);
            return newRemoveCms;

        case(SET_FAVORITES_STATE):
            return {
                ...state,
                selectedCmsSystems: [...action.state]
            };

        default: return state;
    }
};

export const addCms = props => ({type: ADD_CMS, props});
export const removeCms = id => ({type: REMOVE_CMS, id});
export const setFavoriteState = state => ({type: SET_FAVORITES_STATE, state});