import {ADD_FLASH, DISMISS_FLASH} from '../actions/types';

const initialState = {
  text: '',
  type: '',
  isOpen: false
};

export default function (state = initialState, action) {
  switch (action.type) {
	case ADD_FLASH:
	  return {
		...state,
		text: action.payload.text,
		type: action.payload.type,
		isOpen: true
	  };
	case DISMISS_FLASH:
	  return {
		...state,
		text: '',
		type: '',
		isOpen: false
	  };
	default:
	  return state;
  }
}
