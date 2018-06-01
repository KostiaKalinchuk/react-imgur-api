import { combineReducers } from "redux";

import galleriesList from "./gallerieslist";
import galleriesFilter from "./filter";
import comments from "./comments";

export default combineReducers({
  galleriesList,
  galleriesFilter,
  comments
});
