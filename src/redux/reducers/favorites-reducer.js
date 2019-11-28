import { storage} from "../../api/localStorage";

const ADD_CMS = 'CMS/FAVORITE/ADD_CMS';
const REMOVE_CMS = 'CMS/FAVORITE/REMOVE_CMS';
const SET_FAVORITES_STATE = 'CMS/FAVORITE/SET_FAVORITES_STATE';

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
            storage.setItem(`favoriteState`, newAddCms.selectedCmsSystems);
            return newAddCms;

        case(REMOVE_CMS):
            let newRemoveCms =  {
                ...state,
                selectedCmsSystems: [ ...state.selectedCmsSystems.filter(c => c.id !== action.id )]
            };
            storage.getItem(`favoriteState`, newRemoveCms.selectedCmsSystems);
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
