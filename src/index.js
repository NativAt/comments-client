import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import App from './components/App'

import 'sanitize.css/sanitize.css'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
      </div>  
    </ConnectedRouter>
  </Provider>,
  target
)
