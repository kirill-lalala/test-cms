import {storage} from "../../api/localStorage";

const ADD_CMS = 'CMS/FAVORITE/ADD_CMS';
const REMOVE_CMS = 'CMS/FAVORITE/REMOVE_CMS';
const SET_FAVORITES_STATE = 'CMS/FAVORITE/SET_FAVORITES_STATE';

let initialState = {
    selectedCmsSystems: []
};

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_CMS):
            return {
                ...state,
                selectedCmsSystems: [...state.selectedCmsSystems, action.props]
            };

        case(REMOVE_CMS):
            return {
                ...state,
                selectedCmsSystems: [...state.selectedCmsSystems.filter(c => c.id !== action.id)]
            };

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

export const restoreFavoriteCms = () => dispatch => {
    let localStorageFavoritesData = storage.getItem(`favoriteState`);
    dispatch(setFavoriteState(localStorageFavoritesData));
};

export const saveCms = (data) => (dispatch, getState) => {
    if (Number.isInteger(data)) dispatch(removeCms(data));
    else dispatch(addCms(data));

    const localFavoriteState = getState().favoritePage.selectedCmsSystems;
    storage.setItem(`favoriteState`, localFavoriteState);

};