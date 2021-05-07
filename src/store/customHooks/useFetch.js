import { useEffect, useReducer } from "react";

import * as actionTypes from "../actions/actionTypes";
import { fetchReducer, initialStateFetchReducer } from "../reducers";

export const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialStateFetchReducer);

  useEffect(() => {
    dispatch({ type: actionTypes.LOADING });

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        dispatch({
          type: actionTypes.RESPONSE_COMPLETED,
          payload: { result: response },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: actionTypes.ERROR, payload: { error } });
        throw error;
      });
  }, [url]);

  const { result, loading, error } = state;

  return [result, loading, error];
};
