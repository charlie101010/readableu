import {GET_COMMENTS, INCREMENT_COMMENT_VOTE, CREATE_COMMENT} from '../actions/index';
import _ from 'lodash';


export default function(state = {}, action){
	switch(action.type){
		case CREATE_COMMENT:
			return {...state, [action.payload.data.id]: action.payload.data}
		case INCREMENT_COMMENT_VOTE:
			return {...state, [action.payload.data.id]: action.payload.data}
		case GET_COMMENTS:
		 return _.mapKeys(action.payload.data, 'id');
	}
	
	return state;
}