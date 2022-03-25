import * as api from '../api/index.js';
import { FETCH_ALL } from '../constants/actionTypes';

export const getJokes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchJokes();
        console.log(data)
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}