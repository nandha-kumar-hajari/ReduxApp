import {PHONE, EMAIL_ID, ADDRESS, DESIGNATION} from './../actions/types';
import {USERNAME} from '../actions/types';

let initialState = {
  userName: '',
  phone: '',
  emailId: '',
  address: '',
  designation: '',
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USERNAME: {
      return {...state, userName: action.payload};
    }
    case PHONE: {
      return {...state, phone: action.payload};
    }
    case EMAIL_ID: {
      return {...state, emailId: action.payload};
    }
    case ADDRESS: {
      return {...state, address: action.payload};
    }
    case DESIGNATION: {
      return {...state, designation: action.payload};
    }
    default:
      return state;
  }
};

export default Reducer;
