import { GET_RANDOM_DATA_FRIENDS } from './actionTypes';

const initialState = {
    randomData: {
        id: '',
        name: '',
        logoImg: '',
    }
};

export function randomFriendseducer(state = initialState, action)  {
    switch(action.type) {
        case GET_RANDOM_DATA_FRIENDS:
            return {
                ...state,
                randomData: action.data
            };
            default:
                return state
    }
}