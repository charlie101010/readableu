import axios from 'axios';

const ROOT_URL =`http://localhost:5001`;

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const SET_ACTIVE = 'SET_ACTIVE'

export const getCategories= ()=> {
	const url = `${ROOT_URL}/categories`;
	const request = axios.get(url, { headers: { 'Authorization': 'whatever-you-want' }});
	console.log(request);

	return{
		type: GET_CATEGORIES,
		payload: request

	};
}

export const getPosts= ()=> {
	const url = `${ROOT_URL}/posts`;
	const request = axios.get(url, { headers: { 'Authorization': 'whatever-you-want' }});
	console.log(request);

	return{
		type: GET_POSTS,
		payload: request

	};
}


export const setActive= (category)=> {

	return{
		type: SET_ACTIVE,
		payload: category

	};
}
