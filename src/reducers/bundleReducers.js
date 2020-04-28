
import {
  RECEIVE_BUNDLES_SUCCESS,
  RECEIVE_BUNDLES_FAILURE,
  IS_LOADING
} from '../actions/actionTypes';

const initialState = {
  items: [],
  isLoading: false,
  hasErrors: false
};

function bundles(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_BUNDLES_SUCCESS:
    return { ...state, isLoading: false, items: action.payload };
  case RECEIVE_BUNDLES_FAILURE:
    return { ...state, isLoading: false, hasErrors: true };
  case IS_LOADING:
    return { ...state, isLoading: true };
  default:
    return state;
  }
}

export default bundles;
