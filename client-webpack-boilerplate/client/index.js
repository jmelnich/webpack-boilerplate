import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './components/App';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {setAuthToken} from './utils/setAuthToken';
import {fetchUser} from './actions/formsActions'

if (localStorage.biddingToken) {
  setAuthToken(localStorage.biddingToken);
  store.dispatch(fetchUser(localStorage.biddingToken));
}

const app = () => {
  render(
	<AppContainer>
	  <BrowserRouter>
		<Provider store={store}>
		  <Route component={App}/>
		</Provider>
	  </BrowserRouter>
	</AppContainer>,
	document.getElementById('app')
  );
};
app();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', app);
}