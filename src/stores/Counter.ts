import { observable, action } from 'mobx'

export class CounterStore {

	@observable count: number = 5;

	@action increment() {
		this.count += 5;
	}

	@action async asyncIncrement() {
		const by = await Promise.resolve(3);
		this.count += by;
	}

	@action asyncIncrement2() {
		setTimeout(() => {
			this.count+= 100
		}, 1000)
	}

}

export default new CounterStore