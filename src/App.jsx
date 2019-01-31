import React, { Component } from "react"
import Counter from "./containers/counter"

// メインのコンポーネント
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    )
  }
}

export default App
