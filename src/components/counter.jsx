import React from "react"
import PropTypes from "prop-types"
import MyButton from "./mybutton"

// Component Class
// 画面表示するコンポーネント
// カスタマイズする場合などはパーツに分割する
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

// PropTypes
// プロパティ(引き継ぎ情報)の型定義
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.object.isRequired
}
