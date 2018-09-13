import React, { Component } from 'react';

class AddTasks extends Component {
	state = {
		text: '',
		date: '',
	};

	render() {
		return (
			<React.Fragment>
				<form className="add-task">
					<label htmlFor="task-text" className="add-task__label">
						Zadanie do wykonania
					</label>
					<input
						type="text"
						className="add-task__input"
						name="task-text"
						placeholder="Wpisz nazwę zadania"
					/>
					<button type="submit" className="add-task__button">
						dodaj
					</button>
				</form>
				<h2 className="tasks-list-container__title">
					lista zadań{' '}
					<strong className="tasks-list-container__title--yellow">
						do zrobienia
					</strong>
				</h2>
			</React.Fragment>
		);
	}
}
export default AddTasks;
