import React from "react"
import PropTypes from "prop-types"

// 描画部分のみを記述

// Component Class
export default class MyButton extends React.Component {
  render() {
    const { onclick, cls, children } = this.props
    return (
      <button onClick={onclick} className={cls}>
        {children}
      </button>
    )
  }
}

MyButton.PropTypes = {
  onclick: PropTypes.func,
  cls: PropTypes.string,
  children: PropTypes.node
}
