import {
  createStore,
  applyMiddleware,
  compose
} from "redux"
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import rootReducer from "./modules/root_reducer"
import * as actionCreators from "./modules/counter"

const middlewares = []

if (process.env.NODE_ENV !== `production`) {
  // only develop
  const Logger = require(`redux-logger`)
  const logger = Logger.createLogger({
    collapsed: false,
    diff: true,
  })
  middlewares.push(logger)
}

// debug 用
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        actionCreators,
        serialize: true,
        trace: true,
        traceLimit: 25,
      })
    : compose
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

export const history = createBrowserHistory()
middlewares.push(routerMiddleware(history))

// store定義
// middleware, reducerなどを関連付ける
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer(history),
    preloadedState,
    enhancer,
  )
}
