import {ADD_FLASH, DISMISS_FLASH, SET_CURRENT_USER} from './types';
import axios from 'axios';
import {setAuthToken} from '../utils/setAuthToken'

axios.defaults.baseURL = 'http://localhost:3000/'; //Just for test

const assignFlashMsg = (info) => ({
  type: ADD_FLASH,
  payload: info
});

export const dismissFlashMsg = () => ({
  type: DISMISS_FLASH
});

const setCurrentUser = (details) => ({
  type: SET_CURRENT_USER,
  payload: details
});

export const fetchUser = (token) => (dispatch) => {
  axios.post('/post', token)
	.then((response) => {
	  dispatch(setCurrentUser({email: 'testemail@com'})) //TODO:change to proper user data
	})
}

export const signUpUser = (details) => (dispatch) => {
  axios.post('/post', details)
	.then((response) => {
	  if (response.data !== 'success') { //TODO:change to proper responses
		dispatch(assignFlashMsg({
		  text: 'You sign up successfully. Check your email for link activation',
		  type: 'success'
		}))
	  } else if (response.data === 'Email exists') {
		dispatch(assignFlashMsg({
		  text: 'User with this email already exists',
		  type: 'danger'
		}))
	  }
	})
};

export const loginUser = (details) => (dispatch) => {
  axios.post('/post', details)
	.then((response) => {
	  if (response.data !== 'object with token') { //TODO:change to proper responses
		const token = 'token123'; //response.data.token;
		localStorage.setItem('biddingToken', token);
		setAuthToken(token);
		dispatch(fetchUser(token));
	  } else if (response.data === 'No activation') {
	    dispatch(assignFlashMsg({
		  text: 'Please, activate your email',
		  type: 'warning'
		}))
	  } else if (response.data === 'No user') {
		dispatch(assignFlashMsg({
		  text: 'No user exist with such an email',
		  type: 'danger'
		}))
	  }
	})
};

export const restorePassword = (email) => (dispatch) => {
  axios.post('/post', email)
	.then((response) => {
	  if (response.data !== 'Mail sent') {
	    dispatch(assignFlashMsg({
		  text: 'The link has been sent to your email',
		  type: 'success'
		}))
	  }
	})
};
