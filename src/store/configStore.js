import {
  createStore,
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

// debug 用
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

// debug 用
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

// store定義
// middleware, reducerなどを関連付ける
export default function configStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
