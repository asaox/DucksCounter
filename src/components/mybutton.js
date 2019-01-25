import React from "react"
import PropTypes from "prop-types"

// 描画部分のみを記述

// Component Class
export default class MyButton extends React.Component {
  render() {
    const { onclick, cls, label } = this.props
    return(
        <button onClick={onclick}className="{cls}">
            {label}
        </button>
    )
  }
}

MyButton.PropTypes = {
  onclick: PropTypes.func,
  cls: PropTypes.string,
  label: PropTypes.string,
}
