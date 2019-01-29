import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose
} from "redux"

import rootReducer from "../modules/root_reducer"

const middlewares = []

if (process.env.NODE_ENV !== `production`) {
  // only develop
  const Logger = require(`redux-logger`)
  const logger = Logger.createLogger({
    // collapsed: true,
    diff: true
  })
  middlewares.push(logger)
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export default function createStore() {
  const store = reduxCreateStore(
    rootReducer,
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
