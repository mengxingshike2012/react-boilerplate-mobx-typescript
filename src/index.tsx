import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {AppContainer} from 'react-hot-loader'
import App from './app'
import {Hello} from './components/Hello'

const render = () => {
	ReactDOM.render(
  		// <Hello compiler='typescript' framework='react' />,
  		<App />,
  		document.getElementById('root')
  		)
}

render()

if (module.hot) {
	module.hot.accept('./app', () => {
		render()
	})
}

