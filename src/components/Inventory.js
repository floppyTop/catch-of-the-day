import React from 'react';
import AddFishForm from './AddFishForm';
import { formatPrice } from '../helpers';

class Inventory extends React.Component {
constructor() {
	super();
	this.renderInventory = this.renderInventory.bind(this);
	this.handleChange = this.handleChange.bind(this);
}

handleChange(e, key) {
	const fish = this.props.fishes[key];
	//take a copy of that fish and update it with the new data
	//const updatedFish = {...}
	const updatedFish = {
		...fish,
		[e.target.name]: e.target.value
	}

	this.props.updateFish(key, updatedFish);

	console.log(updatedFish);
}

renderInventory(key) {
	const fish = this.props.fishes[key];
	return (
		<div className="fish-edit" key={key}>
			<input type="text" name="name" defaultValue={fish.name} placeholder="Fish Name"
			onChange={(e) => this.handleChange(e, key)} />
			<input onChange={(e) => this.handleChange(e,(key))} type="text" name="price" defaultValue={formatPrice(fish.price)} placeholder="Fish Price" />

			<select onChange={(e) => this.handleChange(e, key)} type="text" name="status" defaultValue={fish.status} placeholder="Fish Status">
				<option value="available">Fresh!</option>
				<option value="unavailable">Sold Out!</option>
			</select>

			<textarea onChange={(e) => this.handleChange(e, key)} type="text" name="desc" defaultValue={fish.desc} placeholder="Fish Desc"></textarea>
			<input onChange={(e) => this.handleChange(e, key)} type="text" name="image" defaultValue={fish.image} placeholder="Fish Image" />
			<button onClick={(e) => this.props.removeFish(key)}>Remove Fish</button>
		</div>
	)
}

	render() {
		return (
			<div>
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(this.renderInventory)}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
			</div>
		)
	}
}

export default Inventory;