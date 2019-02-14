import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import React from "react"
import PropTypes from "prop-types"
import MyButton from "../components/mybutton"
import * as actions from "../modules/counter"

// Component Class
// コンポーネントクラスのインポート
export class Counter extends React.Component {
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

// mapStateToProps
// State -> Props
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

// mapDispatchToProps
// Action の dispatch
const mapDispatchToProps = dispatch => {
  return bindActionCreators( actions, dispatch ) 
}

// Connect
// コンポーネント（表示側）、コンテナ(状態管理側)の結びつけ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
