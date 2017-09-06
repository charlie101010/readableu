import { combineReducers } from 'redux';
import categoryReducer from './reducer_categories'

const rootReducer = combineReducers({
  categories: categoryReducer
});

export default rootReducer;
