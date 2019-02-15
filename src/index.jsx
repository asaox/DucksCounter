import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { pinkA200 } from "material-ui/styles/colors"
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import App from "./App"
import configureStore, { history } from "./configureStore"
import withTracker from "./components/with_tracker"
import NoMatch from "./components/no_match"
import "./styles.css"

// メイン処理
const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, Meiryo sans-serif',
  palette: {
    primary1Color: '#0b419a',
    primary2Color: '#00cae4',
    accent1Color: pinkA200,
  },
})

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={withTracker(App, {userId : 123})} />
          <Route component={withTracker(NoMatch, {userId : 456})}/>
        </Switch>
      </ConnectedRouter> 
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
)
