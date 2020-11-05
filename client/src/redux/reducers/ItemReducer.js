import {
    GET_ITEMS, GET_ITEM
} from '../actions/types';

const INITIAL_STATE = {
    items_data: [],
    particular_item: {}
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items_data: action.payload
            }
        case GET_ITEM:
            return {
                ...state,
                particular_item: action.payload
            }

        default:
            return state;
    }
}