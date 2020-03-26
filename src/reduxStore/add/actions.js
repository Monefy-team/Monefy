
import {  SET_PAGE_COMPONENT } from './actionType';

export const addPageComponent = (name, value) => dispatch => {
    dispatch({ type: SET_PAGE_COMPONENT, name: name, value:value });
};