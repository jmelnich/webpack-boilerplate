import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Button} from 'reactstrap';
import {signUpUser} from '../../actions/formsActions';
import {connect} from 'react-redux';

class Signup extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  email: '',
	  password1: '',
	  password2: '',
	};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
	this.setState({
	  [event.target.name]: event.target.value
	})
  };

  handleSubmit() {
	const userData = {
	  email: this.state.email,
	  password: this.state.password1
	};
	this.props.signUpUser(userData);
  }


  render() {
	return (
	  <div className="form-nav">
		<div className="container-form">
		  <AvForm className="flex-col" onValidSubmit={this.handleSubmit}>
			<AvField name="email" label="Email" type="email" onChange={this.handleChange} required/>
			<AvField name="password1" label="Password" type="password" onChange={this.handleChange}
					 validate={{
					   required: {value: true, errorMessage: 'Please enter a name'},
					   pattern: {
						 value: '/^(?=.*\\d)(?=.*[a-z])\\w{6,}$/',
						 errorMessage: 'The password is too weak. Should include minimum 1 digit, 1 letter and be at least 6 characters long'
					   },
					   minLength: {value: 6, errorMessage: 'Password must be minimum 6 characters'}
					 }}
					 required/>
			<AvField name="password2" label="Repeat password" type="password" onChange={this.handleChange}
					 validate={{match: {value: 'password1', errorMessage: 'Passwords do not match'}}}
					 required/>
			<Button color="primary">Sign up</Button>
			<p>Have account? <Link to="/login">Log in</Link></p>
		  </AvForm>
		</div>
	  </div>

	);
  }
}
function mapDispatchToProps(dispatch){
  return {
	signUpUser: (data) => dispatch(signUpUser(data))
  }
}

export default connect(null, mapDispatchToProps)(Signup);