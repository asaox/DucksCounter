import { combineReducers } from "redux"
import counter from "./counter"

// reducerのとりまとめ
// modulesで定義したクラスのreducerを定義する
// configStoreで代表して使われる

const rootReducer = combineReducers({
  counter
})

export default rootReducer
