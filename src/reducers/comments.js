export default function galleryComments(state = [], action) {
  switch (action.type) {
    case "FETCH_COMMENTS_SUCCESS":
      return action.payload;
  }
  return state;
}
