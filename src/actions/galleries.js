const API_URL = "https://api.imgur.com/3/gallery/";

export const asyncGetGalleries = ({section, sort, window, page}) => dispatch =>
{
  const url = `${API_URL}/${section}/${sort}/${window}/${page}?album_previews=true`;
  fetch(url, {
    async: true,
    crossDomain: true,
    method: "GET",
    headers: {
      authorization: "Client-ID 4fe167413455c93"
    }
  })
    .then(response => {
      response.json().then(
        data =>
          page > 0
            ? dispatch({ type: "GALLERIES_NEXT_PAGE", payload: data.data })
            : dispatch({
                type: "FETCH_GALLERIES_SUCCESS",
                payload: data.data
              })
      );
    })
    .catch(function(error) {
      console.log("Request failed", error);
    });
};
