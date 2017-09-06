import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategories} from '../actions/index';
import {bindActionCreators} from 'redux';




class CategoryList extends Component{


	componentDidMount(){
		this.props.getCategories()
	}

	 renderList(){
		return this.props.categories.map((category)=>{	
			return(

				<li key={category.name} className="list-group-item">{category.name}</li>
			)
		})
	}

	render(){
		return(

			<ul className='list-group col-sm-4'>
		      	{this.renderList()}
		      	{console.log(this.props.categories[0])}
		     </ul>



			)
	}


}





const mapDispatchToProps = (dispatch) => {
	return bindActionCreators( {getCategories}, dispatch);
}

const mapStateToProps = (state) =>{
	return {categories: state.categories};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);