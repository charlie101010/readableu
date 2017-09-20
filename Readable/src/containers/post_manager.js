import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../actions/index';
import uuid from 'uuid';

class PostManager extends Component{


	componentDidMount(){
		this.props.getCats()
	}


	
	

render(){
	return(
		// {console.log(this.props.activepost)}
		<form onSubmit={()=>this.formSubmit(e)}>
		 <div className="form-group input-lg form-group-lg">
		 <input className="form-control" type="text" name="title" placeholder="title"/><br/>
		 <textarea className="form-control" name="body" placeholder="body"/><br/>
		 <input className="form-control" type="text" name="owner" placeholder="author"/><br/>
		 <input className="form-control" type="hidden" name="uuid" value= {uuid()}/><br/>
		 <select className="form-control"name="category">
  			{this.props.categories.map((category)=>(
  			<option key={category.name} value={category}>{category.name}</option>
  			))}
			</select><br/>
		<input className="form-control" value="Submit" type="button" />

		</div>
		</form>

		)
	}




	}


const mapDispatchToProps = (dispatch) => {
	return{
		getCats: () => {dispatch(getCategories())},
		
	}
}

const mapStateToProps = (state) =>{
	return {categories: state.categories, activePost: state.setActivePost};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostManager);


