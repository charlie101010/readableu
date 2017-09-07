import { combineReducers } from 'redux';
import categoryReducer from './reducer_categories';
import postsReducer from './reducer_posts';
import activeReducer from './reducer_active';


const rootReducer = combineReducers({
  categories: categoryReducer,
  posts: postsReducer,
  active: activeReducer
});

export default rootReducer;
