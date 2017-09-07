import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPosts, setActive} from '../actions/index';
import {bindActionCreators} from 'redux';




class Posts extends Component{
	componentDidMount(){
		this.props.getPosts()
	}



	render(){
		if(this.props.active==null){
			return(
					<ul className='list-group col-sm-8'>
					{this.props.posts.map(post=>{
						return(
							<li key={post.id} className="list-group-item">{post.body} {post.voteScore}</li>
							  )				

							}
					)}

					</ul>
				)
		}



		return(
			
			<ul className='list-group col-sm-8'>
				{this.props.posts.filter(post=>post.category == this.props.active.path).map(post=>{
					return(
						<li key={post.id} className="list-group-item">{post.body}</li>
						  )

					}
				)}
		

			</ul>



			)}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators( {getPosts}, dispatch);
}

const mapStateToProps = (state) =>{
	return {posts: state.posts, active: state.active};
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);