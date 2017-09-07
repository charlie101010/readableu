import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../actions/index';

class PostManager extends Component{
	componentDidMount(){
		this.props.getCats()
	}

render(){
	return(
		<form>
		 <div className="form-group input-lg form-group-lg">
		 <input className="form-control" type="text" name="title" placeholder="title"/><br/>
		 <textarea className="form-control" name="body" placeholder="body"/><br/>
		 <input className="form-control" type="text" name="owner" placeholder="author"/><br/>
		 <select className="form-control"name="category">
  			{this.props.categories.map((category)=>(
  			<option key={category.name} value={category}>{category.name}</option>
  			))}
			</select>

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
	return {categories: state.categories};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostManager);


