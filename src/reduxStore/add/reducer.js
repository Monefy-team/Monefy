import { SET_PAGE_COMPONENT  } from './actionType';
const initialState = {
   name:'',
   value:'',
};

export function addPageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PAGE_COMPONENT:
            return {
                ...state,
                name: action.name,
                value: action.value,
            };
        default:
            return state;
    }
}
