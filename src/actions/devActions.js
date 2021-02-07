import { GET_DEV, ADD_DEV, DELETE_LOG, SET_LOADING, DEV_ERROR } from "./types";

// Get Dev from server
export const getDev = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/team");
    const data = await res.json();

    dispatch({
      type: GET_DEV,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEV_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Add dev to server

export const addDev = (dev) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/team", {
      method: "POST",
      body: JSON.stringify(dev),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_DEV,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEV_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};