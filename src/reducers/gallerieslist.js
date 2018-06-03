export default function galleriesList(state = [], action) {
  switch (action.type) {
    case "FETCH_GALLERIES_SUCCESS":
      return action.payload;
    case "GALLERIES_NEXT_PAGE":
      return [...state, ...action.payload];
  }
  return state;
}
