import React, { Component } from 'react';
import CategoryList from '../containers/category_list';
import Posts from '../containers/posts';
import {Route} from 'react-router-dom';
import PostManager from '../containers/post_manager';



export default class App extends Component {

  render() {
    return (
    <div>
    <Route exact path='/' render={() => (
    	<div>
    		<CategoryList />
    		<Posts />
      	</div>
      )}/>
     <Route exact path='/post_manager' render={() => (
    	<div>
    		<PostManager />
      	</div>
      )}/>
     </div>
    );
  }
}
