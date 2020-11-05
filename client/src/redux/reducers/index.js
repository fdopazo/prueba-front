import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer';
import LoaderReducer from './LoaderReducer';

export default combineReducers({
    item: ItemReducer,
    loader_value: LoaderReducer,
});