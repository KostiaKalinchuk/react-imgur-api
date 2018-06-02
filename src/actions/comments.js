export const asyncComments = (id, clear = false) => dispatch => {
  if (clear) {
    dispatch({
      type: "FETCH_COMMENTS_SUCCESS",
      payload: []
    });
    return;
  }
  const url = `https://api.imgur.com/3/gallery/${id}/comments/best`;

  let settings = {
    async: true,
    crossDomain: true,
    method: "GET",
    headers: {
      authorization: "Client-ID 4fe167413455c93"
    }
  };

  fetch(url, settings)
    .then(response => {
      response.json().then(function(data) {
        dispatch({
          type: "FETCH_COMMENTS_SUCCESS",
          payload: data.data
        });
      });
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
};
