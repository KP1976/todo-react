import React, { Component } from 'react';
import Task from './Task';

class TasksList extends Component {
	state = {
		tasks: [],
		taskName: '',
	};

	onChange = e => {
		this.setState({ taskName: e.target.value });
	};

	addTask = e => {
		e.preventDefault();

		if (this.state.taskName !== '') {
			const newTask = {
				text: this.state.taskName,
				key: Date.now(),
			};

			this.setState(prevState => {
				return {
					tasks: prevState.tasks.concat(newTask),
				};
			});
		}

		// Czyszczenie inputa
		this.setState({ taskName: '' });
	};

	render() {
		return (
			<div className="tasks-list-container">
				<form className="add-task" onSubmit={this.addTask}>
					<label className="add-task__label">Wpisz nazwę zadania</label>
					<input
						type="text"
						className="add-task__input"
						onChange={this.onChange}
						value={this.state.taskName}
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
				<Task entries={this.state.tasks} />
			</div>
		);
	}
}

export default TasksList;
