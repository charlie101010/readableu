import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPost, getComments, incrementPostVote, incrementCommentVote} from '../actions';
import {Link} from 'react-router-dom';
import _ from 'lodash';




class PostShow extends Component{
	componentDidMount(){
		this.props.getPost(this.props.match.params.id);
		this.props.getComments(this.props.match.params.id);
	}

	handlePostVote(voteType){
		this.props.incrementPostVote(this.props.match.params.id, voteType)
	}

	handleCommentVote(id, voteType){
		this.props.incrementCommentVote(id, voteType)
	}



	renderComments(){
		return _.map(this.props.comments, comment=>{
			return(
				<div>
					<li className="list-group-item" key={comment.id}>
						<h2>{comment.body}</h2>
						<h6> Author </h6>
						<p>{comment.author}</p>
						<h6>Comment VoteScore </h6>
						<p>{comment.voteScore}</p>
					<button onClick={()=>this.handleCommentVote(comment.id, 'upVote')} className='btn btn-primary btn-sm'>UpVote</button>
					<button onClick={()=>this.handleCommentVote(comment.id,'downVote')} className='btn btn-default btn-sm'>DownVote</button>
					</li>
				</div>

				)
		})
	}

	
	render(){
		console.log("comments", this.props.comments);
		if(!this.props.post){
			return <div> Loading </div>;
		}

		return(
			<div>
				<div>
				<Link to="/">Back to Index</Link>
					<h2> Title </h2>
					<p>{this.props.post.title}</p>
					<h2> Body </h2>
					<p>{this.props.post.body}</p>
					<h2> Author </h2>
					<p>{this.props.post.author}</p>
					<h2> TimeStamp </h2>
					<p>{this.props.post.timestamp}</p>
					<h2> Vote Score </h2>
					<p>{this.props.post.voteScore}</p>
					<h2> ID </h2>
					<p>{this.props.post.id}</p>
					<div>
						<button onClick={()=>this.handlePostVote('upVote')} className='btn btn-primary'>UpVote</button>
						<button onClick={()=>this.handlePostVote('downVote')} className='btn btn-default'>DownVote</button>
					</div>
				</div>
				<div>
					<h2>Comments ({Object.keys(this.props.comments).length})</h2>
					{this.renderComments()}
				</div>
			</div>
			)

	}

}

function mapStateToProps(state, ownProps){
	return {post: state.posts[ownProps.match.params.id], comments: state.comments};
}

export default connect(mapStateToProps, {getPost, getComments, incrementPostVote, incrementCommentVote})(PostShow);