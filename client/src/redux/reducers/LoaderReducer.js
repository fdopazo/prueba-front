import {
    LOADER_ON
} from '../actions/types';

const INITIAL_STATE = {
    loader_value: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case LOADER_ON:
            return {
                ...state,
                loader_value: action.payload
            }

        default:
            return state;
    }
}