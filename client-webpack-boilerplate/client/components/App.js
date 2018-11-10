import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Forms/Login';
import Signup from './Forms/Signup';
import RestorePassword from "./Forms/RestorePassword";
import FlashMessage from './Forms/FlashMessage';

class App extends Component {
  render() {
	return (
	  <div>
		<FlashMessage/>
		<Switch>
		  <Route exact path='/' component={Login}/>
		  <Route path='/login' component={Login}/>
		  <Route path='/signup' component={Signup}/>
		  <Route path='/restore' component={RestorePassword}/>
		  {/*<Route component={NotFound}/>*/}
		</Switch>
	  </div>
	)
  }
}

export default App;