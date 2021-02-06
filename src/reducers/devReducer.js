import {
  GET_DEV,
  ADD_DEV,
  DELETE_LOG,
  SET_LOADING,
  DEV_ERROR,
} from "../actions/types";

const initialState = {
  devs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEV:
      return {
        ...state,
        devs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
