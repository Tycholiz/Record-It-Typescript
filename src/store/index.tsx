import {
	createStore,
	applyMiddleware,
	combineReducers,
} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "../reducers";

const reducer = combineReducers(reducers)
let store = null;

if (__DEV__) {
	store = createStore(
		reducer,
		composeWithDevTools(
			// applyMiddleware(thunk, logger), //Note: logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions
			applyMiddleware(thunk),
	));
} else {
	store = createStore(
		reducer,
		{},
		applyMiddleware(thunk),
	);
}

export default store;