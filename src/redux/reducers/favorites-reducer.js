const ADD_CRM = 'ADD_CRM';

let initialState = {
    selectedCrmSystems: []
};

export const favoriteReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case(ADD_CRM):
            return {
                ...state,
                selectedCrmSystems: [ ...state.selectedCrmSystems, action.props]
            };
        default: return state;
    }
};

export const addCrm = props => ({type: ADD_CRM, props});

