
import { BASE_URL } from '../../env';
import axios from 'axios';
import { GET_ITEMS, GET_ITEM } from "./types";

/*
*Function to get all items
*/
export const getItems = (data) => async (dispatch) => {

    try {
        const resp = await axios({
            method: 'get',
            url: `${BASE_URL}`,
            params: { data },
            headers: { 'Content-Type': 'multipart/form-data' }
        })

        if (resp.status === 200) {
            dispatch({
                type: GET_ITEMS,
                payload: resp.data.res
            });
        }
        return resp
    } catch (err) {

        return err
    }

}

/*
*Function to get one particular item
*/

export const getItem = (id) => async (dispatch) => {

    try {
        const resp = await axios({
            method: 'get',
            url: `${BASE_URL}item/${id}`,
            headers: { 'Content-Type': 'multipart/form-data' }
        })

        dispatch({
            type: GET_ITEM,
            payload: resp.data.res
        });

        return resp
    } catch (err) {

        return err
    }

}