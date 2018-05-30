const API_URL = "https://api.imgur.com/3/gallery/";
const section = "hot";
const sort = "top";
const window = "week";
const page = 0;

export const getList = () => dispatch => {
    const url = `${API_URL}/${section}/${sort}/${window}/${page}?album_previews=true`;
    fetch(url, {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
            authorization: "Client-ID 4fe167413455c93"
        }
    }).then(response => {
        response.json().then(data =>
            dispatch({

                type: "GET_NEW_IMAGES",
                payload: data.data
            })
        );
    });
};