export const changeFilter = params => dispatch => {
  dispatch({
    type: "CHANGE_FILTER",
    payload: {
      params
    }
  });
};
