import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}
	goToStore(event) {
		//hurs some lahgs
		console.log('You Changed the URL');
		//first, get text from input
		const storeId = (this.storeInput.value);
		//second, transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}
	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
				<button type="submit">Visit Store</button>														
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}


export default StorePicker;