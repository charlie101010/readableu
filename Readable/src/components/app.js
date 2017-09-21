import React, { Component } from 'react';
import CategoryList from '../containers/category_list';
import Posts from '../containers/posts_index';
import {Route, Switch} from 'react-router-dom';
import PostsNew from '../containers/posts_new';
import PostShow from '../containers/post_show';



export default class App extends Component {

  render() {
    return (
    <div>
    <Switch>
     <Route path='/posts/new' render={(props) => (
        <PostsNew {...props}/>
      )}/>
     <Route path='/posts/:id' render={(props) => (
      <PostShow {...props}/>
    )}/>
    <Route exact path='/' render={() => (
    	<div>
    		<CategoryList />
    		<Posts />
      	</div>
      )}/>
     </Switch>
     </div>
    );
  }
}
