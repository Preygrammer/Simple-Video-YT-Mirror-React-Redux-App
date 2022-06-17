import { combineReducers } from "redux";
import VideosReducer from "./videosReducer";

const rootReducer = combineReducers({
  videos: VideosReducer
});

export default rootReducer;
