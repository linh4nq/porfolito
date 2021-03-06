import createHistory from "history/createBrowserHistory";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { uiReducer, uiEpic } from "./ui";
import { galleryReducer, galleryEpic } from "./gallery";

export const history = createHistory();
const router = routerMiddleware(history);
const rootEpic = combineEpics(uiEpic, galleryEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const middleWares = [router, epicMiddleware];

const rootReducer = combineReducers({
  router: routerReducer,
  ui: uiReducer,
  gallery: galleryReducer,
});
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
