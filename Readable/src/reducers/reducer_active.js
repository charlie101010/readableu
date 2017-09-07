import {SET_ACTIVE} from '../actions/index';



export default function(state = null, action){
	switch(action.type){
		case SET_ACTIVE:
		 return action.payload;
	}
	
	return state;
}