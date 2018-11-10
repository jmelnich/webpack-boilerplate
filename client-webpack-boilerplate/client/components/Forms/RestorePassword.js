import React, {Component} from 'react';
import {Link} from "react-router-dom";
import FormHead from "./FormHead";
import {AvField, AvForm} from 'availity-reactstrap-validation';
import {Button} from 'reactstrap';
import {restorePassword} from '../../actions/formsActions'
import {connect} from 'react-redux'

class RestorePassword extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  email: ''
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
	this.props.restorePassword(this.state.email);
  }

  render() {
	return (
	  <div className="form-nav">
		<div className="container-form">
		  <FormHead/>
		  <AvForm className="flex-col" onValidSubmit={this.handleSubmit}>
			<AvField name="email" label="Email" type="email" onChange={this.handleChange} required/>
			<Button color="primary">Send</Button>
			<p>Have account? <Link to="/login">Back to login</Link></p>
		  </AvForm>
		</div>
	  </div>
	);
  }
}

function mapDispatchToProps(dispatch) {
  return {
	restorePassword: (email) => dispatch(restorePassword(email))
  }
}

export default connect(null, mapDispatchToProps)(RestorePassword);