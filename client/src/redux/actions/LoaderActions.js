import { LOADER_ON } from "./types";
export const loader = (loader_value) => async (dispatch) => {
    dispatch({
        type: LOADER_ON,
        payload: loader_value
    });
}