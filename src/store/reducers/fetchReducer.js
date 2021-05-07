import * as actionTypes from "../actions/actionTypes";

export const initialStateFetchReducer = {
  result: undefined,
  loading: true,
  error: undefined,
};

export const fetchReducer = (state = initialStateFetchReducer, action) => {
  if (action.type === actionTypes.LOADING) {
    return {
      result: undefined,
      loading: true,
      error: undefined,
    };
  }

  if (action.type === actionTypes.RESPONSE_COMPLETED) {
    return {
      result: action.payload.result,
      loading: false,
      error: undefined,
    };
  }

  if (action.type === actionTypes.ERROR) {
    return {
      result: undefined,
      loading: false,
      error: action.payload.error,
    };
  }

  return state;
};
