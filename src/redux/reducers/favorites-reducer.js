const ADD_CMS = 'ADD_CMS';
const REMOVE_CMS = 'REMOVE_CMS';

let initialState = {
    selectedCmsSystems: []
};

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_CMS):
            return {
                ...state,
                selectedCmsSystems: [ ...state.selectedCmsSystems, action.props]
            };
        case(REMOVE_CMS):
            return {
                ...state,
                selectedCmsSystems: [ ...state.selectedCmsSystems.filter(c => c.id !== action.id )]
            };
        default: return state;
    }
};

export const addCms = props => ({type: ADD_CMS, props});
export const removeCms = id => ({type: REMOVE_CMS, id});

