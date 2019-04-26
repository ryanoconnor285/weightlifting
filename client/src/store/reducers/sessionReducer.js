import { CREATE_NEW_SESSION } from '../actions/types';

const initialState = {
  session: {}
}

export default function ( state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_SESSION:
      return {
        ...state,
        session: action.payload
      }
  
    default:
      return state;
  }
}