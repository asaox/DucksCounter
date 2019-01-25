import React from "react"
import PropTypes from "prop-types"
import MyButton from "./mybutton"

// 描画部分のみを記述

// Component Class
export default class Counter extends React.Component {
  render() {
    const { increment, decrement, counter } = this.props
    return (
      <div id="CounterDiv">
        <h2 className="CounterTitle">Counter</h2>
        <MyButton onclick={increment} cls="incrButton" children="increment" />

        <MyButton onclick={decrement} cls="decrButton">
          decrement
        </MyButton>
        <div className="CounterVaule">Count: {counter.count}</div>
      </div>
    )
  }
}

Counter.PropTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.object.isRequired,
}
