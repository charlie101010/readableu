import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createPost, getCategories} from '../actions/index';
import uuid from 'uuid';

class PostsNew extends Component{



	componentDidMount(){
		this.props.getCategories();
	}

	renderField(field){

		const className= `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

		return(
			<div className={className}>
				<label>{field.label}</label>
				<input

				className="form-control"
				type="text"
					{...field.input}
				/>
				<div className="text-help">
				{field.meta.touched ? field.meta.error : ''}
				</div>
			</div>
			);

	}

	// renderSelector(field){
	// 	return(
	// 		<div className="form-group">
	// 			<label>{field.label}</label>
	// 			<select

	// 			className="form-control"
	// 				{...field.input}
	// 			>
	// 			{this.props.categories.map(category=>(
	// 				<option>{category.name}</option>))}
	// 			</select>
	// 			<div className="text-help">
	// 			{field.meta.touched ? field.meta.error : ''}
	// 			</div>
	// 		</div>
	// 		);

	// }

onSubmit(values){
	
	this.props.createPost(values, ()=>{
		this.props.history.push('/');
	});
}



	render(){
		if(!this.props.categories){
			return <div>Page is loading</div>
		}
		// const   { handleSubmit } = this.props;

		return(
			<form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
				<Field 
				label="Title"
				name="title"
				component={this.renderField} 

				/>
				<Field 
				label="Body"
				name="body"
				component={this.renderField} 

				/>
				<Field 
				label="Author"
				name="author"
				component={this.renderField} 

				/>

				<Field 
				label="Category"
				name="category"
				component={this.renderField} 

				/>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>

			</form>

			)
	}
}


function validate(values){
	const errors = {};


	if(!values.title || values.title.length < 3){
		errors.title = "Enter a title that is at least 3 characters!";
	}


	if(!values.content){
		errors.content = "Enter some content please!";
	}




	// If errors is empty, the form is fine to submit
	// If errors has *any* properties, redux form assumes form is invalid
	return errors;

}



function mapStateToProps(state){
	return {categories: state.categories}
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
connect(mapStateToProps, {createPost, getCategories})(PostsNew)
);