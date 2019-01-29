import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
  compose
} from "redux"

const middlewares = []

if (process.env.NODE_ENV !== `production`) {
  // only develop
  const Logger = require(`redux-logger`)
  const logger = Logger.createLogger({
  //  collapsed: true,
    diff: true
  })
  middlewares.push(logger)
}

// Counter
import counterReducer from "../modules/counter"

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      // Counter
      counter: counterReducer
    }),
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
