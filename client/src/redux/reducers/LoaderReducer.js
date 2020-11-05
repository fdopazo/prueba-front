import {
    LOADER_ON
} from '../actions/types';

const INITIAL_STATE = {
    loader: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case LOADER_ON:
            return {
                ...state,
                loader: action.payload
            }

        default:
            return state;
    }
}