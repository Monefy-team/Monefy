import { randomData } from '../../service/api/bar';
import { GET_RANDOM_DATA_GROUPS } from './actionsTypes';

export const getRandomDataGroups = () => async dispatch => {
	const data = await randomData.getRandomBar();
	dispatch({ type: GET_RANDOM_DATA_GROUPS, data });
};
