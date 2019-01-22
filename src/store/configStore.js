import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux"
// import logger from "redux-logger"
import { createLogger } from "redux-logger"
const logger = createLogger({
  collapsed: true,
  diff: true
})

// Counter
import counterReducer from "../modules/counter"

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      // Counter
      counter: counterReducer,
    }),
    applyMiddleware(logger)
  )
  return store
}
