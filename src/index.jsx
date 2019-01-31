import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import App from "./App"

import { Provider } from "react-redux"
import configStore from "./store/configStore"

// メイン処理
const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
