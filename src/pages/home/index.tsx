import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {RouteComponentProps} from 'react-router'

import CounterStore from '../../stores/Counter'

export interface HomeProps extends RouteComponentProps<any> {
	counterStore: CounterStore;
}

export interface HomeState {

}

@inject('counterStore')
@observer
export default class Home extends React.Component<HomeProps, HomeState> {

	doSyncAdd = () => this.props.counterStore.increment()

	doAsyncAdd = () => this.props.counterStore.asyncIncrement()

	doAsyncAdd2 = () => this.props.counterStore.asyncIncrement2()

	render() {
		return (
			<div>
				{this.props.counterStore.count}
				<br/>
				<span onClick={this.doSyncAdd}> + increment </span>
				<br />
				<span onClick={this.doAsyncAdd}> + async increment </span>
				<br />
				<span onClick={this.doAsyncAdd2}> + async increment </span>
			</div>
		)
	}
}