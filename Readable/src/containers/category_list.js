import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCategories, setActive} from '../actions/index';
import {bindActionCreators} from 'redux';




class CategoryList extends Component{


	componentDidMount(){
		this.props.getCats()
	}

	handleClick(category){
		console.log(category);
		this.props.setAct(category);

	}

	 renderList(){
		return this.props.categories.map((category)=>{	
			return(
				<li key={category.name} onClick={()=>this.handleClick(category)} className="list-group-item">{category.name}</li>
			)
		})
	}

	render(){
		return(
			<ul className='list-group col-sm-4'>
		      	{this.renderList()}
		      	{console.log("categories", this.props.categories)}	
		      	{console.log(this.props.active)}
		     </ul>



			)
	}


}





const mapDispatchToProps = (dispatch) => {
	return{
		getCats: () =>{dispatch(getCategories())},
		setAct: (category) => {dispatch(setActive(category))}
	}
}

const mapStateToProps = (state) =>{
	return {categories: state.categories, active: state.active};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);