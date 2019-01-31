import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

// 描画部分のみを記述

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
})

// Component Class
class MyButton extends React.Component {
  render() {
    const { onclick, cls, children } = this.props
    return (
      <Button onClick={onclick} className={cls} color="primary">
        {children}
      </Button>
    )
  }
}

// PropTypes
// プロパティ(引き継ぎ情報)の型定義
MyButton.propTypes = {
  onclick: PropTypes.func.isRequired,
  cls: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(MyButton)
