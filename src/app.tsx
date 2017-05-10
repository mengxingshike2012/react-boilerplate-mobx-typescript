import * as React from 'react'
import { Provider} from 'mobx-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CounterStore from './stores/Counter'
import Home from './pages/home'

export default () => <Provider counterStore={CounterStore}>
	<Router>
		<Route path="/" component={Home} />
	</Router>
</Provider>