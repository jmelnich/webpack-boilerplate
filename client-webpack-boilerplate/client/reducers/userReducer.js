import {SET_CURRENT_USER} from '../actions/types'

const initialState = {
  auth: false,
  email: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
	case SET_CURRENT_USER:
	  return {
		...state,
		auth: true,
		email: action.payload.email
	  };
	default:
	  return state;
  }
}