import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../modules/counter"

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
  return bindActionCreators( actions, dispatch ) 
}

// Connect
// コンポーネント（表示側）、コンテナ(状態管理側)の結びつけ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
