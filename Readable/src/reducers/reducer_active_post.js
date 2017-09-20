import {ACTIVE_POST} from '../actions/index';

export default function(state = {}, action){
	switch(action.type){
		case ACTIVE_POST:
		 return action.payload;
	}
	
	return state;
}