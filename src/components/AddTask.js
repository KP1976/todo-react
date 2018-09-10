import React, { Component } from 'react';

class AddTask extends Component {
	state = {
		task: '',
	};

	handleChange = e => {
		this.setState({ task: e.target.value });
	};

	render() {
		const { task } = this.state;
		console.log(task);
		return (
			<div className="add-task">
				<label className="add-task__label">Wpisz nazwę zadania</label>
				<input
					type="text"
					className="add-task__input"
					onChange={this.handleChange}
				/>
				<button className="add-task__button">dodaj</button>
			</div>
		);
	}
}

export default AddTask;
