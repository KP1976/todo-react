import React, { Component } from 'react';

class AddTask extends Component {
	render() {
		return (
			<div className="add-task-container">
				<label className="add-task__label">Wpisz nazwę zadania</label>
				<input type="text" className="add-task__input" />
				<button className="add-task__button">dodaj</button>
			</div>
		);
	}
}

export default AddTask;
