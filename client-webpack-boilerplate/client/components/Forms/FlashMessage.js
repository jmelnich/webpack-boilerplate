import React, {Component} from 'react';
import {Alert} from 'reactstrap';
import {connect} from 'react-redux';
import {dismissFlashMsg} from '../../actions/formsActions'

class FlashMessage extends Component {
  constructor(props) {
	super(props);
	this.onDismiss = this.onDismiss.bind(this);
  }


  componentDidUpdate() {
    if (this.props.flash.isOpen) {
	  setTimeout(() => {
		this.onDismiss()
	  }, 4000);
	}
  };

  onDismiss() {
	this.props.dismissFlashMsg();
  }

  render() {
	return (
	  <Alert color={this.props.type}
			 isOpen={this.props.flash.isOpen}
			 toggle={this.onDismiss}>
		{this.props.flash.text}
	  </Alert>
	);
  }
}

function mapStateToProps({flash}) {
  return {
	flash
  }
}

function mapDispatchToProps(dispatch) {
  return {
	dismissFlashMsg: () => dispatch(dismissFlashMsg())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);