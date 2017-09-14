import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSaga from "redux-saga"

import reducers from "../reducers"
import saga from "./Saga"

const sagaMiddleware = createSaga()
// Redux store browser extension support
const composeEnhancers = composeWithDevTools({})

const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(sagaMiddleware)
	)
)

sagaMiddleware.run(saga)

export default store
