import axios from 'axios';

const ROOT_URL =`http://localhost:5001`;

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategories= ()=> {
	const url = `${ROOT_URL}/categories`;
	const request = axios.get(url, { headers: { 'Authorization': 'whatever-you-want' }});
	console.log(request);

	return{
		type: GET_CATEGORIES,
		payload: request

	};
}

