import { connect } from "react-redux"
import * as module from "../modules/counter"

//Conponent Class
import Counter from "../components/counter"

// mapStateToProps
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(module.increment()),
    decrement: () => dispatch(module.decrement())
  }
}

// Connect
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
