export default function galleriesFilter(
  state = {
    page: "0",
    section: "hot",
    sort: "viral",
    window: "day"
  },
  action
) {
  switch (action.type) {
    case "CHANGE_FILTER":
      return Object.assign({}, state, action.payload.params);
  }
  return state;
}
