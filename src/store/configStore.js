import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
  compose
} from "redux"
// import logger from "redux-logger"
import { createLogger } from "redux-logger"
const logger = createLogger({
  collapsed: true,
  diff: true
})

// Counter
import counterReducer from "../modules/counter"

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger)
);

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      // Counter
      counter: counterReducer,
    }),
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
