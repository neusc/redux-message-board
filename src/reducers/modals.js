import * as types from '../constants/ActionTypes';

let initialState = {
    visible: false,
    message: '',
    user   : ''
};

const modals = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_MODAL:
            return {
                ...state,
                visible: action.visible
            };
        case types.UPDATE_USER:
            return {
                ...state,
                user: action.user
            };
        case types.UPDATE_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    };
};

export default modals;