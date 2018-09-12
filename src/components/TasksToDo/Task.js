import React, { Component } from 'react';

class Task extends Component {
	createTasks = task => (
		<li className="task" key={task.key}>
			<div className="task-texts">
				<p className="task-texts__name-task">{task.text}</p>
				<p className="task-texts__date-task">
					Data wstawienia:{' '}
					<span className="task-texts__date-task-value">{task.date}</span>
				</p>
			</div>
			<div className="task-icons">
				<div className="task-icons__modify-icon">
					<div className="task-icons__modify-icon--yellow-circle" />
				</div>
				<div
					className="task-icons__delete-icon"
					onClick={() => this.deleteTask(task.key)}
				>
					<div className="task-icons__delete-icon--red-cross" />
				</div>
			</div>
		</li>
	);

	deleteTask = key => this.props.delete(key);

	render() {
		const todoEntries = this.props.entries;
		const tasksList = todoEntries.map(this.createTasks);

		return <ul className="tasks-list">{tasksList}</ul>;
	}
}

export default Task;
