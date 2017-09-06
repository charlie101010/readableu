import {GET_CATEGORIES} from '../actions/index';
import { getCategories } from '../actions/index';



export default function(state =[], action){
	switch(action.type){
		case GET_CATEGORIES:
		 return [action.payload.data.categories, ...state ];
	}
	
	return state;
}