import { randomData } from '../../service/api/bar';
import { GET_RANDOM_DATA_FRIENDS } from './actionsTypes';

export const getRandomDataFrieds = () => async dispatch => {
	const data = await randomData.getRandomBar();
	dispatch({ type: GET_RANDOM_DATA_FRIENDS, data });
};
