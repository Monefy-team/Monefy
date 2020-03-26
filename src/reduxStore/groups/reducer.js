import { GET_RANDOM_DATA_GROUPS} from './actionTypes';

const initialState = {
    randomData: {
        id: '',
        name: '',
        logoImg: '',
    }
}

export function randomGroupsReducer(state = initialState, action)  {
    switch(action.type) {
        case GET_RANDOM_DATA_GROUPS:
            return {
                ...state,
                randomData: action.data
            }
            default:
                return state
    }
}