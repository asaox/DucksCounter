import React from "react"

// Component Class
// export default class Counter extends React.Component {
export default class Counter extends React.Component {
  render() {
    const { increment, decrement, counter } = this.props
    return (
      <div id="CounterDiv">
        <h2 className="CounterTitle">Counter</h2>
        <button onClick={increment} className="incrButton">
          increment
        </button>
        <button onClick={decrement} className="decrButton">
          decrement
        </button>
        <div className="CounterVaule">Count: {counter.count}</div>
      </div>
    )
  }
}

