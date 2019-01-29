import { connect } from "react-redux"
import * as module from "../modules/counter"

// Conponent Class
// コンポーネントクラスのインポート
import Counter from "../components/counter"

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
  return {
    increment: () => dispatch(module.increment()),
    decrement: () => dispatch(module.decrement())
  }
}

// Connect
// コンポーネント（表示側）、コンテナ(状態管理側)の結びつけ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
