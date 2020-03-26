import { combineReducers } from 'redux';
import { randomFriendseducer } from  './friends/reducer';
import { randomGroupsReducer } from './groups/reducer';
import { addPageReducer } from './add/reducer';
import { connectRouter } from 'connected-react-router';

export const rootReducer = history => 
        combineReducers({
        router: connectRouter(history),
        randomFriendseducer,
        randomGroupsReducer,
        addPageReducer,
    })
