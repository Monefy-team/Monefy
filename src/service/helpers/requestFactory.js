import fetch from 'isomorphic-fetch';
import { testData } from '../../config';

const requestFactory = async (testData) => {
	try {
		const res = await fetch(testData, {
			body: testData,
		});
		if (!res.ok) {
			throw new Error('Error!');
		}
		return res.json();
	} catch (err) {
		throw new Error(err);
	}
};

export { requestFactory };
