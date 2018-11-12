import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/formsActions';

class Login extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  email: '',
	  password: ''
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
	  password: this.state.password
	};
	this.props.loginUser(userData);
  }

  render() {
	return (
	  <div className="form-nav">
		<div className="container-form">
		  <AvForm className="flex-col" onValidSubmit={this.handleSubmit}>
			<AvField name="email" label="Email" type="email" onChange={this.handleChange} required/>
			<AvField name="password" label="Password" type="password" onChange={this.handleChange} required/>
			<Link to="/restore">Forgot your password?</Link>
			<Button color="primary">Log in</Button>
			<p>Don't have account? <Link to="/signup">Sign Up</Link></p>
		  </AvForm>
		</div>
	  </div>
	);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (data) => dispatch(loginUser(data))
  }
}

export default connect(null, mapDispatchToProps)(Login);