const ADD_CRM = 'ADD_CRM';
const REMOVE_CRM = 'REMOVE_CRM';

let initialState = {
    selectedCrmSystems: []
};

export const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_CRM):
            return {
                ...state,
                selectedCrmSystems: [ ...state.selectedCrmSystems, action.props]
            };
        case(REMOVE_CRM):
            return {
                ...state,
                selectedCrmSystems: [ ...state.selectedCrmSystems.filter(c => c.id !== action.id )]
            };
        default: return state;
    }
};

export const addCrm = props => ({type: ADD_CRM, props});
export const removeCrm = id => ({type: REMOVE_CRM, id});

