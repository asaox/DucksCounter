import { combineReducers } from "redux"
import { connectRouter } from 'connected-react-router'
import counter from "./counter"

// reducerのとりまとめ
// modulesで定義したクラスのreducerを定義する
// configStoreで代表して使われる

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter,
})

export default rootReducer
