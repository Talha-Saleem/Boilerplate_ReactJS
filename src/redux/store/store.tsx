import { createStore, applyMiddleware, compose } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers/RootReducer";

const logger = createLogger();
const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
