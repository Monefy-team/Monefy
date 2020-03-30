
import {  SET_PAGE_COMPONENT } from './actionType';

export const addPageComponent = (name, value, data) => dispatch => {
    dispatch({ type: SET_PAGE_COMPONENT,
        name: name,
        value: value,
        data: data,
    });
};